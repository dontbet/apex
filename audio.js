'use strict';

let audioEnabled = true;
let sfxEnabled = true;
let musicEnabled = true;

// Professional deep UI sound effects — Web Audio API
let sfxAudioCtx = null;

function getCtx() {
  if (!audioEnabled || !sfxEnabled) {
    return null;
  }

  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return null;
  }

  if (!sfxAudioCtx || sfxAudioCtx.state === 'closed') {
    sfxAudioCtx = new Ctx();
  }

  if (sfxAudioCtx.state === 'suspended') {
    sfxAudioCtx.resume().catch(() => {});
  }

  return sfxAudioCtx;
}

function createCompressor(ctx) {
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -18;
  comp.knee.value = 6;
  comp.ratio.value = 4;
  comp.attack.value = 0.002;
  comp.release.value = 0.08;
  return comp;
}

function subBody(ctx, t, startHz, endHz, vol, dur, dest) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(startHz, t);
  osc.frequency.exponentialRampToValueAtTime(endHz, t + dur);
  lp.type = 'lowpass';
  lp.frequency.value = 200;
  g.gain.setValueAtTime(vol, t);
  g.gain.setValueCurveAtTime(
    new Float32Array([vol, vol * 0.8, vol * 0.3, 0.001]),
    t,
    dur
  );
  osc.connect(lp).connect(g).connect(dest);
  osc.start(t);
  osc.stop(t + dur + 0.01);
}

function transient(ctx, t, centerHz, vol, dur, dest) {
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    const env = Math.pow(1 - i / len, 4);
    d[i] = (Math.random() * 2 - 1) * env;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = centerHz;
  bp.Q.value = 1.5;
  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(bp).connect(g).connect(dest);
  src.start(t);
  src.stop(t + dur);
}

function warmTone(ctx, t, freq, vol, attack, sustain, release, dest) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  const ws = ctx.createWaveShaper();
  const curve = new Float32Array(256);
  for (let i = 0; i < 256; i += 1) {
    const x = i / 128 - 1;
    curve[i] = ((Math.PI + 2) * x) / (Math.PI + 2 * Math.abs(x));
  }
  ws.curve = curve;
  ws.oversample = '2x';
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(freq * 3, t);
  lp.frequency.exponentialRampToValueAtTime(freq * 1.5, t + attack + sustain + release);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, t);
  const total = attack + sustain + release;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + attack);
  g.gain.setValueAtTime(vol, t + attack + sustain);
  g.gain.exponentialRampToValueAtTime(0.001, t + total);
  osc.connect(ws).connect(lp).connect(g).connect(dest);
  osc.start(t);
  osc.stop(t + total + 0.01);
}

function resonantBody(ctx, t, freq, q, vol, dur, dest) {
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    const env = Math.pow(1 - i / len, 2);
    d[i] = (Math.random() * 2 - 1) * env;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = freq;
  bp.Q.value = q;
  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(bp).connect(g).connect(dest);
  src.start(t);
  src.stop(t + dur);
}

function cabinBell(ctx, t, freq, vol, decay, dest) {
  const osc1 = ctx.createOscillator();
  const g1 = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.value = freq;
  g1.gain.setValueAtTime(vol, t);
  g1.gain.linearRampToValueAtTime(vol * 0.95, t + 0.003);
  g1.gain.exponentialRampToValueAtTime(vol * 0.6, t + decay * 0.15);
  g1.gain.exponentialRampToValueAtTime(0.001, t + decay);
  osc1.connect(g1).connect(dest);
  osc1.start(t);
  osc1.stop(t + decay + 0.01);

  const osc2 = ctx.createOscillator();
  const g2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.value = freq * 2.0;
  g2.gain.setValueAtTime(vol * 0.15, t);
  g2.gain.exponentialRampToValueAtTime(0.001, t + decay * 0.6);
  osc2.connect(g2).connect(dest);
  osc2.start(t);
  osc2.stop(t + decay * 0.6 + 0.01);

  const osc3 = ctx.createOscillator();
  const g3 = ctx.createGain();
  osc3.type = 'sine';
  osc3.frequency.value = freq * 3.0;
  g3.gain.setValueAtTime(vol * 0.05, t);
  g3.gain.exponentialRampToValueAtTime(0.001, t + decay * 0.3);
  osc3.connect(g3).connect(dest);
  osc3.start(t);
  osc3.stop(t + decay * 0.3 + 0.01);

  const tailLen = Math.max(1, Math.floor(ctx.sampleRate * decay * 0.5));
  const tailBuf = ctx.createBuffer(1, tailLen, ctx.sampleRate);
  const td = tailBuf.getChannelData(0);
  for (let i = 0; i < tailLen; i += 1) {
    const env = Math.pow(1 - i / tailLen, 2);
    td[i] = (Math.random() * 2 - 1) * env;
  }
  const tailSrc = ctx.createBufferSource();
  tailSrc.buffer = tailBuf;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = freq;
  bp.Q.value = 8;
  const tailG = ctx.createGain();
  tailG.gain.setValueAtTime(vol * 0.02, t + 0.01);
  tailG.gain.exponentialRampToValueAtTime(0.001, t + decay * 0.7);
  tailSrc.connect(bp).connect(tailG).connect(dest);
  tailSrc.start(t + 0.01);
  tailSrc.stop(t + decay * 0.7 + 0.01);
}

function playBetSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  subBody(ctx, t, 80, 30, 0.28, 0.1, comp);
  transient(ctx, t, 2800, 0.12, 0.025, comp);
  resonantBody(ctx, t + 0.005, 180, 3, 0.06, 0.08, comp);
}

function playCashOutSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  cabinBell(ctx, t, 330, 0.25, 1.4, comp);
  cabinBell(ctx, t + 0.45, 247, 0.20, 1.6, comp);
}

function playDroneCashOutSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  cabinBell(ctx, t, 330, 0.22, 0.8, comp);
}

function playBuyDroneSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  subBody(ctx, t, 100, 40, 0.18, 0.07, comp);
  transient(ctx, t, 2400, 0.1, 0.02, comp);
  transient(ctx, t + 0.035, 3800, 0.06, 0.015, comp);
  resonantBody(ctx, t + 0.005, 220, 2.5, 0.04, 0.06, comp);
}

function playSlotTickSound(pitch = 1.0, vol = 0.12) {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  const dur = 0.018;
  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    const env = Math.pow(1 - i / len, 8);
    d[i] = (Math.random() * 2 - 1) * env;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.playbackRate.value = pitch;

  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 3200 * pitch;
  bp.Q.value = 2.0;

  const osc = ctx.createOscillator();
  const og = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 1200 * pitch;
  og.gain.setValueAtTime(vol * 0.5, t);
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.012);
  osc.connect(og).connect(comp);
  osc.start(t);
  osc.stop(t + 0.015);

  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(bp).connect(g).connect(comp);
  src.start(t);
  src.stop(t + dur);
}

function playSlotLandSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  subBody(ctx, t, 90, 35, 0.30, 0.12, comp);
  transient(ctx, t, 800, 0.10, 0.03, comp);
  resonantBody(ctx, t + 0.005, 160, 2.5, 0.08, 0.10, comp);
  warmTone(ctx, t + 0.03, 220, 0.12, 0.01, 0.08, 0.25, comp);
  warmTone(ctx, t + 0.10, 247, 0.09, 0.01, 0.06, 0.30, comp);
}

function playFlyAwaySwooshSound() {
  const ctx = getCtx();
  if (!ctx) {
    return;
  }
  const t = ctx.currentTime;
  const comp = createCompressor(ctx);
  comp.connect(ctx.destination);

  const dur = 1.8;

  const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i += 1) {
    last += (Math.random() * 2 - 1) * 0.06;
    last = Math.max(-1, Math.min(1, last));
    d[i] = last;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;

  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(500, t);
  lp.frequency.exponentialRampToValueAtTime(80, t + dur);
  lp.Q.value = 0.7;

  const g = ctx.createGain();
  g.gain.setValueAtTime(0.001, t);
  g.gain.linearRampToValueAtTime(0.18, t + 0.15);
  g.gain.setValueAtTime(0.18, t + dur * 0.3);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);

  src.connect(lp).connect(g).connect(comp);
  src.start(t);
  src.stop(t + dur + 0.01);

  const sub = ctx.createOscillator();
  const subG = ctx.createGain();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(50, t);
  sub.frequency.exponentialRampToValueAtTime(28, t + dur);
  subG.gain.setValueAtTime(0.001, t);
  subG.gain.linearRampToValueAtTime(0.1, t + 0.2);
  subG.gain.setValueAtTime(0.1, t + dur * 0.25);
  subG.gain.exponentialRampToValueAtTime(0.001, t + dur);
  sub.connect(subG).connect(comp);
  sub.start(t);
  sub.stop(t + dur + 0.01);
}

// ── Background lofi music engine (ported from original) ──
const CHORDS = [
  [130.81, 164.81, 246.94, 293.66],
  [110.0, 130.81, 196.0, 246.94],
  [87.31, 130.81, 164.81, 220.0],
  [98.0, 146.83, 196.0, 246.94],
  [130.81, 155.56, 196.0, 261.63],
  [116.54, 146.83, 220.0, 293.66],
  [103.83, 130.81, 196.0, 261.63],
  [110.0, 164.81, 220.0, 329.63]
];

const MELODY_NOTES = [
  523.25, 587.33, 659.25, 783.99, 880.0,
  392.0, 440.0, 523.25, 659.25, 783.99
];

const BASS_ROOTS = [65.41, 55.0, 43.65, 49.0, 65.41, 58.27, 51.91, 55.0];

const BASS_PATTERNS = [
  [1, 0, 2, 0],
  [1, 0, 0, 3],
  [1, 0, 3, 2],
  [1, 2, 0, 1]
];

const BPM = 72;
const BEAT_TIME = 60 / BPM;
const BAR_TIME = BEAT_TIME * 4;
const SCHEDULE_AHEAD = 0.15;
const TICK_MS = 25;
const SECTION_BARS = 8;

const lofiState = {
  autoStarted: false,
  ctx: null,
  master: null,
  timer: null,
  nextBeatTime: 0,
  beat: 0,
  chordIndex: 0,
  barCount: 0,
  section: 0,
  nodes: [],
  reverb: null,
  reverbSend: null,
  interactionBound: false,
  pointerHandler: null,
  keyHandler: null,
  playing: false
};

function trackNode(node) {
  lofiState.nodes.push(node);
  node.onended = () => {
    lofiState.nodes = lofiState.nodes.filter((x) => x !== node);
  };
}

function createReverb(ctx) {
  const rate = ctx.sampleRate;
  const length = rate * 3;
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch += 1) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i += 1) {
      const t = i / rate;
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.2) * Math.exp(-3 * t);
    }
  }
  const convolver = ctx.createConvolver();
  convolver.buffer = impulse;
  return convolver;
}

function playPad(ctx, dest, notes, time, dur) {
  for (const freq of notes) {
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, time);
    osc1.detune.setValueAtTime((Math.random() - 0.5) * 8, time);

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 1.002, time);
    osc2.detune.setValueAtTime((Math.random() - 0.5) * 10, time);

    const osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 0.5, time);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, time);
    filter.frequency.linearRampToValueAtTime(600, time + dur * 0.4);
    filter.frequency.setTargetAtTime(350, time + dur * 0.6, dur * 0.2);
    filter.Q.setValueAtTime(0.7, time);

    const gain = ctx.createGain();
    const v = 0.025;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(v, time + dur * 0.35);
    gain.gain.setTargetAtTime(v * 0.6, time + dur * 0.6, dur * 0.15);
    gain.gain.setTargetAtTime(0.0001, time + dur - 0.5, 0.3);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.015, time);

    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(subGain);
    subGain.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    if (lofiState.reverbSend) {
      const revSend = ctx.createGain();
      revSend.gain.setValueAtTime(0.3, time);
      gain.connect(revSend);
      revSend.connect(lofiState.reverbSend);
    }

    osc1.start(time);
    osc1.stop(time + dur + 0.6);
    osc2.start(time);
    osc2.stop(time + dur + 0.6);
    osc3.start(time);
    osc3.stop(time + dur + 0.6);
    trackNode(osc1);
    trackNode(osc2);
    trackNode(osc3);
  }
}

function playChime(ctx, dest, freq, time) {
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);

  const osc2 = ctx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2.0, time);

  const osc3 = ctx.createOscillator();
  osc3.type = 'sine';
  osc3.frequency.setValueAtTime(freq * 3.0, time);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 4, time);
  filter.frequency.exponentialRampToValueAtTime(freq * 1.5, time + 0.8);
  filter.Q.setValueAtTime(0.5, time);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(0.03, time + 0.01);
  gain.gain.setTargetAtTime(0.015, time + 0.1, 0.3);
  gain.gain.setTargetAtTime(0.0001, time + 1.5, 0.5);

  const h2g = ctx.createGain();
  h2g.gain.setValueAtTime(0.008, time);
  h2g.gain.setTargetAtTime(0.0001, time + 0.6, 0.2);

  const h3g = ctx.createGain();
  h3g.gain.setValueAtTime(0.003, time);
  h3g.gain.setTargetAtTime(0.0001, time + 0.3, 0.1);

  osc.connect(filter);
  osc2.connect(h2g);
  h2g.connect(filter);
  osc3.connect(h3g);
  h3g.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  if (lofiState.reverbSend) {
    const revSend = ctx.createGain();
    revSend.gain.setValueAtTime(0.5, time);
    gain.connect(revSend);
    revSend.connect(lofiState.reverbSend);
  }

  osc.start(time);
  osc.stop(time + 3);
  osc2.start(time);
  osc2.stop(time + 2);
  osc3.start(time);
  osc3.stop(time + 1.5);
  trackNode(osc);
  trackNode(osc2);
  trackNode(osc3);
}

function playDrone(ctx, dest, freq, time, dur) {
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(0.04, time + dur * 0.3);
  gain.gain.setTargetAtTime(0.0001, time + dur - 1, 0.5);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(120, time);
  filter.Q.setValueAtTime(0.5, time);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc.start(time);
  osc.stop(time + dur + 1);
  trackNode(osc);
}

function playBass(ctx, dest, freq, time, dur, nextFreq) {
  const osc1 = ctx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, time);

  const osc2 = ctx.createOscillator();
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq, time);

  const sub = ctx.createOscillator();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(freq * 0.5, time);

  if (nextFreq && nextFreq > 0) {
    const slideTime = time + dur * 0.7;
    osc1.frequency.setTargetAtTime(nextFreq, slideTime, 0.08);
    osc2.frequency.setTargetAtTime(nextFreq, slideTime, 0.08);
    sub.frequency.setTargetAtTime(nextFreq * 0.5, slideTime, 0.08);
  }

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(120, time);
  filter.frequency.linearRampToValueAtTime(400, time + 0.06);
  filter.frequency.setTargetAtTime(200, time + 0.15, 0.12);
  filter.Q.setValueAtTime(2, time);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(0.14, time + 0.04);
  gain.gain.setTargetAtTime(0.09, time + 0.1, 0.15);
  gain.gain.setTargetAtTime(0.0001, time + dur - 0.05, 0.06);

  const triGain = ctx.createGain();
  triGain.gain.setValueAtTime(0.04, time);

  const subGain = ctx.createGain();
  subGain.gain.setValueAtTime(0.06, time);

  osc1.connect(filter);
  osc2.connect(triGain);
  triGain.connect(filter);
  sub.connect(subGain);
  subGain.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  if (lofiState.reverbSend) {
    const revSend = ctx.createGain();
    revSend.gain.setValueAtTime(0.1, time);
    gain.connect(revSend);
    revSend.connect(lofiState.reverbSend);
  }

  const end = time + dur + 0.1;
  osc1.start(time);
  osc1.stop(end);
  osc2.start(time);
  osc2.stop(end);
  sub.start(time);
  sub.stop(end);
  trackNode(osc1);
  trackNode(osc2);
  trackNode(sub);
}

function playPulse(ctx, dest, time) {
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(55, time);
  osc.frequency.exponentialRampToValueAtTime(35, time + 0.2);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(0.06, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.5);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(100, time);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc.start(time);
  osc.stop(time + 0.6);
  trackNode(osc);
}

function scheduleBeat(ctx, dest, time, beat, chordIdx, section, barInSection) {
  const chord = CHORDS[chordIdx % CHORDS.length];
  const rootFreq = chord[0];

  if (beat === 0 && barInSection % 2 === 0) {
    playPad(ctx, dest, chord, time, BAR_TIME * 2 * 0.95);
  }

  if (beat === 0 && barInSection % 4 === 0) {
    playDrone(ctx, dest, rootFreq * 0.25, time, BAR_TIME * 4);
  }

  if (beat === 0 || beat === 2) {
    playPulse(ctx, dest, time);
  }

  const sectionPhase = section % 4;
  const chimeChance = sectionPhase === 0 ? 0.08 : sectionPhase === 1 ? 0.15 : sectionPhase === 2 ? 0.12 : 0.06;

  if (Math.random() < chimeChance) {
    const note = MELODY_NOTES[Math.floor(Math.random() * MELODY_NOTES.length)];
    const offset = Math.random() * 0.08;
    playChime(ctx, dest, note, time + offset);
  }

  if (beat === 0 && barInSection === 0 && Math.random() < 0.4) {
    const n1 = MELODY_NOTES[Math.floor(Math.random() * 5)];
    const n2 = MELODY_NOTES[Math.floor(Math.random() * 5) + 5];
    playChime(ctx, dest, n1, time + 0.05);
    playChime(ctx, dest, n2, time + BEAT_TIME * 0.5);
  }

  const pattern = BASS_PATTERNS[chordIdx % BASS_PATTERNS.length];
  const bassNote = pattern[beat];
  if (bassNote > 0) {
    const bassRoot = BASS_ROOTS[chordIdx % BASS_ROOTS.length];
    const freqMul = bassNote === 2 ? 1.5 : bassNote === 3 ? 2 : 1;
    const bassFreq = bassRoot * freqMul;

    const nextBeatIdx = (beat + 1) % 4;
    const nextNote = pattern[nextBeatIdx];
    let slideTarget;
    if (nextNote > 0) {
      const nextMul = nextNote === 2 ? 1.5 : nextNote === 3 ? 2 : 1;
      slideTarget = bassRoot * nextMul;
    }

    playBass(ctx, dest, bassFreq, time, BEAT_TIME * 0.9, slideTarget);
  }
}

function stopMusic() {
  if (lofiState.timer) {
    clearInterval(lofiState.timer);
    lofiState.timer = null;
  }

  lofiState.nodes.forEach((n) => {
    try {
      n.stop();
    } catch (_) {}
  });
  lofiState.nodes = [];

  if (lofiState.ctx) {
    lofiState.ctx.close().catch(() => {});
    lofiState.ctx = null;
  }

  lofiState.master = null;
  lofiState.reverb = null;
  lofiState.reverbSend = null;
  lofiState.playing = false;
}

function startMusic() {
  if (!audioEnabled || !musicEnabled || lofiState.playing) {
    return;
  }

  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    return;
  }

  const ctx = new Ctx();
  lofiState.ctx = ctx;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.65, ctx.currentTime);
  lofiState.master = master;

  const reverb = createReverb(ctx);
  lofiState.reverb = reverb;
  const reverbSend = ctx.createGain();
  reverbSend.gain.setValueAtTime(1, ctx.currentTime);
  lofiState.reverbSend = reverbSend;

  const warmth = ctx.createBiquadFilter();
  warmth.type = 'lowshelf';
  warmth.frequency.setValueAtTime(250, ctx.currentTime);
  warmth.gain.setValueAtTime(3, ctx.currentTime);

  const hiCut = ctx.createBiquadFilter();
  hiCut.type = 'lowpass';
  hiCut.frequency.setValueAtTime(3500, ctx.currentTime);
  hiCut.Q.setValueAtTime(0.3, ctx.currentTime);

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-20, ctx.currentTime);
  compressor.knee.setValueAtTime(15, ctx.currentTime);
  compressor.ratio.setValueAtTime(3, ctx.currentTime);
  compressor.attack.setValueAtTime(0.01, ctx.currentTime);
  compressor.release.setValueAtTime(0.25, ctx.currentTime);

  master.connect(warmth);
  warmth.connect(hiCut);
  hiCut.connect(compressor);
  compressor.connect(ctx.destination);

  reverbSend.connect(reverb);
  const reverbWet = ctx.createGain();
  reverbWet.gain.setValueAtTime(0.4, ctx.currentTime);
  reverb.connect(reverbWet);
  reverbWet.connect(compressor);

  const noiseLen = ctx.sampleRate * 6;
  const noiseBuf = ctx.createBuffer(2, noiseLen, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch += 1) {
    const data = noiseBuf.getChannelData(ch);
    let prev = 0;
    for (let i = 0; i < noiseLen; i += 1) {
      prev += (Math.random() * 2 - 1) * 0.03;
      prev *= 0.998;
      data[i] = prev;
    }
  }

  const noiseSrc = ctx.createBufferSource();
  noiseSrc.buffer = noiseBuf;
  noiseSrc.loop = true;

  const noiseLp = ctx.createBiquadFilter();
  noiseLp.type = 'lowpass';
  noiseLp.frequency.setValueAtTime(150, ctx.currentTime);
  noiseLp.Q.setValueAtTime(0.3, ctx.currentTime);

  const noiseLfo = ctx.createOscillator();
  noiseLfo.type = 'sine';
  noiseLfo.frequency.setValueAtTime(0.07, ctx.currentTime);
  const noiseLfoGain = ctx.createGain();
  noiseLfoGain.gain.setValueAtTime(60, ctx.currentTime);
  noiseLfo.connect(noiseLfoGain);
  noiseLfoGain.connect(noiseLp.frequency);
  noiseLfo.start();

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.045, ctx.currentTime);

  noiseSrc.connect(noiseLp);
  noiseLp.connect(noiseGain);
  noiseGain.connect(compressor);
  noiseSrc.start();
  trackNode(noiseSrc);
  trackNode(noiseLfo);

  lofiState.nextBeatTime = ctx.currentTime + 0.1;
  lofiState.beat = 0;
  lofiState.chordIndex = 0;
  lofiState.barCount = 0;
  lofiState.section = 0;

  const scheduler = () => {
    if (!lofiState.ctx || !lofiState.master) {
      return;
    }

    const c = lofiState.ctx;
    while (lofiState.nextBeatTime < c.currentTime + SCHEDULE_AHEAD) {
      const barInSection = lofiState.barCount % SECTION_BARS;

      scheduleBeat(
        c,
        lofiState.master,
        lofiState.nextBeatTime,
        lofiState.beat,
        lofiState.chordIndex,
        lofiState.section,
        barInSection
      );

      lofiState.beat += 1;
      if (lofiState.beat >= 4) {
        lofiState.beat = 0;
        lofiState.chordIndex = (lofiState.chordIndex + 1) % CHORDS.length;
        lofiState.barCount += 1;
        if (lofiState.barCount % SECTION_BARS === 0) {
          lofiState.section += 1;
        }
      }

      lofiState.nextBeatTime += BEAT_TIME;
    }
  };

  scheduler();
  lofiState.timer = window.setInterval(scheduler, TICK_MS);
  lofiState.playing = true;
}

function startMusicOnFirstInteraction() {
  if (lofiState.interactionBound) {
    return;
  }

  const handleInteraction = () => {
    if (lofiState.autoStarted) {
      return;
    }

    lofiState.autoStarted = true;
    if (audioEnabled && musicEnabled) {
      startMusic();
    }

    if (lofiState.pointerHandler) {
      document.removeEventListener('pointerdown', lofiState.pointerHandler);
    }
    if (lofiState.keyHandler) {
      document.removeEventListener('keydown', lofiState.keyHandler);
    }
  };

  lofiState.pointerHandler = handleInteraction;
  lofiState.keyHandler = handleInteraction;
  lofiState.interactionBound = true;

  document.addEventListener('pointerdown', lofiState.pointerHandler, { once: true });
  document.addEventListener('keydown', lofiState.keyHandler, { once: true });
}

function setAudioEnabled(enabled) {
  audioEnabled = Boolean(enabled);

  if (!audioEnabled) {
    stopMusic();
    if (sfxAudioCtx && sfxAudioCtx.state === 'running') {
      sfxAudioCtx.suspend().catch(() => {});
    }
    return;
  }

  if (sfxEnabled && sfxAudioCtx && sfxAudioCtx.state === 'suspended') {
    sfxAudioCtx.resume().catch(() => {});
  }

  if (musicEnabled && lofiState.autoStarted) {
    startMusic();
  }
}

function setSfxEnabled(enabled) {
  sfxEnabled = Boolean(enabled);

  if (!sfxAudioCtx) {
    return;
  }

  if (!audioEnabled || !sfxEnabled) {
    if (sfxAudioCtx.state === 'running') {
      sfxAudioCtx.suspend().catch(() => {});
    }
    return;
  }

  if (sfxAudioCtx.state === 'suspended') {
    sfxAudioCtx.resume().catch(() => {});
  }
}

function setMusicEnabled(enabled) {
  musicEnabled = Boolean(enabled);

  if (!audioEnabled || !musicEnabled) {
    stopMusic();
    return;
  }

  if (lofiState.autoStarted || lofiState.playing) {
    startMusic();
  }
}

function disposeAudio() {
  stopMusic();

  if (lofiState.pointerHandler) {
    document.removeEventListener('pointerdown', lofiState.pointerHandler);
  }
  if (lofiState.keyHandler) {
    document.removeEventListener('keydown', lofiState.keyHandler);
  }
  lofiState.pointerHandler = null;
  lofiState.keyHandler = null;
  lofiState.interactionBound = false;

  if (sfxAudioCtx && sfxAudioCtx.state !== 'closed') {
    sfxAudioCtx.close().catch(() => {});
  }
  sfxAudioCtx = null;
}

window.playBetSound = playBetSound;
window.playCashOutSound = playCashOutSound;
window.playDroneCashOutSound = playDroneCashOutSound;
window.playBuyDroneSound = playBuyDroneSound;
window.playSlotTickSound = playSlotTickSound;
window.playSlotLandSound = playSlotLandSound;
window.playFlyAwaySwooshSound = playFlyAwaySwooshSound;

window.setF35AudioEnabled = setAudioEnabled;
window.setF35SfxEnabled = setSfxEnabled;
window.setF35MusicEnabled = setMusicEnabled;
window.startF35MusicOnFirstInteraction = startMusicOnFirstInteraction;
window.startF35Music = startMusic;
window.stopF35Music = stopMusic;
window.disposeF35Audio = disposeAudio;
