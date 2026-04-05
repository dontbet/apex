const STATIC_PLAYERS_BY_TAB = {
  top: [
    { user: 'NovaPilot', multiplier: '198.44x', amount: '$426,980.20', multClass: 'hot', money: true },
    { user: 'HyperMint', multiplier: '165.72x', amount: '$381,204.90', multClass: 'hot', money: true },
    { user: 'SteadyFlow', multiplier: '142.09x', amount: '$329,843.11', multClass: 'hot', money: true },
    { user: 'RushGrid', multiplier: '128.63x', amount: '$287,500.00', multClass: 'hot', money: true },
    { user: 'RiskMode', multiplier: '114.52x', amount: '$241,118.44', multClass: 'gold', money: true },
    { user: 'SafeLine', multiplier: '102.80x', amount: '$208,640.35', multClass: 'gold', money: true },
    { user: 'CloudArc', multiplier: '96.14x', amount: '$194,902.80', multClass: 'gold', money: true },
    { user: 'TurboMile', multiplier: '88.31x', amount: '$172,220.14', multClass: 'gold', money: true },
    { user: 'VectorKid', multiplier: '81.90x', amount: '$158,670.29', multClass: 'teal', money: true },
    { user: 'JetStream', multiplier: '75.42x', amount: '$146,332.67', multClass: 'teal', money: true },
    { user: 'FinEdge', multiplier: '69.05x', amount: '$132,700.50', multClass: 'teal', money: true },
    { user: 'LayerQueen', multiplier: '63.77x', amount: '$119,004.98', multClass: 'teal', money: true },
    { user: 'PulseX', multiplier: '57.90x', amount: '$103,455.32', multClass: 'teal', money: true },
    { user: 'HashHero', multiplier: '52.36x', amount: '$97,802.64', multClass: 'peach', money: true },
    { user: 'CrashCat', multiplier: '47.80x', amount: '$89,330.90', multClass: 'peach', money: true },
    { user: 'Starlight', multiplier: '43.28x', amount: '$78,610.42', multClass: 'peach', money: true },
    { user: 'DesignPro', multiplier: '38.14x', amount: '$70,284.10', multClass: 'peach', money: true },
    { user: 'GainGrid', multiplier: '33.82x', amount: '$63,919.88', multClass: 'peach', money: true },
    { user: 'BetaTrack', multiplier: '29.67x', amount: '$56,540.22', multClass: 'gold', money: true },
    { user: 'LuckyLime', multiplier: '24.40x', amount: '$49,335.60', multClass: 'gold', money: true }
  ],
  previous: [
    { user: 'you', multiplier: '3.74x', amount: '$112.20', multClass: 'gold', money: true },
    { user: 'you', multiplier: '2.18x', amount: '$43.60', multClass: 'muted', money: true },
    { user: 'you', multiplier: '1.62x', amount: '$16.20', multClass: 'muted', money: true },
    { user: 'you', multiplier: '-', amount: '$2.55' },
    { user: 'you', multiplier: '-', amount: '$2.55' }
  ]
};

const BET_SEED = [
  { user: 'rushtu', stake: 62.5 },
  { user: 'op..qr', stake: 981.75 },
  { user: 'st..uv', stake: 2521.98 },
  { user: 'PixelMaster', stake: 2.55 },
  { user: 'DesignPro', stake: 2.55 },
  { user: 'FigmaUser', stake: 2.55 },
  { user: 'CreativeMind', stake: 2.55 },
  { user: 'AppBuilder', stake: 2.55 },
  { user: 'UIXpert', stake: 2.55 },
  { user: 'PrototypeKing', stake: 2.55 },
  { user: 'LayerQueen', stake: 2.55 },
  { user: 'UserOne', stake: 2.55 },
  { user: 'Lm..nO', stake: 39.1 },
  { user: 'Ab..cD', stake: 2.55 },
  { user: 'Pq..rS', stake: 62.5 },
  { user: 'Tu..vW', stake: 2.55 },
  { user: 'Xy..zA', stake: 2.55 },
  { user: 'Ef..gH', stake: 2.55 },
  { user: 'JetStream', stake: 190.0 },
  { user: 'NeonDash', stake: 13.3 },
  { user: 'RogueAce', stake: 75.0 },
  { user: 'SpinNova', stake: 45.5 },
  { user: 'CloudNine', stake: 18.8 },
  { user: 'VectorKid', stake: 6.6 },
  { user: 'LuckyLime', stake: 33.3 },
  { user: 'Turbine', stake: 155.5 },
  { user: 'FinEdge', stake: 12.12 },
  { user: 'GainGrid', stake: 90.0 },
  { user: 'BetaTrack', stake: 48.0 },
  { user: 'PulseX', stake: 24.44 },
  { user: 'HashHero', stake: 38.38 },
  { user: 'CrashCat', stake: 17.7 },
  { user: 'Starlight', stake: 66.6 },
  { user: 'NovaPilot', stake: 44.4 },
  { user: 'HyperMint', stake: 58.8 },
  { user: 'SteadyFlow', stake: 27.7 },
  { user: 'RushGrid', stake: 31.3 },
  { user: 'RiskMode', stake: 22.2 }
];

const TOP_RANGE_USER_SETS = {
  day: ['PulseX', 'FinEdge', 'NeonDash', 'CloudNine', 'BetaTrack', 'UserOne', 'Lm..nO', 'Ab..cD', 'Tu..vW', 'GainGrid', 'RushGrid', 'SafeLine', 'VectorKid', 'Pq..rS'],
  week: ['JetStream', 'RiskMode', 'LuckyLime', 'Starlight', 'CrashCat', 'PrototypeKing', 'CreativeMind', 'HashHero', 'Turbine', 'NovaPilot', 'FigmaUser', 'LayerQueen', 'SteadyFlow', 'Xy..zA'],
  month: ['NovaPilot', 'HyperMint', 'SteadyFlow', 'RushGrid', 'RiskMode', 'SafeLine', 'CloudArc', 'TurboMile', 'VectorKid', 'JetStream', 'FinEdge', 'LayerQueen', 'PulseX', 'HashHero', 'CrashCat', 'Starlight', 'DesignPro', 'GainGrid', 'BetaTrack', 'LuckyLime'],
  year: ['HyperMint', 'NovaPilot', 'TurboMile', 'CloudArc', 'DesignPro', 'Turbine', 'JetStream', 'RiskMode', 'SteadyFlow', 'Starlight', 'CrashCat', 'PulseX', 'LayerQueen', 'RushGrid', 'GainGrid', 'SafeLine']
};

const TOP_RANGE_VALUE_PROFILE = {
  day: { xMin: 6, xMax: 56, winMin: 4200, winMax: 98000 },
  week: { xMin: 10, xMax: 96, winMin: 16000, winMax: 230000 },
  month: { xMin: 22, xMax: 210, winMin: 48000, winMax: 460000 },
  year: { xMin: 40, xMax: 380, winMin: 120000, winMax: 1250000 }
};

const REACTION_SIM_MIN_DELAY_MS = 850;
const REACTION_SIM_MAX_DELAY_MS = 2600;
const REACTION_SIM_MAX_MESSAGES = 80;
const SIMULATED_REACTIONS = [
  { author: 'Rushtu', tone: 'orange', message: 'Nice hit!' },
  { author: 'OpqR', tone: 'cyan', message: 'That multiplier moved fast.' },
  { author: 'StuV', tone: 'violet', message: 'Cashed out just in time.' },
  { author: 'LmnO', tone: 'blue', message: 'Waiting for a bigger run.' },
  { author: 'PqrS', tone: 'orange', message: "Let's go for 10x!" },
  { author: 'XyZA', tone: 'lime', message: 'Boosters are paying today.' },
  { author: 'HiJK', tone: 'cyan', message: 'Round feels spicy.' },
  { author: 'CdEF', tone: 'violet', message: 'Taking small safe wins.' }
];

const AUTO_CASHOUT_START_DELAY_MS = 10;
const AUTO_CASHOUT_MAX_DELAY_MS = 1400;
const AUTO_CASHOUT_SLOWDOWN_FACTOR = 0.09;
const AUTO_CASHOUT_START_CHANCE = 0.95;

const TAXI_DURATION_SEC = 5;
const ENDED_DURATION_SEC = 1.5;
const FLIGHT_MIN_SEC = 7;
const FLIGHT_MAX_SEC = 15;
const MULTIPLIER_GROWTH_RATE = 0.08;
const HYPERSONIC_MULTIPLIERS = [5, 10, 20, 25, 50, 100];

const VISUAL_LIFTOFF_SEC = 5;
const VISUAL_CRUISE_SEC = 15;
const VISUAL_FLYAWAY_SEC = 1.5;
const COUNTDOWN_CIRCUMFERENCE = 251.327;
const CLOUD_COUNT = 18;
const POD_DROP_DURATION_SEC = 5;
const DRIFT_SPEED = 150;
const REFERENCE_SCENE_HEIGHT = 758;
const REFERENCE_JET_REST_X = 100;
const REFERENCE_JET_REST_Y = 597;
const REFERENCE_FORMATION_DX = 35;
const REFERENCE_FORMATION_DY = 16;
const REFERENCE_FLY_X_OFFSET = 30;
const REFERENCE_HYPER_EXIT_X = 500;
const REFERENCE_HYPER_EXIT_Y = 400;
const REFERENCE_STANDARD_EXIT_X = 900;
const REFERENCE_STANDARD_EXIT_Y = 120;
const REFERENCE_JET_NATIVE_W = 1528.355;
const REFERENCE_GEAR_RETRACT_NATIVE_PX = 150;
const REFERENCE_JET_DISPLAY_W = 170;
const WHEEL_RETRACT_PX = REFERENCE_GEAR_RETRACT_NATIVE_PX * (REFERENCE_JET_DISPLAY_W / REFERENCE_JET_NATIVE_W);
const GEAR_RETRACT_DURATION_SEC = 0.8;
const GEAR_RETRACT_EXTRA_DELAY_SEC = 1;
const MODAL_ANIM_DURATION_MS = 280;
const HISTORY_ICON_TARGET_ROWS = 48;

let historyRoundCounter = 812532;
let historyItems = [
  { round: '#812531', crash: '1.16x', crashValue: 1.16, seed: 'f35b...79ff', nonce: 128 },
  { round: '#812530', crash: '4.57x', crashValue: 4.57, seed: 'f35b...79ff', nonce: 127 },
  { round: '#812529', crash: '5.74x', crashValue: 5.74, seed: 'f35b...79ff', nonce: 126 },
  { round: '#812528', crash: '3.11x', crashValue: 3.11, seed: 'f35b...79ff', nonce: 125 },
  { round: '#812527', crash: '13.85x', crashValue: 13.85, seed: 'f35b...79ff', nonce: 124 }
];

let masterAudioOn = true;
let musicOn = true;
let sfxOn = true;
let mobileOpenTab = null;
let wasMobileViewport = window.innerWidth <= 1024;
let currentTab = 'bets';
let topMetric = 'x';
let topRange = 'month';
let previousRoundResult = historyItems[0]?.crash || '1.00x';
let previousRoundRows = [];
let reactionSimTimer = null;
let opponentCashoutTimer = null;
let opponentRoundStartedAt = Date.now();
let gameRaf = null;
let provablyManualSeedMode = false;
let historyIconItems = [];

const gameState = {
  balance: 4950,
  betAmount: 10,
  phase: 'taxi',
  phaseElapsed: 0,
  crashAtSec: 10,
  multiplier: 1,
  finalCrashText: '1.00x',
  betPlaced: false,
  betActive: false,
  podBought: false,
  podActive: false,
  podCashedOut: false,
  hypersonicBought: false,
  hypersonicActive: false,
  hypersonicMultiplier: 0,
  jetCashAmount: 0,
  podCashAmount: 0,
  showWinUntil: 0,
  podShowWinUntil: 0,
  loopLastTime: null
};

const visualState = {
  clouds: [],
  stars: [],
  contrailPuffs: [],
  podDrop: {
    active: false,
    x: 0,
    y: 0,
    rot: 0,
    elapsed: 0
  },
  jet: {
    x: 0,
    y: 0,
    rot: 0
  },
  podRenderRot: 0,
  runwayOffset: 0,
  cloudInited: false,
  starsInited: false,
  lastTimestamp: null,
  lastTrailEmitAt: 0
};

function createInitialBets() {
  return BET_SEED.map((bet, index) => ({
    id: `bet-${index + 1}`,
    user: bet.user,
    stake: bet.stake,
    cashedOut: false,
    cashOutMultiplier: 0,
    payout: 0,
    cashOutAt: 0,
    boostType: ''
  }));
}

let betsState = createInitialBets();

const playerRowsEl = document.getElementById('playerRows');
const playersPanelEl = document.getElementById('playersPanel');
const sidebarEl = document.querySelector('.sidebar');
const chatPanelEl = document.getElementById('chatPanel');
const tabButtons = Array.from(document.querySelectorAll('.tab'));
const topBetsFiltersEl = document.getElementById("topBetsFilters");
const previousResultPanelEl = document.getElementById('previousResultPanel');
const previousRoundValueEl = document.getElementById('previousRoundValue');
const topMetricButtons = Array.from(document.querySelectorAll("[data-top-metric]"));
const topRangeButtons = Array.from(document.querySelectorAll("[data-top-range]"));
const reactionButtons = Array.from(document.querySelectorAll(".reaction-btn"));
const chatLinesEl = document.getElementById('chatLines');
const reactionCountEl = document.getElementById('reactionCount');
const multiplierEl = document.getElementById('multiplier');
const stageBannerEl = document.getElementById('stageBanner');
const historyChips = Array.from(document.querySelectorAll('.history-chip[data-history-point]'));
const mobileTabButtons = Array.from(document.querySelectorAll('.mobile-tab-btn[data-mobile-tab]'));

const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');
const infoBtn = document.getElementById('infoBtn');
const soundBtn = document.getElementById('soundBtn');
const musicSwitchEl = document.getElementById('musicSwitch');
const sfxSwitchEl = document.getElementById('sfxSwitch');
const historyXBtn = document.getElementById('historyXBtn');
const fairnessBtn = document.getElementById('fairnessBtn');

const historyListModalBackdrop = document.getElementById('historyListModalBackdrop');
const provablySettingsModalBackdrop = document.getElementById('provablySettingsModalBackdrop');
const gameLimitsModalBackdrop = document.getElementById('gameLimitsModalBackdrop');

const infoModalBackdrop = document.getElementById('infoModalBackdrop');
const historyModalBackdrop = document.getElementById('historyModalBackdrop');
const roundInfoModalBackdrop = document.getElementById('roundInfoModalBackdrop');
const historyTableEl = document.getElementById('historyTable');
const historyIconListEl = document.getElementById('historyIconList');
const serverHashInput = document.getElementById('serverHashInput');
const clientSeedInput = document.getElementById('clientSeedInput');
const nonceInput = document.getElementById('nonceInput');
const verifyProvablyBtn = document.getElementById('verifyProvablyBtn');
const verifyResult = document.getElementById('verifyResult');
const roundInfoTimeEl = document.getElementById('roundInfoTime');
const roundInfoRoundEl = document.getElementById('roundInfoRound');
const roundInfoServerSeedEl = document.getElementById('roundInfoServerSeed');
const roundInfoClientListEl = document.getElementById('roundInfoClientList');
const roundInfoCombinedHashEl = document.getElementById('roundInfoCombinedHash');
const roundInfoHexEl = document.getElementById('roundInfoHex');
const roundInfoDecimalEl = document.getElementById('roundInfoDecimal');
const roundInfoResultEl = document.getElementById('roundInfoResult');
const roundFairLinkBtn = document.getElementById('roundFairLinkBtn');
const provablyClientSeedInput = document.getElementById('provablyClientSeedInput');
const provablyServerSeedInput = document.getElementById('provablyServerSeedInput');
const provablyManualSeedBtn = document.getElementById('provablyManualSeedBtn');

const modalBackdrops = [
  infoModalBackdrop,
  historyModalBackdrop,
  roundInfoModalBackdrop,
  historyListModalBackdrop,
  provablySettingsModalBackdrop,
  gameLimitsModalBackdrop
].filter(Boolean);
const modalCloseTimers = new WeakMap();

const balanceValueEl = document.getElementById('balanceValue');
const podCardEl = document.getElementById('podCard');
const hypersonicCardEl = document.getElementById('hypersonicCard');
const podBuyEl = document.getElementById('podBuy');
const hypersonicBuyEl = document.getElementById('hypersonicBuy');
const powerupsEl = document.getElementById('powerups');
const miniGraphPanelEl = document.getElementById('miniGraphPanel');
const miniGraphCanvasEl = document.getElementById('miniGraphCanvas');

const amountBox = document.getElementById('amountBox');
const adjustmentEl = document.querySelector('.adjustment');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const actionStackEl = document.getElementById('actionStack');
const betBtn = document.getElementById('betBtn');
const podActionBtn = document.getElementById('podActionBtn');
const cancelBetBtn = document.getElementById('cancelBetBtn');

const skyStageEl = document.getElementById('skyStage');
const skyBgEl = document.getElementById('skyBg');
const runwayLayerEl = document.getElementById('runwayLayer');
const cloudCanvasEl = document.getElementById('cloudCanvas');
const starCanvasEl = document.getElementById('starCanvas');
const contrailCanvasEl = document.getElementById('contrailCanvas');
const jetModelEl = document.getElementById('jetModel');
const jetShadowEl = document.getElementById('jetShadow');
const engineFlameEl = document.getElementById('engineFlame');
const backWheelsEl = document.getElementById('backWheels');
const frontWheelEl = document.getElementById('frontWheel');
const podModelEl = document.getElementById('podModel');
const parachuteModelEl = document.getElementById('parachuteModel');
const countdownOverlayEl = document.getElementById('countdownOverlay');
const countdownTitleEl = document.getElementById('countdownTitle');
const countdownArcEl = document.getElementById('countdownArc');
const countdownNumberEl = document.getElementById('countdownNumber');
const vegasSlotEl = document.getElementById('vegasSlot');
const vegasSlotStripEl = document.getElementById('vegasSlotStrip');
const flewAwayOverlayEl = document.getElementById('flewAwayOverlay');
const flewAwayMultEl = document.getElementById('flewAwayMult');
const hypersonicOverlayEl = document.getElementById('hypersonicOverlay');
const hypersonicGameMultEl = document.getElementById('hypersonicGameMult');
const hypersonicBoostMultEl = document.getElementById('hypersonicBoostMult');
const jetAmountEl = document.getElementById('jetAmount');
const podAmountEl = document.getElementById('podAmount');

const bootLoaderEl = document.getElementById('bootLoader');
const bootLoaderFillEl = document.getElementById('bootLoaderFill');
const bootLoaderPercentEl = document.getElementById('bootLoaderPercent');
let appBooted = false;
const DEFAULT_CHAT = chatLinesEl.innerHTML;
const BET_BUTTON_STATES = ['state-bet', 'state-accepted', 'state-cashout', 'state-drop', 'state-cancel', 'state-ended', 'state-win', 'state-saved'];
let vegasSlotBuiltFor = 0;
let vegasSlotLastTickIdx = -1;
let vegasSlotLanded = false;

let miniGraphPrevCrash = 2.47;
let miniGraphPlayers = { totalPlayers: 0, cashouts: [] };

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatCurrency(amount) {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatUsdValue(amount) {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function formatBuyValue(amount) {
  const value = Number.isInteger(amount) ? amount.toFixed(0) : amount.toFixed(2);
  return `$${value}`;
}

function formatFlightAmount(amount) {
  return amount < 1000 ? `$${amount.toFixed(2)}` : `$${amount.toFixed(0)}`;
}

function hideFlightAmount(element) {
  if (!element) {
    return;
  }

  element.classList.add('hidden');
  element.classList.remove('live', 'cashed');
  element.style.opacity = '0';
}

function showFlightAmount(element, text, toneClass, rotationDeg) {
  if (!element) {
    return;
  }

  element.textContent = text;
  element.classList.remove('hidden', 'live', 'cashed');
  element.classList.add(toneClass);
  element.style.opacity = '1';
  element.style.transform = `translateX(-50%) rotate(${rotationDeg}deg)`;
}

function formatMultiplierValue(multiplierValue) {
  if (multiplierValue < 10) {
    return `${multiplierValue.toFixed(2)}x`;
  }
  if (multiplierValue < 100) {
    return `${multiplierValue.toFixed(1)}x`;
  }
  return `${Math.floor(multiplierValue)}x`;
}

function getMultiplierClass(multiplierValue) {
  if (multiplierValue >= 20) {
    return 'hot';
  }
  if (multiplierValue >= 12) {
    return 'gold';
  }
  if (multiplierValue >= 8) {
    return 'teal';
  }
  if (multiplierValue >= 4) {
    return 'peach';
  }
  if (multiplierValue >= 2) {
    return 'blue';
  }
  return 'muted';
}

function getHistoryChipTone(crashValue) {
  if (crashValue >= 10) {
    return 'lime';
  }
  if (crashValue >= 2) {
    return 'green';
  }
  return 'warm';
}

function isMobileViewport() {
  return window.innerWidth <= 1024;
}

function openModal(backdrop) {
  if (!backdrop) {
    return;
  }

  const activeTimer = modalCloseTimers.get(backdrop);
  if (activeTimer) {
    clearTimeout(activeTimer);
    modalCloseTimers.delete(backdrop);
  }

  backdrop.classList.remove('is-closing');
  backdrop.classList.remove('hidden');
  backdrop.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    backdrop.classList.add('is-open');
  });
  document.body.classList.add('modal-open');
}

function closeModal(backdrop) {
  if (!backdrop) {
    return;
  }

  const activeTimer = modalCloseTimers.get(backdrop);
  if (activeTimer) {
    clearTimeout(activeTimer);
  }

  backdrop.classList.remove('is-open');
  backdrop.classList.add('is-closing');
  backdrop.setAttribute('aria-hidden', 'true');

  const timer = setTimeout(() => {
    backdrop.classList.add('hidden');
    backdrop.classList.remove('is-closing');
    modalCloseTimers.delete(backdrop);
    if (modalBackdrops.every((modal) => modal.classList.contains('hidden'))) {
      document.body.classList.remove('modal-open');
    }
  }, MODAL_ANIM_DURATION_MS);

  modalCloseTimers.set(backdrop, timer);
}

function closeAllOverlays() {
  menuDropdown.classList.add('hidden');
  modalBackdrops.forEach((backdrop) => closeModal(backdrop));
}

function setStageBanner() {
  if (!stageBannerEl) {
    return;
  }

  stageBannerEl.textContent = '';
  stageBannerEl.classList.remove('visible', 'phase-ended');
  stageBannerEl.classList.add('hidden');
}

function setMultiplierDisplay(value) {
  if (!multiplierEl) {
    return;
  }
  multiplierEl.textContent = formatMultiplierValue(value);
}

function playSfx(name, ...args) {
  if (!masterAudioOn || !sfxOn) {
    return;
  }

  const fn = window[name];
  if (typeof fn === 'function') {
    fn(...args);
  }
}

function syncAudioState() {
  const masterEnabled = masterAudioOn;
  const sfxEnabled = masterEnabled && sfxOn;
  const musicEnabled = masterEnabled && musicOn;

  const setMaster = window.setF35AudioEnabled;
  if (typeof setMaster === 'function') {
    setMaster(masterEnabled);
  }

  const setSfx = window.setF35SfxEnabled;
  if (typeof setSfx === 'function') {
    setSfx(sfxEnabled);
  }

  const setMusic = window.setF35MusicEnabled;
  if (typeof setMusic === 'function') {
    setMusic(musicEnabled);
  }
}

function renderAudioControls() {
  if (soundBtn) {
    soundBtn.classList.toggle('muted-btn', !masterAudioOn);
  }

  if (musicSwitchEl) {
    musicSwitchEl.checked = musicOn;
  }

  if (sfxSwitchEl) {
    sfxSwitchEl.checked = sfxOn;
  }
}

function ensureMusicBoot() {
  const fn = window.startF35MusicOnFirstInteraction;
  if (typeof fn === 'function') {
    fn();
  }
}

function appendReaction(message, author = 'You', countReaction = true, nameTone = 'lime') {
  if (author === 'System') {
    return;
  }

  const p = document.createElement('p');
  p.className = 'new-message';

  const name = document.createElement('span');
  name.className = `name ${nameTone}`;
  name.textContent = author;

  p.append(name, ` ${message}`);
  chatLinesEl.appendChild(p);

  while (chatLinesEl.children.length > REACTION_SIM_MAX_MESSAGES) {
    chatLinesEl.removeChild(chatLinesEl.firstElementChild);
  }

  chatLinesEl.scrollTop = chatLinesEl.scrollHeight;

  if (countReaction) {
    const nextCount = Number.parseInt(reactionCountEl.textContent || '0', 10) + 1;
    reactionCountEl.textContent = String(nextCount);
  }
}

function getCashoutBoostType(source) {
  const roll = Math.random();

  if (source === 'auto') {
    if (roll < 0.2) {
      return 'hypersonic';
    }
    if (roll < 0.5) {
      return 'pod';
    }
    return '';
  }

  if (roll < 0.1) {
    return 'hypersonic';
  }
  if (roll < 0.3) {
    return 'pod';
  }
  return '';
}

function getHypersonicCashoutMultiplier(baseMultiplier) {
  const roll = Math.random();
  let target;

  if (roll < 0.55) {
    const low = [5, 10, 20, 25];
    target = low[Math.floor(Math.random() * low.length)];
  } else if (roll < 0.88) {
    target = 50;
  } else {
    target = 100;
  }

  const jitter = target >= 100 ? 0 : Math.random() * 0.99;
  const withJitter = Number((target + jitter).toFixed(2));
  return Number(Math.max(baseMultiplier, Math.min(100, withJitter)).toFixed(2));
}

function getBetBoostIconUrl(boostType) {
  if (boostType === 'hypersonic') {
    return 'https://www.figma.com/api/mcp/asset/dccee50a-641a-4fe3-a7f5-0f7b3a4b5533';
  }

  if (boostType === 'pod') {
    return 'https://www.figma.com/api/mcp/asset/6048e193-947b-4a70-a662-77fd5a083e29';
  }

  return '';
}

function renderMultiplierMarkup(row) {
  const multiplierText = escapeHtml(row.multiplier || '-');

  if (!row.boostType) {
    return multiplierText;
  }

  const iconUrl = getBetBoostIconUrl(row.boostType);
  if (!iconUrl) {
    return multiplierText;
  }

  return '<span class="multi-content">' +
    '<span class="multi-value">' + multiplierText + '</span>' +
    '<span class="multi-addon-icon" aria-hidden="true"><img src="' + iconUrl + '" alt="" /></span>' +
  '</span>';
}

function getSortedBetRows() {
  const cashedOutRows = betsState
    .filter((entry) => entry.cashedOut)
    .sort((a, b) => b.cashOutAt - a.cashOutAt);

  const activeRows = betsState
    .filter((entry) => !entry.cashedOut)
    .sort((a, b) => b.stake - a.stake);

  return cashedOutRows.concat(activeRows).map((entry) => {
    if (entry.cashedOut) {
      return {
        betId: entry.id,
        user: entry.user,
        multiplier: `${entry.cashOutMultiplier.toFixed(2)}x`,
        amount: formatCurrency(entry.payout),
        multClass: getMultiplierClass(entry.cashOutMultiplier),
        money: true,
        cashedOut: true,
        boostType: entry.boostType || '',
        interactive: false
      };
    }

    return {
      betId: entry.id,
      user: entry.user,
      multiplier: '-',
      amount: formatCurrency(entry.stake),
      multClass: 'muted',
      money: false,
      cashedOut: false,
      boostType: '',
      interactive: gameState.phase === 'flying'
    };
  });
}

function parseCurrencyValue(value) {
  return Number(String(value || '').replaceAll(',', '').replace('$', '')) || 0;
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function formatTopDateTime(rowKey, rangeKey) {
  const rangeSpanByKey = {
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000
  };

  const now = Date.now();
  const span = rangeSpanByKey[rangeKey] || rangeSpanByKey.month;
  const offset = hashString(rowKey + ':' + rangeKey) % span;
  const stamp = new Date(now - offset);
  const datePart = stamp.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  const timePart = stamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  return datePart + ' ' + timePart;
}

function getTopRows() {
  const rangeKey = ['day', 'week', 'month', 'year'].includes(topRange) ? topRange : 'month';
  const profile = TOP_RANGE_VALUE_PROFILE[rangeKey] || TOP_RANGE_VALUE_PROFILE.month;

  const staticByUser = new Map(
    (STATIC_PLAYERS_BY_TAB.top || []).map((row) => [
      row.user,
      {
        xValue: Number.parseFloat(String(row.multiplier).replace('x', '')) || profile.xMin,
        winValue: parseCurrencyValue(row.amount)
      }
    ])
  );

  const users = TOP_RANGE_USER_SETS[rangeKey] || TOP_RANGE_USER_SETS.month || [];

  const ranked = users.map((user, index) => {
    const staticRow = staticByUser.get(user);
    const xSeed = (hashString(rangeKey + ':x:' + user + ':' + index) % 10000) / 9999;
    const winSeed = (hashString(rangeKey + ':w:' + user + ':' + index) % 10000) / 9999;

    let xValue;
    if (staticRow) {
      xValue = staticRow.xValue * (0.62 + xSeed * 0.58);
    } else {
      xValue = profile.xMin + (profile.xMax - profile.xMin) * xSeed;
    }
    xValue = Math.max(profile.xMin, Math.min(profile.xMax, xValue));

    let winValue;
    if (staticRow) {
      winValue = staticRow.winValue * (0.58 + winSeed * 0.72);
    } else {
      winValue = profile.winMin + (profile.winMax - profile.winMin) * winSeed;
    }
    winValue = Math.max(profile.winMin, Math.min(profile.winMax, winValue));

    return {
      user,
      xValue: Number(xValue.toFixed(2)),
      winValue: Number(winValue.toFixed(2)),
      dateTime: formatTopDateTime(user + ':' + index, rangeKey)
    };
  });

  if (topMetric === 'win') {
    ranked.sort((a, b) => b.winValue - a.winValue);
    return ranked.map((row) => ({
      user: row.user,
      multiplier: formatCurrency(row.winValue),
      amount: row.xValue.toFixed(2) + 'x',
      multClass: row.winValue >= 350000 ? 'hot' : row.winValue >= 150000 ? 'gold' : row.winValue >= 70000 ? 'teal' : 'peach',
      money: false,
      cashedOut: false,
      boostType: '',
      interactive: false,
      dateTime: row.dateTime
    }));
  }

  ranked.sort((a, b) => b.xValue - a.xValue);
  return ranked.map((row) => ({
    user: row.user,
    multiplier: row.xValue.toFixed(2) + 'x',
    amount: formatCurrency(row.winValue),
    multClass: getMultiplierClass(row.xValue),
    money: true,
    cashedOut: false,
    boostType: '',
    interactive: false,
    dateTime: row.dateTime
  }));
}

function getCrashValueFromText(crashText) {
  return Number.parseFloat(String(crashText || '').replace('x', '')) || 1;
}

function getPreviousResultToneClass(crashText) {
  const crashValue = getCrashValueFromText(crashText);
  if (crashValue >= 10) {
    return 'lime';
  }
  if (crashValue >= 2) {
    return 'green';
  }
  return 'blue';
}

function getPreviousRows() {
  if (previousRoundRows.length) {
    return previousRoundRows;
  }

  return (STATIC_PLAYERS_BY_TAB.previous || []).map((row) => ({
    user: row.user,
    multiplier: row.multiplier || '-',
    amount: row.amount || formatCurrency(0),
    multClass: row.multClass || 'muted',
    money: true,
    cashedOut: false,
    boostType: row.boostType || '',
    interactive: false
  }));
}

function updatePreviousResultUi() {
  if (!previousRoundValueEl) {
    return;
  }

  previousRoundValueEl.textContent = previousRoundResult;
  previousRoundValueEl.classList.remove('blue', 'green', 'lime');
  previousRoundValueEl.classList.add(getPreviousResultToneClass(previousRoundResult));
}

function updateTopFiltersUi() {
  if (!['x', 'win'].includes(topMetric)) {
    topMetric = 'x';
  }

  if (!['day', 'week', 'month', 'year'].includes(topRange)) {
    topRange = 'month';
  }

  const mobileNoSelection = isMobileViewport() && !mobileOpenTab;

  if (sidebarEl) {
    sidebarEl.classList.toggle('hidden', mobileNoSelection);
  }

  if (chatPanelEl) {
    chatPanelEl.classList.toggle('hidden', currentTab !== 'bets' || mobileNoSelection);
  }

  if (topBetsFiltersEl) {
    topBetsFiltersEl.classList.toggle('hidden', currentTab !== 'top' || mobileNoSelection);
  }

  if (previousResultPanelEl) {
    previousResultPanelEl.classList.toggle('hidden', currentTab !== 'previous' || mobileNoSelection);
  }

  updatePreviousResultUi();

  topMetricButtons.forEach((button) => {
    const active = button.dataset.topMetric === topMetric;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  topRangeButtons.forEach((button) => {
    const active = button.dataset.topRange === topRange;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function renderPlayers(tabName) {
  const players = tabName === 'bets'
    ? getSortedBetRows()
    : tabName === 'top'
      ? getTopRows()
      : tabName === 'previous'
        ? getPreviousRows()
        : STATIC_PLAYERS_BY_TAB[tabName] || [];

  playerRowsEl.innerHTML = players
    .map((row) => {
      const amountClass = row.money ? 'amount money' : 'amount';
      const multClass = row.multClass ? `multi ${row.multClass}` : 'multi muted';
      const multiplierMarkup = renderMultiplierMarkup(row);
      const rowClasses = ['player-row'];
      if (row.cashedOut) {
        rowClasses.push('cashed-out');
      }
      if (row.interactive) {
        rowClasses.push('active-bet');
      }
      if (row.dateTime) {
        rowClasses.push('has-datetime');
      }
      const betIdAttr = row.betId ? ` data-bet-id="${escapeHtml(row.betId)}"` : '';
      const titleAttr = row.interactive ? ' title="Click to cash out"' : '';
      const userMarkup = row.dateTime
        ? `<span class="user user-meta"><span class="user-main">${escapeHtml(row.user)}</span><span class="user-time">${escapeHtml(row.dateTime)}</span></span>`
        : `<span class="user">${escapeHtml(row.user)}</span>`;

      return `<div class="${rowClasses.join(' ')}"${betIdAttr}${titleAttr}>${userMarkup}<span class="${multClass}">${multiplierMarkup}</span><span class="${amountClass}">${escapeHtml(row.amount)}</span></div>`;
    })
    .join('');
}

function updateMobileTabButtons() {
  const mobileView = isMobileViewport();

  mobileTabButtons.forEach((button) => {
    const tabName = button.dataset.mobileTab;
    const active = mobileView ? tabName === mobileOpenTab : tabName === currentTab;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function setTab(tabName) {
  currentTab = tabName;
  tabButtons.forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  updateMobileTabButtons();
  updateTopFiltersUi();
  renderPlayers(tabName);
}

function renderHeaderHistory() {
  historyChips.forEach((chip, index) => {
    const item = historyItems[index];
    if (!item) {
      return;
    }

    chip.textContent = item.crash;
    chip.dataset.historyPoint = item.crash;
    chip.classList.remove('warm', 'green', 'lime');
    chip.classList.add(getHistoryChipTone(item.crashValue));
  });
}

function renderHistory() {
  historyTableEl.innerHTML = historyItems
    .map((item, index) => {
      return `<button class="history-row" data-point="${escapeHtml(item.crash)}" data-nonce="${item.nonce}" data-history-index="${index}"><span>${item.round}</span><span>${item.crash}</span><span>${item.seed}</span><span>${item.nonce}</span></button>`;
    })
    .join('');

  renderHistoryIconList();
}

function buildHistoryIconItems() {
  const list = historyItems.map((item) => ({ ...item }));

  let roundNum = Number.parseInt(String(list[list.length - 1]?.round || `#${historyRoundCounter - 1}`).replace('#', ''), 10);
  if (!Number.isFinite(roundNum)) {
    roundNum = historyRoundCounter - 1;
  }

  let nonce = Number(list[list.length - 1]?.nonce || 128);

  while (list.length < HISTORY_ICON_TARGET_ROWS) {
    roundNum -= 1;
    nonce = Math.max(0, nonce - 1);

    const hash = fnvHash(`history:${roundNum}:${nonce}`);
    const normalized = hash / 4294967295;
    const crashValue = Number((1 + normalized * 32).toFixed(2));
    const suffix = (hash % 65535).toString(16).padStart(4, '0');

    list.push({
      round: `#${roundNum}`,
      crash: formatMultiplierValue(crashValue),
      crashValue,
      seed: `f35b...${suffix}`,
      nonce
    });
  }

  return list;
}

function renderHistoryIconList() {
  if (!historyIconListEl) {
    return;
  }

  historyIconItems = buildHistoryIconItems();

  historyIconListEl.innerHTML = historyIconItems
    .map((item, index) => {
      const time = getRoundTimeFromHistory(item, index);
      const roundId = String(item.round || '').replace('#', '');
      const tone = getMultiplierClass(item.crashValue);
      return '<button class="history-icon-row" data-history-index="' + index + '" type="button">'
        + '<span class="history-icon-time">' + escapeHtml(time) + '</span>'
        + '<span class="history-icon-round">' + escapeHtml(roundId) + '</span>'
        + '<span class="history-icon-mult ' + escapeHtml(tone) + '">' + escapeHtml(item.crash) + '</span>'
        + '</button>';
    })
    .join('');
}
function populateProvablySettings() {
  const latestItem = historyItems[0];
  if (!latestItem) {
    return;
  }

  const details = buildRoundInfoData(latestItem, 0);

  if (provablyServerSeedInput) {
    provablyServerSeedInput.value = details.combinedHash.toLowerCase();
  }

  if (provablyClientSeedInput && !provablyManualSeedMode) {
    provablyClientSeedInput.value = 'Random every round:';
    provablyClientSeedInput.readOnly = true;
  }

  if (provablyManualSeedBtn) {
    provablyManualSeedBtn.textContent = provablyManualSeedMode ? 'Switch to Random every round' : 'Switch to Enter Manually';
  }
}
function addCrashToHistory(crashValue) {
  const nonce = (historyItems[0]?.nonce || 128) + 1;
  const suffix = Math.floor(Math.random() * 65535).toString(16).padStart(4, '0');
  const item = {
    round: `#${historyRoundCounter}`,
    crash: formatMultiplierValue(crashValue),
    crashValue,
    seed: `f35b...${suffix}`,
    nonce
  };

  historyRoundCounter += 1;
  historyItems = [item, ...historyItems].slice(0, 12);
  renderHeaderHistory();
  renderHistory();
  populateProvablySettings();
}

function fnvHash(input) {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

function calculateCrashPoint(serverHash, clientSeed, nonce) {
  const base = `${serverHash}:${clientSeed}:${nonce}`;
  const hash = fnvHash(base);
  const normalized = hash / 4294967295;
  const raw = 1 + normalized * 19;
  return raw.toFixed(2);
}

function buildPseudoHexSeed(base, length = 64) {
  let value = '';
  let cursor = String(base || 'f35-seed');

  while (value.length < length) {
    const chunk = fnvHash(cursor).toString(16).padStart(8, '0');
    value += chunk;
    cursor = `${cursor}:${chunk}`;
  }

  return value.slice(0, length);
}

function buildPseudoUuid(base, salt = '') {
  const hex = buildPseudoHexSeed(`${base}:${salt}`, 32).toLowerCase();
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

function getHistoryItemByIndex(index) {
  if (!Number.isInteger(index) || index < 0) {
    return null;
  }
  return historyItems[index] || null;
}

function getRoundTimeFromHistory(item, index) {
  const nonce = Number(item?.nonce || 0);
  const secondsTotal = (nonce * 17 + index * 29 + 43144) % 86400;
  const hours = String(Math.floor(secondsTotal / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((secondsTotal % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsTotal % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function buildRoundInfoData(item, index = 0) {
  const roundRaw = String(item.round || '').replace('#', '');
  const round = roundRaw || String(historyRoundCounter - index);
  const serverSeed = buildPseudoHexSeed(`${item.seed}:${item.nonce}:${round}`, 64);

  const clients = Array.from({ length: 3 }, (_, clientIndex) => {
    const suffix = buildPseudoHexSeed(`${round}:${item.nonce}:player:${clientIndex + 1}`, 1);
    return {
      label: `Player N${clientIndex + 1}` ,
      alias: `D****${suffix.toLowerCase()}` ,
      seed: buildPseudoUuid(serverSeed, `player-${clientIndex + 1}`)
    };
  });

  const combinedHash = buildPseudoHexSeed(
    [serverSeed, ...clients.map((client) => client.seed)].join(':'),
    64
  ).toUpperCase();

  const hex = combinedHash.slice(0, 13).toUpperCase();
  const decimal = BigInt(`0x${hex}`).toString();

  return {
    round,
    time: getRoundTimeFromHistory(item, index),
    serverSeed,
    clients,
    combinedHash,
    hex,
    decimal,
    result: item.crash
  };
}

function renderRoundInfo(item, index = 0) {
  if (!item || !roundInfoTimeEl || !roundInfoRoundEl || !roundInfoServerSeedEl || !roundInfoClientListEl || !roundInfoCombinedHashEl || !roundInfoHexEl || !roundInfoDecimalEl || !roundInfoResultEl) {
    return;
  }

  const details = buildRoundInfoData(item, index);

  roundInfoTimeEl.textContent = details.time;
  roundInfoRoundEl.textContent = details.round;
  roundInfoServerSeedEl.value = details.serverSeed;
  roundInfoCombinedHashEl.value = details.combinedHash;
  roundInfoHexEl.textContent = details.hex;
  roundInfoDecimalEl.textContent = details.decimal;
  roundInfoResultEl.textContent = details.result;

  roundInfoClientListEl.innerHTML = details.clients
    .map((client) => {
      return `<article class="round-client-card"><p class="round-client-line"><span class="muted">${client.label}:</span> <strong>${escapeHtml(client.alias)}</strong></p><p class="round-client-line"><span class="muted">Seed:</span> <strong>${escapeHtml(client.seed)}</strong></p></article>`;
    })
    .join('');
}

function openRoundInfo(item, index = 0) {
  if (!item) {
    return;
  }

  renderRoundInfo(item, index);
  openModal(roundInfoModalBackdrop);
}

function copyRoundFieldValue(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    return Promise.resolve(false);
  }

  const value = target.value || target.textContent || '';
  if (!value) {
    return Promise.resolve(false);
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    return navigator.clipboard.writeText(value).then(() => true).catch(() => false);
  }

  const helperInput = document.createElement('textarea');
  helperInput.value = value;
  helperInput.setAttribute('readonly', 'readonly');
  helperInput.style.position = 'fixed';
  helperInput.style.opacity = '0';
  document.body.appendChild(helperInput);
  helperInput.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (error) {
    success = false;
  }

  helperInput.remove();
  return Promise.resolve(success);
}

function pickCrashAtSec() {
  return FLIGHT_MIN_SEC + Math.random() * (FLIGHT_MAX_SEC - FLIGHT_MIN_SEC);
}

function pickHypersonicMultiplier() {
  const index = Math.floor(Math.random() * HYPERSONIC_MULTIPLIERS.length);
  return HYPERSONIC_MULTIPLIERS[index];
}

function getCurrentPotentialWin() {
  const boost = gameState.hypersonicActive ? gameState.hypersonicMultiplier : 1;
  return Number((gameState.betAmount * gameState.multiplier * boost).toFixed(2));
}

function getAutoCashoutDelayMs() {
  const elapsedMs = Date.now() - opponentRoundStartedAt;
  return Math.min(
    AUTO_CASHOUT_MAX_DELAY_MS,
    Math.round(AUTO_CASHOUT_START_DELAY_MS + elapsedMs * AUTO_CASHOUT_SLOWDOWN_FACTOR)
  );
}

function getAutoCashoutChance() {
  const elapsedMs = Date.now() - opponentRoundStartedAt;
  const decay = Math.min(0.6, (elapsedMs / 15000) * 0.6);
  return AUTO_CASHOUT_START_CHANCE - decay;
}

function cashOutBet(betId, source = 'auto', forcedMultiplier = null) {
  const bet = betsState.find((entry) => entry.id === betId);
  if (!bet || bet.cashedOut) {
    return false;
  }

  const resolvedMultiplier = forcedMultiplier || Math.max(1.01, gameState.multiplier * (0.9 + Math.random() * 0.2));
  let cashOutMultiplier = Number(resolvedMultiplier.toFixed(2));

  const boostType = getCashoutBoostType(source);
  if (boostType === 'hypersonic') {
    cashOutMultiplier = getHypersonicCashoutMultiplier(cashOutMultiplier);
  }

  bet.cashedOut = true;
  bet.boostType = boostType;
  bet.cashOutMultiplier = cashOutMultiplier;
  bet.payout = Number((bet.stake * cashOutMultiplier).toFixed(2));
  bet.cashOutAt = Date.now();

  if (currentTab === 'bets') {
    renderPlayers('bets');
  }

  return true;
}

function runOpponentCashoutTick() {
  if (gameState.phase !== 'flying') {
    return;
  }

  const activeBets = betsState.filter((entry) => !entry.cashedOut);

  if (activeBets.length && Math.random() < getAutoCashoutChance()) {
    const randomIndex = Math.floor(Math.random() * activeBets.length);
    const multiplierAtCashout = Math.max(1.01, gameState.multiplier * (0.88 + Math.random() * 0.25));
    cashOutBet(activeBets[randomIndex].id, 'auto', multiplierAtCashout);
  }

  const nextDelay = getAutoCashoutDelayMs();
  opponentCashoutTimer = window.setTimeout(runOpponentCashoutTick, nextDelay);
}

function stopOpponentCashouts() {
  if (opponentCashoutTimer !== null) {
    window.clearTimeout(opponentCashoutTimer);
    opponentCashoutTimer = null;
  }
}

function startOpponentCashouts() {
  stopOpponentCashouts();
  opponentRoundStartedAt = Date.now();
  opponentCashoutTimer = window.setTimeout(runOpponentCashoutTick, AUTO_CASHOUT_START_DELAY_MS);
}

function generateMiniGraphPlayers(totalFlightSec = 10) {
  const total = 260 + Math.floor(Math.random() * 520);
  const numCashouts = 24 + Math.floor(Math.random() * 16);
  const cashouts = [];

  for (let i = 0; i < numCashouts; i += 1) {
    const time = (0.3 + Math.random() * 0.65) * Math.max(1, totalFlightSec);
    const mult = Math.max(1, Math.exp(MULTIPLIER_GROWTH_RATE * time));
    cashouts.push({ time, mult, leaving: 0 });
  }

  cashouts.sort((a, b) => a.time - b.time);

  let remaining = total;
  for (const entry of cashouts) {
    const leave = Math.max(1, Math.floor(remaining * (0.02 + Math.random() * 0.08)));
    entry.leaving = leave;
    remaining -= leave;
  }

  miniGraphPlayers = { totalPlayers: total, cashouts };
}

function clearBetPosition(preserveHypersonicVisual = false, preserveWinState = false) {
  const keepHypersonicVisual = preserveHypersonicVisual && gameState.hypersonicActive;

  gameState.betPlaced = false;
  gameState.betActive = false;
  gameState.podBought = false;
  gameState.podActive = false;
  gameState.podCashedOut = false;
  gameState.hypersonicBought = false;
  gameState.hypersonicActive = keepHypersonicVisual;
  if (!keepHypersonicVisual) {
    gameState.hypersonicMultiplier = 0;
  }

  if (!preserveWinState) {
    gameState.jetCashAmount = 0;
    gameState.podCashAmount = 0;
    gameState.showWinUntil = 0;
    gameState.podShowWinUntil = 0;
  }
}

function promotePendingBetIfNeeded() {
  if (!gameState.betPlaced || gameState.betActive) {
    return;
  }

  gameState.betActive = true;
  gameState.podActive = gameState.podBought;
  gameState.hypersonicActive = gameState.hypersonicBought;
  if (gameState.hypersonicActive && gameState.hypersonicMultiplier <= 0) {
    gameState.hypersonicMultiplier = pickHypersonicMultiplier();
  }
}

function runButtonAnimation(button, className, durationMs) {
  if (!button) {
    return;
  }

  button.classList.remove(className);
  void button.offsetWidth;
  button.classList.add(className);
  window.setTimeout(() => button.classList.remove(className), durationMs);
}

function setActionButtonState(button, stateClass, lineOne, lineTwo = '', disabled = false) {
  if (!button) {
    return;
  }

  const prevState = button.dataset.stateClass || '';
  const prevLineOne = button.dataset.lineOne || '';
  const prevLineTwo = button.dataset.lineTwo || '';
  const prevDisabled = button.disabled;

  const stateChanged = prevState !== stateClass;
  const contentChanged = prevLineOne !== lineOne || prevLineTwo !== lineTwo;
  const disabledChanged = prevDisabled !== disabled;

  if (!stateChanged && !contentChanged && !disabledChanged) {
    return;
  }

  if (stateChanged) {
    BET_BUTTON_STATES.forEach((name) => button.classList.remove(name));
    button.classList.add(stateClass);
  }

  button.disabled = disabled;

  if (stateChanged || contentChanged) {
    const lineOneMarkup = `<span class="btn-line-one">${escapeHtml(lineOne)}</span>`;
    const lineTwoMarkup = lineTwo ? `<span class="btn-line-two">${escapeHtml(lineTwo)}</span>` : '';
    button.innerHTML = `${lineOneMarkup}${lineTwoMarkup}`;
    button.dataset.stateClass = stateClass;
    button.dataset.lineOne = lineOne;
    button.dataset.lineTwo = lineTwo;
  }

  if (stateChanged) {
    const ma = window.motionAnimate;
    // Clear any inline styles set by previous motion animations
    button.style.transform = '';
    button.style.boxShadow = '';

    if (stateClass === 'state-win' && ma) {
      const lineOne = button.querySelector('.btn-line-one');
      ma(button, {
        scale: [1, 1.08, 1.02],
        boxShadow: ['0px 0px 30px rgba(0,242,126,0.8)', '0px 0px 50px rgba(0,242,126,1)', '0px 0px 30px rgba(0,242,126,0.8)']
      }, { duration: 0.4, times: [0, 0.3, 1] });
      if (lineOne) ma(lineOne, { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.2, delay: 0.05 });
    } else if (stateClass === 'state-saved' && ma) {
      const lineOne = button.querySelector('.btn-line-one');
      ma(button, {
        scale: [1, 1.06, 1.01],
        boxShadow: ['0px 0px 30px rgba(0,242,126,0.8)', '0px 0px 50px rgba(0,242,126,1)', '0px 0px 30px rgba(0,242,126,0.8)']
      }, { duration: 0.4, times: [0, 0.3, 1] }).then(() => {
        ma(button, { boxShadow: 'none' }, { duration: 0.5 });
      });
      if (lineOne) ma(lineOne, { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.2, delay: 0.05 });
    } else if (stateClass === 'state-win' || stateClass === 'state-saved') {
      runButtonAnimation(button, 'amount-pop-enter', 420);
    } else if (stateClass === 'state-drop') {
      // Immediate — no enter animation so player can cash out right away
    } else if (stateClass === 'state-cashout' && actionStackEl && actionStackEl.classList.contains('pod-mode')) {
      // Pod mode — both buttons appear instantly
    } else {
      runButtonAnimation(button, 'state-swap-enter', 320);
    }
  }
}

function setBetButtonState(stateClass, lineOne, lineTwo = '', disabled = false) {
  setActionButtonState(betBtn, stateClass, lineOne, lineTwo, disabled);
}

function setPodActionButtonState(stateClass, lineOne, lineTwo = '', disabled = false) {
  setActionButtonState(podActionBtn, stateClass, lineOne, lineTwo, disabled);
}

function updateBalanceUI() {
  if (balanceValueEl) balanceValueEl.textContent = formatUsdValue(gameState.balance);
}

function updateAmountUI() {
  amountBox.textContent = formatBuyValue(gameState.betAmount);
}

function updateAmountControlsUI(now = performance.now()) {
  const locked = gameState.betPlaced;
  const inFlightActive = (gameState.phase === 'flying' || gameState.phase === 'ended') && gameState.betActive;
  const pendingCancel = gameState.betPlaced && !gameState.betActive && gameState.phase === 'flying';
  const showingWin = gameState.showWinUntil > now || gameState.podShowWinUntil > now;
  const hideAmountControls = inFlightActive || showingWin || pendingCancel;

  adjustmentEl.classList.toggle('hidden', hideAmountControls);
  adjustmentEl.classList.toggle('locked', locked);

  if (cancelBetBtn) {
    cancelBetBtn.classList.toggle('hidden', !pendingCancel);
  }

  increaseBtn.disabled = locked || hideAmountControls;
  decreaseBtn.disabled = locked || hideAmountControls;
}


function updateAddonCardsUI(now = performance.now()) {
  const podCost = gameState.betAmount;
  const hypersonicCost = gameState.betAmount * 4;

  podBuyEl.textContent = gameState.podBought ? formatBuyValue(podCost) : `Buy ${formatBuyValue(podCost)}`;
  hypersonicBuyEl.textContent = gameState.hypersonicBought ? formatBuyValue(hypersonicCost) : `Buy ${formatBuyValue(hypersonicCost)}`;

  const addonWindowOpen = gameState.phase === 'taxi' || (gameState.betPlaced && !gameState.betActive);

  const podDisabled = !addonWindowOpen || !gameState.betPlaced || gameState.podBought || gameState.hypersonicBought || gameState.balance < podCost;
  const hypersonicDisabled = !addonWindowOpen || !gameState.betPlaced || gameState.hypersonicBought || gameState.podBought || gameState.balance < hypersonicCost;

  const podDocked = gameState.betPlaced && gameState.podBought;
  const hypersonicDocked = gameState.betPlaced && gameState.hypersonicBought;

  podCardEl.classList.toggle('active-addon', gameState.podBought);
  podCardEl.classList.toggle('disabled', podDisabled && !gameState.podBought);
  podCardEl.classList.toggle('docked', podDocked);
  podCardEl.setAttribute('aria-disabled', podDisabled ? 'true' : 'false');

  hypersonicCardEl.classList.toggle('active-addon', gameState.hypersonicBought);
  hypersonicCardEl.classList.toggle('disabled', hypersonicDisabled && !gameState.hypersonicBought);
  hypersonicCardEl.classList.toggle('docked', hypersonicDocked);
  hypersonicCardEl.setAttribute('aria-disabled', hypersonicDisabled ? 'true' : 'false');

  const inRound = gameState.phase === 'flying' && gameState.betActive;
  const showWin = gameState.showWinUntil > now || gameState.podShowWinUntil > now;
  const showMiniGraph = inRound || showWin;
  const hidePowerups = showMiniGraph;

  if (powerupsEl) {
    powerupsEl.classList.toggle('hidden', hidePowerups);
    powerupsEl.classList.toggle('has-docked', !hidePowerups && (podDocked || hypersonicDocked));
  }

  if (miniGraphPanelEl) {
    miniGraphPanelEl.classList.toggle('hidden', !showMiniGraph);
  }
}

function updateBetButtonUI(now = performance.now()) {
  const jetWinActive = gameState.showWinUntil > now && gameState.jetCashAmount > 0;
  const podWinActive = gameState.podShowWinUntil > now && gameState.podCashAmount > 0;
  const podInFlight = gameState.phase === 'flying' && gameState.betActive && (gameState.podActive || gameState.podCashedOut);
  const podFlowActive = podInFlight || podWinActive;
  const podNeedsDrop = gameState.phase === 'flying' && gameState.betActive && gameState.podActive && !gameState.podCashedOut;
  const podAfterSaveLayout = podFlowActive && !podNeedsDrop;

  if (actionStackEl) {
    actionStackEl.classList.toggle('pod-mode', podFlowActive);
    actionStackEl.classList.toggle('pod-before-save', podFlowActive && podNeedsDrop);
    actionStackEl.classList.toggle('pod-after-save', podAfterSaveLayout);
    const acceptedShiftRight = !podFlowActive && gameState.betPlaced && gameState.podBought;
    const acceptedShiftLeft = !podFlowActive && gameState.betPlaced && gameState.hypersonicBought;
    actionStackEl.classList.toggle('accepted-shift-right', acceptedShiftRight);
    actionStackEl.classList.toggle('accepted-shift-left', acceptedShiftLeft);
  }

  if (podActionBtn) {
    podActionBtn.classList.toggle('hidden', !podFlowActive);
  }

  if (podFlowActive) {
    if (podNeedsDrop) {
      const podPayout = formatCurrency(getCurrentPotentialWin());
      setPodActionButtonState('state-drop', 'DROP POD', podPayout, false);
      setBetButtonState('state-cashout', 'CASH OUT (NEXT)', '', true);
      return;
    }

    if (podWinActive && !jetWinActive) {
      setPodActionButtonState('state-win', `+${formatCurrency(gameState.podCashAmount)}`, '', true);
    } else if (gameState.podCashedOut || gameState.podCashAmount > 0) {
      setPodActionButtonState('state-saved', `+${formatCurrency(gameState.podCashAmount)}`, '', true);
    } else {
      setPodActionButtonState('state-drop', 'DROP POD', '', true);
    }
  } else if (podActionBtn) {
    setPodActionButtonState('state-drop', 'DROP POD', '', true);
  }

  if (jetWinActive) {
    setBetButtonState('state-win', `+${formatCurrency(gameState.jetCashAmount)}`, '', true);
    return;
  }

  if (gameState.phase === 'flying' && gameState.betActive) {
    const payout = formatCurrency(getCurrentPotentialWin());
    setBetButtonState('state-cashout', 'CASH OUT', payout, false);
    return;
  }


  if (gameState.betPlaced) {
    const label = gameState.betActive ? 'Bet Accepted' : 'Next Round';
    setBetButtonState('state-accepted', formatBuyValue(gameState.betAmount), label, true);
    return;
  }

  setBetButtonState('state-bet', 'BET', formatBuyValue(gameState.betAmount), gameState.balance < gameState.betAmount);
}

function updateGameUi(now = performance.now()) {
  updateBalanceUI();
  updateAmountUI();
  updateAmountControlsUI(now);
  updateAddonCardsUI(now);
  updateBetButtonUI(now);
}

function resetOpponentsForRound() {
  betsState = createInitialBets();
  if (currentTab === 'bets') {
    renderPlayers('bets');
  }
}

function startRound() {
  if (gameState.betActive) {
    clearBetPosition();
  }

  const hasPendingQueuedBet = gameState.betPlaced && !gameState.betActive;
  const queuedPodBought = hasPendingQueuedBet && gameState.podBought;
  const queuedHypersonicBought = hasPendingQueuedBet && gameState.hypersonicBought;
  const queuedHypersonicMultiplier = queuedHypersonicBought ? gameState.hypersonicMultiplier : 0;

  gameState.podBought = queuedPodBought;
  gameState.podActive = false;
  gameState.podCashedOut = false;
  gameState.hypersonicBought = queuedHypersonicBought;
  gameState.hypersonicActive = false;
  gameState.hypersonicMultiplier = queuedHypersonicMultiplier;
  vegasSlotBuiltFor = 0;
  vegasSlotLastTickIdx = -1;
  vegasSlotLanded = false;

  gameState.phase = 'taxi';
  gameState.phaseElapsed = 0;
  gameState.multiplier = 1;
  gameState.crashAtSec = pickCrashAtSec();
  generateMiniGraphPlayers(gameState.crashAtSec + VISUAL_LIFTOFF_SEC);
  gameState.finalCrashText = '1.00x';
  gameState.jetCashAmount = 0;
  gameState.podCashAmount = 0;
  gameState.showWinUntil = 0;
  gameState.podShowWinUntil = 0;

  promotePendingBetIfNeeded();
  resetOpponentsForRound();

  stopOpponentCashouts();
  resetVisualRound();
  setStageBanner('Takeoff 5');
  setMultiplierDisplay(1);
  updateGameUi();
}

function onCrash() {
  gameState.phase = 'ended';
  gameState.phaseElapsed = 0;
  gameState.finalCrashText = formatMultiplierValue(gameState.multiplier);
  miniGraphPrevCrash = Number(gameState.multiplier.toFixed(2));
  playSfx('playFlyAwaySwooshSound');
  if (flewAwayMultEl) {
    flewAwayMultEl.textContent = gameState.finalCrashText;
  }
  setStageBanner('FLEW AWAY ' + gameState.finalCrashText, true);

  previousRoundResult = gameState.finalCrashText;
  previousRoundRows = betsState
    .slice()
    .sort((a, b) => {
      if (a.cashedOut && !b.cashedOut) {
        return -1;
      }
      if (!a.cashedOut && b.cashedOut) {
        return 1;
      }
      if (a.cashedOut && b.cashedOut) {
        return b.payout - a.payout;
      }
      return b.stake - a.stake;
    })
    .map((entry) => ({
      user: entry.user,
      multiplier: entry.cashedOut ? entry.cashOutMultiplier.toFixed(2) + 'x' : '-',
      amount: entry.cashedOut ? formatCurrency(entry.payout) : formatCurrency(0),
      multClass: entry.cashedOut ? getMultiplierClass(entry.cashOutMultiplier) : 'muted',
      money: true,
      cashedOut: entry.cashedOut,
      boostType: entry.cashedOut ? (entry.boostType || '') : '',
      interactive: false
    }));

  updatePreviousResultUi();
  if (currentTab === 'previous') {
    renderPlayers('previous');
  }

  addCrashToHistory(gameState.multiplier);
  stopOpponentCashouts();

  if (gameState.betActive) {
    clearBetPosition(true);
  }

  updateGameUi();
}

function placeBet() {
  if (gameState.betPlaced || gameState.balance < gameState.betAmount) {
    return;
  }

  playSfx('playBetSound');
  gameState.balance = Number((gameState.balance - gameState.betAmount).toFixed(2));
  gameState.betPlaced = true;

  if (gameState.phase === 'taxi') {
    gameState.betActive = true;
  }

  updateGameUi();
}

function buyPod() {
  const podCost = gameState.betAmount;
  const canBuy = gameState.betPlaced && !gameState.podBought && !gameState.hypersonicBought && gameState.balance >= podCost;
  if (!canBuy) {
    return;
  }

  playSfx('playBuyDroneSound');
  gameState.balance = Number((gameState.balance - podCost).toFixed(2));
  gameState.podBought = true;
  if (gameState.phase === 'taxi' && gameState.betActive) {
    gameState.podActive = true;
  }

  updateGameUi();
}

function buyHypersonic() {
  const hypersonicCost = gameState.betAmount * 4;
  const canBuy = gameState.betPlaced && !gameState.hypersonicBought && !gameState.podBought && gameState.balance >= hypersonicCost;
  if (!canBuy) {
    return;
  }

  playSfx('playBuyDroneSound');
  gameState.balance = Number((gameState.balance - hypersonicCost).toFixed(2));
  gameState.hypersonicBought = true;
  gameState.hypersonicMultiplier = pickHypersonicMultiplier();
  if (gameState.phase === 'taxi' && gameState.betActive) {
    // Match original timing: hypersonic mode visually kicks in shortly after purchase.
    window.setTimeout(() => {
      if (gameState.phase === 'taxi' && gameState.betActive && gameState.hypersonicBought) {
        gameState.hypersonicActive = true;
        updateGameUi();
      }
    }, 200);
  }

  updateGameUi();
}

function cancelPendingBet() {
  if (!(gameState.betPlaced && !gameState.betActive && gameState.phase === 'flying')) {
    return;
  }

  let refund = gameState.betAmount;
  if (gameState.podBought) {
    refund += gameState.betAmount;
  }
  if (gameState.hypersonicBought) {
    refund += gameState.betAmount * 4;
  }

  gameState.balance = Number((gameState.balance + refund).toFixed(2));
  clearBetPosition();
  updateGameUi();
}

function cashOutPod() {
  if (!(gameState.phase === 'flying' && gameState.betActive && gameState.podActive && !gameState.podCashedOut)) {
    return;
  }

  playSfx('playDroneCashOutSound');
  const payout = getCurrentPotentialWin();
  gameState.podCashedOut = true;
  gameState.podCashAmount = payout;
  gameState.podShowWinUntil = performance.now() + 2000;
  gameState.balance = Number((gameState.balance + payout).toFixed(2));
  startPodDropVisual();

  updateGameUi();
}

function cashOutJet() {
  if (!(gameState.phase === 'flying' && gameState.betActive)) {
    return;
  }
  if (gameState.podActive && !gameState.podCashedOut) {
    return;
  }

  playSfx('playCashOutSound');
  const payout = getCurrentPotentialWin();
  gameState.balance = Number((gameState.balance + payout).toFixed(2));
  gameState.jetCashAmount = payout;
  gameState.showWinUntil = performance.now() + 2000;
  if (gameState.podCashAmount > 0) {
    gameState.podShowWinUntil = gameState.showWinUntil;
  }

  clearBetPosition(true, true);
  updateGameUi();
}

function handlePodActionButton() {
  if (gameState.podShowWinUntil > performance.now()) {
    return;
  }

  if (gameState.phase === 'flying' && gameState.betActive && gameState.podActive && !gameState.podCashedOut) {
    cashOutPod();
  }
}

function handleBetButtonAction() {
  const now = performance.now();
  if (gameState.showWinUntil > now) {
    return;
  }

  if (gameState.phase === 'flying' && gameState.betActive) {
    if (gameState.podActive && !gameState.podCashedOut) {
      return;
    }
    cashOutJet();
    return;
  }

  if (!gameState.betPlaced) {
    placeBet();
  }
}

function updateBetAmount(next) {
  gameState.betAmount = Math.max(1, Math.min(500, Number(next.toFixed(2))));
  updateGameUi();
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function easeInQuad(value) {
  return value * value;
}

function easeInCubic(value) {
  return value * value * value;
}

function easeOutQuad(value) {
  return 1 - (1 - value) * (1 - value);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInOutQuad(value) {
  if (value < 0.5) {
    return 2 * value * value;
  }
  return 1 - Math.pow(-2 * value + 2, 2) / 2;
}

function lerp(a, b, value) {
  return a + (b - a) * value;
}

function getVisualRoundElapsed() {
  if (gameState.phase === 'taxi') {
    return gameState.phaseElapsed;
  }

  if (gameState.phase === 'flying') {
    return TAXI_DURATION_SEC + gameState.phaseElapsed;
  }

  return TAXI_DURATION_SEC + gameState.crashAtSec + gameState.phaseElapsed;
}

function getStageMetrics() {
  if (!skyStageEl) {
    const width = 980;
    const height = 540;
    const sceneScale = Math.min(1, height / REFERENCE_SCENE_HEIGHT);

    return {
      width,
      height,
      sceneScale,
      restX: REFERENCE_JET_REST_X * sceneScale,
      restY: REFERENCE_JET_REST_Y * sceneScale,
      flyX: width * 0.5 + REFERENCE_FLY_X_OFFSET * sceneScale,
      flyY: height * 0.28,
      podDx: REFERENCE_FORMATION_DX * sceneScale,
      podDy: REFERENCE_FORMATION_DY * sceneScale
    };
  }

  const rect = skyStageEl.getBoundingClientRect();
  const width = Math.max(320, rect.width || 980);
  const height = Math.max(220, rect.height || 540);
  const sceneScale = Math.min(1, height / REFERENCE_SCENE_HEIGHT);

  return {
    width,
    height,
    sceneScale,
    restX: REFERENCE_JET_REST_X * sceneScale,
    restY: REFERENCE_JET_REST_Y * sceneScale,
    flyX: width * 0.5 + REFERENCE_FLY_X_OFFSET * sceneScale,
    flyY: height * 0.28,
    podDx: REFERENCE_FORMATION_DX * sceneScale,
    podDy: REFERENCE_FORMATION_DY * sceneScale
  };
}

function getCanvasContext(canvas, width, height) {
  if (!canvas) {
    return null;
  }

  const ratio = window.devicePixelRatio || 1;
  const desiredWidth = Math.max(1, Math.round(width * ratio));
  const desiredHeight = Math.max(1, Math.round(height * ratio));

  if (canvas.width !== desiredWidth || canvas.height !== desiredHeight) {
    canvas.width = desiredWidth;
    canvas.height = desiredHeight;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return null;
  }

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return context;
}

function ensureCloudSystem(metrics) {
  if (visualState.cloudInited && visualState.clouds.length) {
    return;
  }

  visualState.cloudInited = true;
  visualState.clouds = [];

  for (let i = 0; i < CLOUD_COUNT; i += 1) {
    const sizeRandom = Math.random();
    const width = 60 + sizeRandom * 320;
    const height = 16 + sizeRandom * 60;
    const blobCount = 2 + Math.floor(Math.random() * 4);
    const blobs = [];

    for (let j = 0; j < blobCount; j += 1) {
      const blobScale = 0.4 + Math.random() * 0.6;
      blobs.push({
        dx: (Math.random() - 0.5) * width * 0.8,
        dy: (Math.random() - 0.5) * height * 0.7,
        rx: (12 + Math.random() * 40) * blobScale,
        ry: (7 + Math.random() * 20) * blobScale
      });
    }

    visualState.clouds.push({
      x: Math.random() * (metrics.width + 200) - 100,
      y: 18 + Math.random() * (metrics.height * 0.45),
      width,
      height,
      speed: 15 + Math.random() * 35,
      opacity: 0.15 + Math.random() * 0.2,
      blobs
    });
  }
}

function ensureStarSystem(metrics) {
  if (visualState.starsInited && visualState.stars.length) {
    return;
  }

  visualState.starsInited = true;
  visualState.stars = [];

  for (let i = 0; i < 70; i += 1) {
    visualState.stars.push({
      x: Math.random() * metrics.width,
      y: -(Math.random() * metrics.height * 1.5),
      size: 0.5 + Math.random() * 2,
      twinkleSpeed: (0.3 + Math.random() * 0.8) * 0.25,
      baseOpacity: 0.5 + Math.random() * 0.5,
      phaseOffset: Math.random() * Math.PI * 2
    });
  }
}

function updateSkyTheme() {
  if (!skyBgEl) {
    return;
  }

  const isHypersonic = gameState.hypersonicActive;
  skyStageEl?.classList.toggle('hypersonic', isHypersonic);

  if (!isHypersonic) {
    skyBgEl.style.background = 'linear-gradient(to bottom, #5b9fd4 0%, #7bb8e3 44%, #a3cee8 100%)';
    return;
  }

  const roundElapsed = getVisualRoundElapsed();
  const flightElapsed = Math.max(0, roundElapsed - TAXI_DURATION_SEC);
  const totalFlight = VISUAL_LIFTOFF_SEC + VISUAL_CRUISE_SEC;
  const combinedProgress = Math.min(1, flightElapsed / totalFlight);

  let skyProgress;
  if (combinedProgress < 0.2) {
    skyProgress = 0;
  } else if (combinedProgress < 0.35) {
    skyProgress = ((combinedProgress - 0.2) / 0.15) * 0.4;
  } else if (combinedProgress < 0.475) {
    skyProgress = 0.4 + ((combinedProgress - 0.35) / 0.125) * 0.6;
  } else {
    skyProgress = 1;
  }

  const lerpChannel = (normal, darkBlue, space) => {
    if (skyProgress <= 0.5) {
      const progress = skyProgress * 2;
      return Math.round(normal + (darkBlue - normal) * progress);
    }

    const progress = (skyProgress - 0.5) * 2;
    return Math.round(darkBlue + (space - darkBlue) * progress);
  };

  const top = [
    lerpChannel(91, 13, 5),
    lerpChannel(159, 27, 5),
    lerpChannel(212, 62, 16)
  ];

  const middle = [
    lerpChannel(123, 20, 8),
    lerpChannel(184, 41, 8),
    lerpChannel(227, 82, 24)
  ];

  const bottom = [
    lerpChannel(163, 26, 10),
    lerpChannel(206, 51, 10),
    lerpChannel(232, 102, 32)
  ];

  skyBgEl.style.background = `linear-gradient(to bottom, rgb(${top[0]},${top[1]},${top[2]}) 0%, rgb(${middle[0]},${middle[1]},${middle[2]}) 44%, rgb(${bottom[0]},${bottom[1]},${bottom[2]}) 100%)`;
}

function updateCountdownOverlay() {
  if (!countdownOverlayEl || !countdownArcEl || !countdownNumberEl || !countdownTitleEl) {
    return;
  }

  if (gameState.phase !== 'taxi') {
    countdownOverlayEl.classList.add('hidden');
    if (vegasSlotEl) {
      vegasSlotEl.classList.add('hidden');
    }
    return;
  }

  const isHypersonic = gameState.hypersonicActive;

  countdownOverlayEl.classList.remove('hidden');
  countdownOverlayEl.classList.toggle('align-top', isHypersonic);
  countdownTitleEl.textContent = isHypersonic ? 'Hypersonic launch' : 'Takeoff';
  countdownArcEl.setAttribute('stroke', isHypersonic ? '#ffcc00' : '#ffffff');

  const progress = clampValue(gameState.phaseElapsed / TAXI_DURATION_SEC, 0, 1);
  countdownArcEl.style.strokeDashoffset = String(COUNTDOWN_CIRCUMFERENCE * (1 - progress));

  const remaining = Math.max(1, Math.ceil(TAXI_DURATION_SEC - gameState.phaseElapsed));
  countdownNumberEl.textContent = String(remaining);

  if (!vegasSlotEl || !vegasSlotStripEl) {
    return;
  }

  if (!isHypersonic) {
    vegasSlotEl.classList.add('hidden');
    return;
  }

  vegasSlotEl.classList.remove('hidden');

  const hypersonicTarget = gameState.hypersonicMultiplier || 5;
  const SLOT_VALUES = [5, 10, 20, 25, 50, 100];
  const ITEM_HEIGHT = 72;
  const SPIN_CYCLES = 12;
  const STOP_TIME = 4.0;
  const BOUNCE_DURATION = 0.3;

  if (vegasSlotBuiltFor !== hypersonicTarget) {
    vegasSlotBuiltFor = hypersonicTarget;
    vegasSlotLastTickIdx = -1;
    vegasSlotLanded = false;

    const items = [];
    for (let cycle = 0; cycle < SPIN_CYCLES; cycle += 1) {
      const shuffled = [...SLOT_VALUES].sort(() => Math.random() - 0.5);
      items.push(...shuffled);
    }

    const finalCycle = [...SLOT_VALUES].sort(() => Math.random() - 0.5);
    const targetIndex = finalCycle.indexOf(hypersonicTarget);
    if (targetIndex >= 0) {
      finalCycle.splice(targetIndex, 1);
    }
    finalCycle.push(hypersonicTarget);
    items.push(...finalCycle);

    vegasSlotStripEl.innerHTML = '';
    for (const value of items) {
      const item = document.createElement('div');
      item.className = 'vegas-slot-item';
      item.textContent = `${value}x`;
      vegasSlotStripEl.appendChild(item);
    }

    vegasSlotStripEl.dataset.totalItems = String(items.length);
  }

  const totalItems = Number(vegasSlotStripEl.dataset.totalItems || '1');
  const finalY = -(totalItems - 1) * ITEM_HEIGHT;
  const taxiElapsed = gameState.phaseElapsed;

  let currentY = 0;
  if (taxiElapsed >= STOP_TIME + BOUNCE_DURATION) {
    currentY = finalY;
  } else if (taxiElapsed >= STOP_TIME) {
    const bounceProgress = (taxiElapsed - STOP_TIME) / BOUNCE_DURATION;
    const bounce = Math.sin(bounceProgress * Math.PI) * 12 * (1 - bounceProgress);
    currentY = finalY + bounce;
  } else {
    const spinProgress = taxiElapsed / STOP_TIME;
    const eased = 1 - Math.pow(1 - spinProgress, 4);
    currentY = eased * finalY;
  }

  vegasSlotStripEl.style.transform = `translateY(${currentY}px)`;

  const currentIdx = Math.round(-currentY / ITEM_HEIGHT);
  if (currentIdx !== vegasSlotLastTickIdx) {
    if (taxiElapsed < STOP_TIME) {
      const progress = taxiElapsed / STOP_TIME;
      const pitch = 0.8 + progress * 0.6;
      const vol = 0.06 + progress * 0.10;
      playSfx('playSlotTickSound', pitch, vol);
    }
    vegasSlotLastTickIdx = currentIdx;
  }

  if (taxiElapsed >= STOP_TIME && !vegasSlotLanded) {
    vegasSlotLanded = true;
    playSfx('playSlotLandSound');
  } else if (taxiElapsed < STOP_TIME) {
    vegasSlotLanded = false;
  }

  const lastChild = vegasSlotStripEl.lastElementChild;
  if (lastChild instanceof HTMLElement) {
    if (taxiElapsed >= STOP_TIME) {
      const pulseProgress = Math.min(1, (taxiElapsed - STOP_TIME) / 0.4);
      const pulseScale = 1 + 0.2 * Math.sin(pulseProgress * Math.PI);
      lastChild.style.transform = `scale(${pulseScale})`;
      lastChild.style.color = '#ffdd33';
      lastChild.style.textShadow = '0 0 24px rgba(255,220,50,0.8), 0 0 48px rgba(255,180,0,0.4), 0 2px 4px rgba(0,0,0,0.5)';
    } else {
      lastChild.style.transform = '';
      lastChild.style.color = '#ffcc00';
      lastChild.style.textShadow = '0 0 16px rgba(255,204,0,0.6), 0 2px 4px rgba(0,0,0,0.5)';
    }
  }
}

function updateMultiplierPresentation() {
  if (!multiplierEl || !hypersonicOverlayEl || !hypersonicGameMultEl || !hypersonicBoostMultEl) {
    return;
  }

  if (gameState.phase === 'flying' && gameState.hypersonicActive) {
    const gameMultText = formatMultiplierValue(gameState.multiplier);
    hypersonicGameMultEl.textContent = gameMultText;
    hypersonicBoostMultEl.textContent = `${gameState.hypersonicMultiplier || 5}x`;

    const jetCashedOut = gameState.jetCashAmount > 0 && !gameState.betActive;
    hypersonicOverlayEl.classList.toggle('cashed', jetCashedOut);

    hypersonicOverlayEl.classList.remove('hidden');
    multiplierEl.style.opacity = '0';
    return;
  }

  hypersonicOverlayEl.classList.add('hidden');
  hypersonicOverlayEl.classList.remove('cashed');
  if (gameState.phase === 'flying') {
    multiplierEl.style.opacity = '1';
    multiplierEl.style.color = '#ffffff';
  }
}

function updateFlightAmounts() {
  const now = performance.now();

  hideFlightAmount(jetAmountEl);
  hideFlightAmount(podAmountEl);

  if (gameState.phase === 'flying' && gameState.betActive) {
    const currentWin = formatFlightAmount(getCurrentPotentialWin());

    if (gameState.podActive && !gameState.podCashedOut) {
      showFlightAmount(podAmountEl, currentWin, 'live', -visualState.jet.rot);
    } else {
      showFlightAmount(jetAmountEl, currentWin, 'live', -visualState.jet.rot);
    }
  }

  if (visualState.podDrop.active && gameState.podCashAmount > 0) {
    showFlightAmount(podAmountEl, formatFlightAmount(gameState.podCashAmount), 'cashed', -visualState.podRenderRot);
  }

  if (!gameState.hypersonicActive && gameState.showWinUntil > now && gameState.jetCashAmount > 0) {
    showFlightAmount(jetAmountEl, formatFlightAmount(gameState.jetCashAmount), 'cashed', -visualState.jet.rot);
  }
}

function drawMiniGraph() {
  if (!miniGraphCanvasEl || !miniGraphPanelEl || miniGraphPanelEl.classList.contains('hidden')) {
    return;
  }

  const rect = miniGraphCanvasEl.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const ratio = window.devicePixelRatio || 1;
  const targetWidth = Math.round(width * ratio);
  const targetHeight = Math.round(height * ratio);

  if (miniGraphCanvasEl.width !== targetWidth || miniGraphCanvasEl.height !== targetHeight) {
    miniGraphCanvasEl.width = targetWidth;
    miniGraphCanvasEl.height = targetHeight;
  }

  const context = miniGraphCanvasEl.getContext('2d');
  if (!context) {
    return;
  }

  context.clearRect(0, 0, miniGraphCanvasEl.width, miniGraphCanvasEl.height);
  context.save();
  context.scale(ratio, ratio);

  const pad = { l: 32, r: 12, t: 10, b: 18 };
  const plotW = Math.max(10, width - pad.l - pad.r);
  const plotH = Math.max(10, height - pad.t - pad.b);

  const totalFlight = VISUAL_LIFTOFF_SEC + VISUAL_CRUISE_SEC;
  const maxMult = Math.max(3, gameState.multiplier * 1.3, miniGraphPrevCrash * 1.2);
  const minMult = 1;

  const toX = (time) => pad.l + (time / totalFlight) * plotW;
  const toY = (mult) => pad.t + plotH - ((mult - minMult) / Math.max(0.001, maxMult - minMult)) * plotH;

  const gridMults = [1, 1.5, 2, 3, 5, 10, 20].filter((value) => value <= maxMult);
  context.strokeStyle = 'rgba(255,255,255,0.06)';
  context.lineWidth = 0.5;

  for (const value of gridMults) {
    const y = toY(value);
    if (y < pad.t - 2 || y > pad.t + plotH + 2) {
      continue;
    }

    context.beginPath();
    context.moveTo(pad.l, y);
    context.lineTo(pad.l + plotW, y);
    context.stroke();

    context.fillStyle = 'rgba(255,255,255,0.25)';
    context.font = '9px "Jersey 10", sans-serif';
    context.textAlign = 'right';
    context.fillText(value + 'x', pad.l - 4, y + 3);
  }

  const crashY = toY(miniGraphPrevCrash);
  if (crashY >= pad.t && crashY <= pad.t + plotH) {
    context.save();
    context.strokeStyle = 'rgba(255,80,80,0.5)';
    context.lineWidth = 1;
    context.setLineDash([4, 3]);
    context.beginPath();
    context.moveTo(pad.l, crashY);
    context.lineTo(pad.l + plotW, crashY);
    context.stroke();
    context.setLineDash([]);

    context.fillStyle = 'rgba(255,80,80,0.7)';
    context.font = '8px "Jersey 10", sans-serif';
    context.textAlign = 'right';
    const crashLabel = miniGraphPrevCrash < 10
      ? miniGraphPrevCrash.toFixed(2) + 'x'
      : miniGraphPrevCrash.toFixed(1) + 'x';
    context.fillText(crashLabel, pad.l + plotW, crashY - 3);

    context.strokeStyle = 'rgba(255,80,80,0.6)';
    context.lineWidth = 1.5;
    const crossX = pad.l + plotW - 24;
    context.beginPath();
    context.moveTo(crossX - 3, crashY - 3);
    context.lineTo(crossX + 3, crashY + 3);
    context.moveTo(crossX + 3, crashY - 3);
    context.lineTo(crossX - 3, crashY + 3);
    context.stroke();
    context.restore();
  }

  const timeSinceLiftoff = gameState.phase === 'flying' ? gameState.phaseElapsed : Math.max(0, gameState.crashAtSec);
  if (timeSinceLiftoff > 0) {
    const curveEnd = Math.min(timeSinceLiftoff, totalFlight);
    const steps = Math.max(2, Math.floor(curveEnd * 8));
    const points = [];

    for (let i = 0; i <= steps; i += 1) {
      const sampleTime = (i / steps) * curveEnd;
      const sampleMult = Math.max(1, Math.exp(MULTIPLIER_GROWTH_RATE * sampleTime));
      points.push({ x: toX(sampleTime), y: toY(sampleMult) });
    }

    context.save();
    context.beginPath();
    context.moveTo(points[0].x, pad.t + plotH);
    for (const point of points) {
      context.lineTo(point.x, point.y);
    }
    context.lineTo(points[points.length - 1].x, pad.t + plotH);
    context.closePath();
    const fillGrad = context.createLinearGradient(0, pad.t, 0, pad.t + plotH);
    fillGrad.addColorStop(0, 'rgba(180,230,50,0.18)');
    fillGrad.addColorStop(0.5, 'rgba(130,200,40,0.10)');
    fillGrad.addColorStop(1, 'rgba(80,160,20,0.03)');
    context.fillStyle = fillGrad;
    context.fill();
    context.restore();

    context.beginPath();
    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }

    context.strokeStyle = 'rgba(180,230,50,0.15)';
    context.lineWidth = 5;
    context.stroke();

    context.strokeStyle = '#b4e632';
    context.lineWidth = 1.8;
    context.stroke();

    let playersLeft = miniGraphPlayers.totalPlayers;
    for (const cashout of miniGraphPlayers.cashouts) {
      if (cashout.time > curveEnd) {
        break;
      }

      playersLeft -= cashout.leaving;
      const dotX = toX(cashout.time);
      const dotY = toY(cashout.mult);

      context.beginPath();
      context.arc(dotX, dotY, 3.5, 0, Math.PI * 2);
      context.fillStyle = 'rgba(180,230,50,0.3)';
      context.fill();

      context.beginPath();
      context.arc(dotX, dotY, 2, 0, Math.PI * 2);
      context.fillStyle = '#b4e632';
      context.fill();
    }

    const end = points[points.length - 1];
    context.save();
    context.translate(end.x, end.y);
    const delta = 0.05;
    const m1 = Math.exp(MULTIPLIER_GROWTH_RATE * Math.max(0, curveEnd - delta));
    const m2 = Math.exp(MULTIPLIER_GROWTH_RATE * curveEnd);
    const dx = toX(curveEnd) - toX(Math.max(0, curveEnd - delta));
    const dy = toY(m2) - toY(m1);
    const angle = Math.atan2(dy, dx);
    context.rotate(angle);
    context.fillStyle = '#ffffff';
    context.beginPath();
    context.moveTo(6, 0);
    context.lineTo(-4, -3.5);
    context.lineTo(-2, 0);
    context.lineTo(-4, 3.5);
    context.closePath();
    context.fill();
    context.shadowColor = '#b4e632';
    context.shadowBlur = 8;
    context.fill();
    context.restore();

    context.save();
    context.fillStyle = 'rgba(255,255,255,0.7)';
    context.font = 'bold 10px "Jersey 10", sans-serif';
    context.textAlign = 'left';

    const labelX = pad.l + 2;
    const labelY = pad.t + 11;
    context.save();
    context.translate(labelX + 4, labelY - 3);
    context.rotate(-0.3);
    context.beginPath();
    context.moveTo(5, 0);
    context.lineTo(-3, -2.5);
    context.lineTo(-1.5, 0);
    context.lineTo(-3, 2.5);
    context.closePath();
    context.fillStyle = 'rgba(255,255,255,0.7)';
    context.fill();
    context.restore();

    const countText = String(Math.max(0, playersLeft));
    context.fillStyle = 'rgba(255,255,255,0.7)';
    context.font = 'bold 10px "Jersey 10", sans-serif';
    context.fillText(countText, labelX + 14, labelY);

    context.fillStyle = 'rgba(255,255,255,0.3)';
    context.font = '7px "Jersey 10", sans-serif';
    const countWidth = context.measureText(countText).width;
    context.fillText('◇', labelX + 16 + countWidth, labelY);
    context.restore();
  }

  context.restore();
}

function updateClouds(metrics, deltaSec, cloudBoost, isHypersonic) {
  const context = getCanvasContext(cloudCanvasEl, metrics.width, metrics.height);
  if (!context || !cloudCanvasEl) {
    return;
  }

  ensureCloudSystem(metrics);
  context.clearRect(0, 0, metrics.width, metrics.height);

  const roundElapsed = getVisualRoundElapsed();
  const cloudAccelStart = TAXI_DURATION_SEC + VISUAL_LIFTOFF_SEC - 2;
  const cruising = roundElapsed > cloudAccelStart;

  const totalFlight = VISUAL_LIFTOFF_SEC + VISUAL_CRUISE_SEC;
  const flightElapsed = Math.max(0, roundElapsed - TAXI_DURATION_SEC);
  const combinedProgress = Math.min(1, flightElapsed / totalFlight);
  const starSlide = isHypersonic ? Math.min(1, Math.max(0, (combinedProgress - 0.275) / 0.2)) : 0;
  const cloudAlpha = isHypersonic ? Math.max(0, 1 - starSlide * 0.9) : 1;
  cloudCanvasEl.style.opacity = String(cloudAlpha);

  const cruiseElapsed = Math.max(0, roundElapsed - cloudAccelStart);
  const diagRamp = Math.min(1, cruiseElapsed / 1.5);
  const diagEase = 1 - (1 - diagRamp) * (1 - diagRamp);

  for (const cloud of visualState.clouds) {
    if (isHypersonic && cruising) {
      const normalSpeedX = cloud.speed * 2.6;
      const normalSpeedY = cloud.speed * 0.36;
      const diagSpeedX = cloud.speed * 7.8;
      const diagSpeedY = cloud.speed * 5.4;
      cloud.x -= (normalSpeedX + (diagSpeedX - normalSpeedX) * diagEase) * deltaSec;
      cloud.y += (-normalSpeedY + (diagSpeedY + normalSpeedY) * diagEase) * deltaSec;
    } else if (!isHypersonic && cruising) {
      const baseSpeedX = cloud.speed * 1.3;
      const baseSpeedY = cloud.speed * 0.18;
      const boostSpeedX = cloud.speed * 1.5 * diagEase;
      const boostSpeedY = cloud.speed * 0.7 * diagEase;
      cloud.x -= (baseSpeedX + boostSpeedX) * deltaSec;
      cloud.y += (-baseSpeedY + (boostSpeedY + baseSpeedY) * diagEase) * deltaSec;
    } else {
      const preBoost = isHypersonic ? 2 : 1;
      cloud.x -= cloud.speed * 1.3 * preBoost * deltaSec;
      cloud.y -= cloud.speed * 0.18 * preBoost * deltaSec;
    }

    const isDiagonalHypersonic = isHypersonic && cruising;
    if (cloud.x + cloud.width < -100 || (isDiagonalHypersonic && cloud.y > metrics.height + 50) || (!isDiagonalHypersonic && cloud.y + cloud.height < -80)) {
      if (isDiagonalHypersonic) {
        cloud.x = metrics.width + 50 + Math.random() * 200;
        cloud.y = -80 - Math.random() * 120;
      } else {
        cloud.x = metrics.width + 50 + Math.random() * 100;
        cloud.y = 20 + Math.random() * (metrics.height * 0.45);
      }
    }

    context.globalAlpha = cloud.opacity;
    context.fillStyle = '#ffffff';

    for (const blob of cloud.blobs) {
      context.beginPath();
      context.ellipse(cloud.x + blob.dx, cloud.y + blob.dy, blob.rx, blob.ry, 0, 0, Math.PI * 2);
      context.fill();
    }
  }

  context.globalAlpha = 1;
}

function updateStars(metrics, deltaSec, isHypersonic) {
  const context = getCanvasContext(starCanvasEl, metrics.width, metrics.height);
  if (!context || !starCanvasEl) {
    return;
  }

  context.clearRect(0, 0, metrics.width, metrics.height);

  if (!isHypersonic) {
    starCanvasEl.style.opacity = '0';
    return;
  }

  ensureStarSystem(metrics);

  const roundElapsed = getVisualRoundElapsed();
  const totalFlight = VISUAL_LIFTOFF_SEC + VISUAL_CRUISE_SEC;
  const flightElapsed = Math.max(0, roundElapsed - TAXI_DURATION_SEC);
  const combinedStarProgress = Math.min(1, flightElapsed / totalFlight);
  const starsActive = combinedStarProgress >= 0.275;

  starCanvasEl.style.opacity = starsActive ? '1' : '0';
  starCanvasEl.style.transform = '';

  if (!starsActive) {
    return;
  }

  for (const star of visualState.stars) {
    star.x -= (9 + star.size * 2.5) * deltaSec * 4;
    star.y += (7 + star.size * 2.5) * deltaSec * 4;

    if (star.y > metrics.height + 10) {
      star.y = -10;
      star.x = Math.random() * metrics.width;
    }

    if (star.x < -10) {
      star.x = metrics.width + 10;
      star.y = Math.random() * metrics.height;
    }

    if (star.y < -5) {
      continue;
    }

    const twinkle = 0.7 + 0.3 * Math.sin(performance.now() * 0.001 * star.twinkleSpeed + star.phaseOffset);
    const alpha = star.baseOpacity * twinkle;

    context.globalAlpha = alpha;
    context.fillStyle = '#ffffff';
    context.beginPath();
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();

    if (star.size > 1.2) {
      context.globalAlpha = alpha * 0.3;
      context.beginPath();
      context.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      context.fill();
    }
  }

  context.globalAlpha = 1;
}

function updateContrail(metrics, deltaSec, isHypersonic) {
  const context = getCanvasContext(contrailCanvasEl, metrics.width, metrics.height);
  if (!context || !contrailCanvasEl) {
    return;
  }

  const liftDuration = VISUAL_LIFTOFF_SEC;
  const sceneScale = metrics.sceneScale || 1;
  const shouldShowTrail = !isHypersonic && (
    (gameState.phase === 'flying' && gameState.phaseElapsed >= liftDuration * 0.85) ||
    (gameState.phase === 'ended' && gameState.phaseElapsed < ENDED_DURATION_SEC * 0.5)
  );

  if (!shouldShowTrail) {
    contrailCanvasEl.style.opacity = '0';
    visualState.contrailPuffs = [];
    context.clearRect(0, 0, metrics.width, metrics.height);
    return;
  }

  contrailCanvasEl.style.opacity = '1';

  const jetRotationRad = (visualState.jet.rot * Math.PI) / 180;
  const backAngle = jetRotationRad + Math.PI;
  const driftX = Math.cos(backAngle) * DRIFT_SPEED;
  const driftY = Math.sin(backAngle) * DRIFT_SPEED;

  for (const puff of visualState.contrailPuffs) {
    puff.x += driftX * deltaSec;
    puff.y += driftY * deltaSec;
  }

  visualState.contrailPuffs = visualState.contrailPuffs.filter((puff) => {
    return puff.x > -140 && puff.y > -140 && puff.age < 4.5;
  });

  const emissionInterval = gameState.phase === 'ended' ? 0.018 : 0.045;
  visualState.lastTimestamp = (visualState.lastTimestamp ?? 0) + deltaSec;

  if (!visualState.lastTrailEmitAt) {
    visualState.lastTrailEmitAt = 0;
  }

  if (visualState.lastTimestamp - visualState.lastTrailEmitAt >= emissionInterval) {
    visualState.lastTrailEmitAt = visualState.lastTimestamp;

    const exhaustX = visualState.jet.x + 2 * sceneScale;
    const exhaustY = visualState.jet.y + 16 * sceneScale;
    const emissionX = exhaustX + Math.cos(backAngle) * 32 * sceneScale;
    const emissionY = exhaustY + Math.sin(backAngle) * 32 * sceneScale;

    visualState.contrailPuffs.push({
      x: emissionX,
      y: emissionY,
      age: 0,
      seed: Math.random() * 1000
    });
  }

  context.clearRect(0, 0, metrics.width, metrics.height);

  for (const puff of visualState.contrailPuffs) {
    puff.age += deltaSec;

    if (puff.age < 0.01) {
      continue;
    }

    const fadeIn = Math.min(1, puff.age / 0.3);
    const lifeRatio = Math.min(1, puff.age / 4.5);
    const fadeOut = Math.pow(1 - lifeRatio, 4);
    const breathe = 0.92 + 0.08 * Math.sin(puff.age * 0.4 + puff.seed);
    const alpha = 0.55 * fadeIn * fadeOut * breathe;

    const radius = (5 + Math.abs(Math.sin(puff.seed * 1.17)) * 2.5 + puff.age * 1.8) * sceneScale;
    const drawX = puff.x - 10 * sceneScale;
    const drawY = puff.y + 5 * sceneScale;

    const gradient = context.createRadialGradient(drawX, drawY, 0, drawX, drawY, radius);
    gradient.addColorStop(0, `rgba(255,255,255,${alpha.toFixed(4)})`);
    gradient.addColorStop(0.5, `rgba(255,255,255,${(alpha * 0.4).toFixed(4)})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(drawX, drawY, radius, 0, Math.PI * 2);
    context.fill();
  }
}

function startPodDropVisual() {
  const metrics = getStageMetrics();
  visualState.podDrop.active = true;
  visualState.podDrop.elapsed = 0;
  visualState.podRenderRot = 0;
  visualState.lastTimestamp = 0;
  visualState.lastTrailEmitAt = 0;
  visualState.podDrop.x = visualState.jet.x + metrics.podDx;
  visualState.podDrop.y = visualState.jet.y + metrics.podDy;
  visualState.podDrop.rot = visualState.jet.rot;
}

function updatePodVisual(metrics, deltaSec) {
  if (!podModelEl || !parachuteModelEl) {
    return;
  }

  const sceneScale = metrics.sceneScale || 1;
  podModelEl.style.setProperty('--jet-scale', String(sceneScale));
  parachuteModelEl.style.setProperty('--jet-scale', String(sceneScale));

  const showAttachedPod = gameState.podBought && gameState.podActive && gameState.betActive && !gameState.podCashedOut;

  if (showAttachedPod) {
    const x = visualState.jet.x + metrics.podDx;
    const y = visualState.jet.y + metrics.podDy;
    const rot = visualState.jet.rot;
    visualState.podRenderRot = rot;

    podModelEl.classList.remove('hidden');
    podModelEl.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
    parachuteModelEl.classList.add('hidden');
    parachuteModelEl.style.opacity = '0';
    return;
  }

  if (!visualState.podDrop.active) {
    podModelEl.classList.add('hidden');
    parachuteModelEl.classList.add('hidden');
    parachuteModelEl.style.opacity = '0';
    visualState.podRenderRot = 0;
    return;
  }

  visualState.podDrop.elapsed += deltaSec;
  const elapsed = visualState.podDrop.elapsed;
  const freeFallDelay = 0.3;
  const canopyAppear = freeFallDelay - 0.18;
  const canopyDeployDuration = 0.6;

  let descent;
  let speedFactor;

  if (elapsed < freeFallDelay) {
    const freeProgress = elapsed / freeFallDelay;
    descent = easeInQuad(freeProgress) * 0.15;
    speedFactor = 1;
  } else {
    const freeDistance = 0.15;
    const chuteElapsed = elapsed - freeFallDelay;
    const chuteTotal = POD_DROP_DURATION_SEC - freeFallDelay;
    const chuteProgress = Math.min(1, chuteElapsed / chuteTotal);

    descent = freeDistance + chuteProgress * 0.75 * (1 - freeDistance);

    const inflateProgress = Math.min(1, chuteElapsed / canopyDeployDuration);
    speedFactor = lerp(1, 0.5, easeOutQuad(inflateProgress));
  }

  const sway = Math.sin(elapsed * 1.8) * 4 * speedFactor * (1 - Math.min(1, elapsed / POD_DROP_DURATION_SEC) * 0.5) * sceneScale;
  const leftDrift = (elapsed * elapsed * 15 + elapsed * 30) * sceneScale;

  const podX = visualState.podDrop.x - leftDrift + sway;
  const podY = visualState.podDrop.y + descent * 500 * sceneScale;

  const levelProgress = Math.min(1, elapsed / 0.8);
  const levelRotation = lerp(visualState.podDrop.rot, 0, easeOutQuad(levelProgress));
  const podRotation = levelRotation + Math.sin(elapsed * 2) * 3 * speedFactor;
  visualState.podRenderRot = podRotation;

  podModelEl.classList.remove('hidden');
  podModelEl.style.transform = `translate(${podX}px, ${podY}px) rotate(${podRotation}deg)`;

  if (elapsed >= canopyAppear) {
    const deployProgress = Math.min(1, (elapsed - canopyAppear) / canopyDeployDuration);
    const scale = 0.2 + easeOutQuad(deployProgress) * 0.8;

    parachuteModelEl.classList.remove('hidden');
    parachuteModelEl.style.opacity = String(Math.min(1, deployProgress * 2));
    parachuteModelEl.style.transform = `translate(${podX - 13.5 * sceneScale}px, ${podY - 84 * sceneScale}px) scale(${scale}) rotate(${-podRotation}deg)`;
  } else {
    parachuteModelEl.classList.add('hidden');
    parachuteModelEl.style.opacity = '0';
  }

  if (elapsed >= POD_DROP_DURATION_SEC) {
    visualState.podDrop.active = false;
    podModelEl.classList.add('hidden');
    parachuteModelEl.classList.add('hidden');
    visualState.podRenderRot = 0;
  }
}

function updateAircraftVisual(metrics, deltaSec) {
  if (!jetModelEl || !runwayLayerEl || !engineFlameEl || !multiplierEl) {
    return;
  }

  const isHypersonic = gameState.hypersonicActive;

  let jetX = metrics.restX;
  let jetY = metrics.restY;
  let jetRot = 0;
  let runwaySpeed = 0;
  let runwayOpacity = 1;
  let runwayShift = 0;
  let flameIntensity = 0;
  let cloudBoost = 1;
  let gearProgress = 0;
  let shadowOpacity = 1;
  const runwayHeight = runwayLayerEl.getBoundingClientRect().height || (metrics.height * 0.37);
  const gearRetractPhase = GEAR_RETRACT_DURATION_SEC / VISUAL_LIFTOFF_SEC;
  const gearStartProgress = (0.15 * VISUAL_LIFTOFF_SEC + GEAR_RETRACT_EXTRA_DELAY_SEC) / VISUAL_LIFTOFF_SEC;

  if (gameState.phase === 'taxi') {
    const progress = clampValue(gameState.phaseElapsed / TAXI_DURATION_SEC, 0, 1);

    runwaySpeed = lerp(120, 900, easeInQuad(progress));
    if (isHypersonic) {
      runwaySpeed *= 2;
    }

    jetX = metrics.restX;
    jetY = metrics.restY;
    jetRot = progress > 0.85 ? -4 * easeOutCubic((progress - 0.85) / 0.15) : 0;

    flameIntensity = lerp(0.15, 0.45, progress);
    cloudBoost = isHypersonic ? 1.6 : 1;
    gearProgress = 0;

    multiplierEl.style.opacity = '0';
    flewAwayOverlayEl?.classList.add('hidden');
  } else if (gameState.phase === 'flying') {
    const liftDuration = VISUAL_LIFTOFF_SEC;

    if (gameState.phaseElapsed < liftDuration) {
      const progress = clampValue(gameState.phaseElapsed / liftDuration, 0, 1);
      const curve = easeInOutQuad(progress);

      jetX = lerp(metrics.restX, metrics.flyX, curve);
      jetY = lerp(metrics.restY, metrics.flyY, curve);

      if (isHypersonic) {
        if (progress < 0.15) {
          const rotateProgress = easeOutCubic(progress / 0.15);
          jetRot = lerp(-4, -14, rotateProgress);
        } else if (progress < 0.5) {
          const rotateProgress = easeInOutQuad((progress - 0.15) / 0.35);
          jetRot = lerp(-14, -30, rotateProgress);
        } else {
          jetRot = -30 + Math.sin((progress - 0.5) * Math.PI * 2) * 1;
        }
      } else if (progress < 0.15) {
        const rotateProgress = easeOutCubic(progress / 0.15);
        jetRot = lerp(-4, -10, rotateProgress);
      } else if (progress < 0.7) {
        const holdProgress = (progress - 0.15) / 0.55;
        jetRot = -10 + Math.sin(holdProgress * Math.PI) * 1;
      } else {
        const rotateProgress = easeInOutQuad((progress - 0.7) / 0.3);
        jetRot = lerp(-10, -9, rotateProgress);
      }

      runwayOpacity = Math.max(0, 1 - easeInQuad(progress) * 1.5);
      runwayShift = (1 - runwayOpacity) * runwayHeight;
      runwaySpeed = lerp(900, 300, curve) * (isHypersonic ? 2 : 1);

      flameIntensity = lerp(0.6, 1.6, progress);
      cloudBoost = isHypersonic ? 2 : 1.35;
      gearProgress = progress > gearStartProgress ? clampValue((progress - gearStartProgress) / gearRetractPhase, 0, 1) : 0;
      shadowOpacity = Math.max(0, 1 - progress * 12);
    } else {
      const flightTime = gameState.phaseElapsed - liftDuration;
      const turbulenceX = Math.sin(flightTime * 23) * 0.35 + Math.sin(flightTime * 37) * 0.2;
      const turbulenceY = Math.sin(flightTime * 29) * 0.3 + Math.sin(flightTime * 41) * 0.15;

      jetX = metrics.flyX + Math.sin(flightTime * 0.7 + 0.5) * 3 + turbulenceX;
      jetY = metrics.flyY + Math.sin(flightTime * 0.9) * 5 + turbulenceY;
      jetRot = (isHypersonic ? -30 : -9) + Math.sin(flightTime * 0.5) * 1;

      runwayOpacity = 0;
      runwayShift = runwayHeight;
      runwaySpeed = 0;

      flameIntensity = lerp(1.2, 1.5, Math.min(1, flightTime / 0.8));
      cloudBoost = isHypersonic ? 2.4 : 1.8;
      gearProgress = 1;
      shadowOpacity = 0;
    }

    multiplierEl.style.opacity = '1';
    flewAwayOverlayEl?.classList.add('hidden');
  } else {
    const progress = clampValue(gameState.phaseElapsed / Math.max(0.001, ENDED_DURATION_SEC), 0, 1);
    const planeProgress = Math.min(1, progress / 0.4);
    const flyCurve = easeInCubic(planeProgress);

    const sceneScale = metrics.sceneScale || 1;
    const jetWidth = 170 * sceneScale;
    const exitRightDistance = Math.max(
      REFERENCE_STANDARD_EXIT_X * sceneScale,
      (metrics.width - metrics.flyX) + jetWidth + 180
    );

    if (isHypersonic) {
      const hyperRightDistance = Math.max(
        REFERENCE_HYPER_EXIT_X * sceneScale,
        (metrics.width - metrics.flyX) + jetWidth + 180
      );
      const hyperUpDistance = hyperRightDistance * (REFERENCE_HYPER_EXIT_Y / REFERENCE_HYPER_EXIT_X);

      jetX = metrics.flyX + flyCurve * hyperRightDistance;
      jetY = metrics.flyY - flyCurve * hyperUpDistance;
      jetRot = lerp(-30, -45, flyCurve);
    } else {
      jetX = metrics.flyX + flyCurve * exitRightDistance;
      jetY = metrics.flyY - flyCurve * (REFERENCE_STANDARD_EXIT_Y * sceneScale);
      jetRot = lerp(-9, -15, flyCurve);
    }

    runwayOpacity = 0;
    runwayShift = runwayHeight;
    runwaySpeed = 0;
    flameIntensity = lerp(1.5, 2.2, planeProgress);
    cloudBoost = isHypersonic ? 2.6 : 1.4;
    gearProgress = 1;
    shadowOpacity = 0;

    multiplierEl.style.opacity = '0';
    if (flewAwayOverlayEl) {
      flewAwayOverlayEl.classList.remove('hidden');
    }
    if (flewAwayMultEl) {
      flewAwayMultEl.textContent = gameState.finalCrashText;
    }
  }

  visualState.jet.x = jetX;
  visualState.jet.y = jetY;
  visualState.jet.rot = jetRot;
  jetModelEl.style.transform = 'translate(' + jetX + 'px, ' + jetY + 'px) rotate(' + jetRot + 'deg)';
  jetModelEl.style.setProperty('--jet-scale', String(metrics.sceneScale || 1));
  if (jetShadowEl) {
    jetShadowEl.style.opacity = String(clampValue(shadowOpacity, 0, 1));
  }

  if (backWheelsEl && frontWheelEl) {
    const easedGearProgress = easeInOutQuad(gearProgress);
    const wheelTranslateY = -WHEEL_RETRACT_PX * easedGearProgress * (metrics.sceneScale || 1);
    backWheelsEl.style.transform = 'translateY(' + wheelTranslateY + 'px)';
    frontWheelEl.style.transform = 'translateY(' + wheelTranslateY + 'px)';
    backWheelsEl.style.opacity = '1';
    frontWheelEl.style.opacity = '1';
  }

  visualState.runwayOffset = (visualState.runwayOffset - runwaySpeed * deltaSec) % 900;
  runwayLayerEl.style.backgroundPosition = `${visualState.runwayOffset}px 0`;
  runwayLayerEl.style.opacity = '1';
  runwayLayerEl.style.transform = `translateY(${runwayShift}px)`;

  const resolvedIntensity = Math.max(0.3, flameIntensity);
  engineFlameEl.style.setProperty('--thrust-intensity', String(resolvedIntensity));
  engineFlameEl.style.opacity = flameIntensity > 0 ? '1' : '0';

  if (isHypersonic) {
    engineFlameEl.style.setProperty('--flame-glow-outer', 'rgba(255,140,40,0.35)');
    engineFlameEl.style.setProperty('--flame-plume', 'rgba(255,160,50,0.7)');
    engineFlameEl.style.setProperty('--flame-plume-mid', 'rgba(255,100,20,0.3)');
    engineFlameEl.style.setProperty('--flame-mid', 'rgba(255,200,80,0.95)');
    engineFlameEl.style.setProperty('--flame-mid-edge', 'rgba(255,140,30,0.5)');
    engineFlameEl.style.setProperty('--flame-core', 'rgba(255,255,200,1)');
    engineFlameEl.style.setProperty('--flame-core-edge', 'rgba(255,230,150,0.85)');
    engineFlameEl.style.setProperty('--flame-nozzle', 'rgba(255,255,220,1)');
    engineFlameEl.style.setProperty('--flame-nozzle-mid', 'rgba(255,210,120,0.8)');
    engineFlameEl.style.setProperty('--flame-diamond', 'rgba(255,255,200,0.95)');
    engineFlameEl.style.setProperty('--flame-spark', 'rgba(255,200,100,0.95)');
    engineFlameEl.style.setProperty('--flame-spark-glow', 'rgba(255,150,50,0.7)');
  } else {
    engineFlameEl.style.setProperty('--flame-glow-outer', 'rgba(255,255,255,0.30)');
    engineFlameEl.style.setProperty('--flame-plume', 'rgba(255,255,255,0.6)');
    engineFlameEl.style.setProperty('--flame-plume-mid', 'rgba(230,230,230,0.25)');
    engineFlameEl.style.setProperty('--flame-mid', 'rgba(255,255,255,0.9)');
    engineFlameEl.style.setProperty('--flame-mid-edge', 'rgba(240,240,240,0.45)');
    engineFlameEl.style.setProperty('--flame-core', 'rgba(255,255,255,1)');
    engineFlameEl.style.setProperty('--flame-core-edge', 'rgba(255,255,255,0.85)');
    engineFlameEl.style.setProperty('--flame-nozzle', 'rgba(255,255,255,1)');
    engineFlameEl.style.setProperty('--flame-nozzle-mid', 'rgba(245,245,245,0.8)');
    engineFlameEl.style.setProperty('--flame-diamond', 'rgba(255,255,255,0.95)');
    engineFlameEl.style.setProperty('--flame-spark', 'rgba(255,255,255,0.95)');
    engineFlameEl.style.setProperty('--flame-spark-glow', 'rgba(230,230,230,0.7)');
  }
  updateClouds(metrics, deltaSec, cloudBoost, isHypersonic);
  updateStars(metrics, deltaSec, isHypersonic);
  updateContrail(metrics, deltaSec, isHypersonic);
  updatePodVisual(metrics, deltaSec);
}

function renderGameplayVisual(deltaSec) {
  if (!skyStageEl) {
    return;
  }

  const metrics = getStageMetrics();
  updateSkyTheme();
  updateCountdownOverlay();
  updateAircraftVisual(metrics, deltaSec);
}

function resetVisualRound() {
  visualState.contrailPuffs = [];
  visualState.podDrop.active = false;
  visualState.podDrop.elapsed = 0;

  if (jetModelEl) {
    jetModelEl.style.setProperty('--jet-scale', '1');
  }
  if (podModelEl) {
    podModelEl.style.setProperty('--jet-scale', '1');
  }
  if (parachuteModelEl) {
    parachuteModelEl.style.setProperty('--jet-scale', '1');
  }
  if (jetShadowEl) {
    jetShadowEl.style.opacity = '1';
  }

  if (podModelEl) {
    podModelEl.classList.add('hidden');
  }

  if (parachuteModelEl) {
    parachuteModelEl.classList.add('hidden');
    parachuteModelEl.style.opacity = '0';
  }

  if (backWheelsEl && frontWheelEl) {
    backWheelsEl.style.transform = 'translateY(0px)';
    frontWheelEl.style.transform = 'translateY(0px)';
    backWheelsEl.style.opacity = '1';
    frontWheelEl.style.opacity = '1';
  }

  if (starCanvasEl) {
    starCanvasEl.style.opacity = '0';
  }

  visualState.starsInited = false;
  visualState.stars = [];

  if (flewAwayOverlayEl) {
    flewAwayOverlayEl.classList.add('hidden');
  }

  hideFlightAmount(jetAmountEl);
  hideFlightAmount(podAmountEl);

  if (hypersonicOverlayEl) {
    hypersonicOverlayEl.classList.add('hidden');
    hypersonicOverlayEl.classList.remove('cashed');
  }

  if (countdownOverlayEl) {
    countdownOverlayEl.classList.remove('align-top');
  }

  if (vegasSlotEl) {
    vegasSlotEl.classList.add('hidden');
  }

  if (vegasSlotStripEl) {
    vegasSlotStripEl.innerHTML = '';
  }

  vegasSlotBuiltFor = 0;
  vegasSlotLastTickIdx = -1;
  vegasSlotLanded = false;
}

function gameLoop(timestamp) {
  if (gameState.loopLastTime === null) {
    gameState.loopLastTime = timestamp;
  }

  const deltaSec = Math.min((timestamp - gameState.loopLastTime) / 1000, 0.05);
  gameState.loopLastTime = timestamp;
  gameState.phaseElapsed += deltaSec;

  if (gameState.phase === 'taxi') {
    const remaining = Math.max(1, Math.ceil(TAXI_DURATION_SEC - gameState.phaseElapsed));
    setStageBanner(`Takeoff ${remaining}`);
    gameState.multiplier = 1;
    setMultiplierDisplay(1);

    if (gameState.phaseElapsed >= TAXI_DURATION_SEC) {
      gameState.phase = 'flying';
      gameState.phaseElapsed = 0;
      setMultiplierDisplay(1);
      if (multiplierEl) {
        multiplierEl.style.opacity = gameState.hypersonicActive ? '0' : '1';
      }
      setStageBanner('');
      startOpponentCashouts();
      if (currentTab === 'bets') {
        renderPlayers('bets');
      }
    }
  } else if (gameState.phase === 'flying') {
    gameState.multiplier = Math.max(1, Math.exp(MULTIPLIER_GROWTH_RATE * gameState.phaseElapsed));
    setMultiplierDisplay(gameState.multiplier);

    if (gameState.phaseElapsed >= gameState.crashAtSec) {
      onCrash();
    }
  } else if (gameState.phase === 'ended') {
    setMultiplierDisplay(gameState.multiplier);
    if (gameState.phaseElapsed >= ENDED_DURATION_SEC) {
      startRound();
    }
  }

  renderGameplayVisual(deltaSec);
  updateMultiplierPresentation();
  updateFlightAmounts();
  updateGameUi(timestamp);
  drawMiniGraph();
  gameRaf = window.requestAnimationFrame(gameLoop);
}

function getRandomSimReactionDelay() {
  return Math.floor(Math.random() * (REACTION_SIM_MAX_DELAY_MS - REACTION_SIM_MIN_DELAY_MS + 1)) + REACTION_SIM_MIN_DELAY_MS;
}

function emitSimulatedReaction() {
  const pick = SIMULATED_REACTIONS[Math.floor(Math.random() * SIMULATED_REACTIONS.length)];
  if (pick) {
    appendReaction(pick.message, pick.author, true, pick.tone);
  }

  reactionSimTimer = window.setTimeout(emitSimulatedReaction, getRandomSimReactionDelay());
}

function startReactionSimulation() {
  if (reactionSimTimer !== null) {
    window.clearTimeout(reactionSimTimer);
  }

  reactionSimTimer = window.setTimeout(emitSimulatedReaction, getRandomSimReactionDelay());
}

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menuDropdown.classList.toggle('hidden');
});

menuDropdown.addEventListener('click', (event) => {
  const button = event.target.closest('.menu-item');
  if (!button) {
    return;
  }

  const action = button.dataset.menuAction;

  if (action === 'rules') {
    openModal(infoModalBackdrop);
  } else if (action === 'provably-settings') {
    populateProvablySettings();
    openModal(provablySettingsModalBackdrop);
  } else if (action === 'game-limits') {
    openModal(gameLimitsModalBackdrop);
  }

  menuDropdown.classList.add('hidden');
});

infoBtn.addEventListener('click', () => openModal(infoModalBackdrop));
historyXBtn.addEventListener('click', () => {
  renderHistoryIconList();
  openModal(historyListModalBackdrop);
});
fairnessBtn.addEventListener('click', () => openModal(historyModalBackdrop));

fairnessBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openModal(historyModalBackdrop);
  }
});

if (roundFairLinkBtn) {
  roundFairLinkBtn.addEventListener('click', () => {
    closeModal(roundInfoModalBackdrop);
    openModal(historyModalBackdrop);
  });
}

if (provablyManualSeedBtn) {
  provablyManualSeedBtn.addEventListener('click', () => {
    provablyManualSeedMode = !provablyManualSeedMode;

    if (!provablyClientSeedInput) {
      return;
    }

    if (provablyManualSeedMode) {
      provablyClientSeedInput.readOnly = false;
      if (provablyClientSeedInput.value.trim() === '' || provablyClientSeedInput.value === 'Random every round:') {
        provablyClientSeedInput.value = 'player-seed-01';
      }
    } else {
      provablyClientSeedInput.value = 'Random every round:';
      provablyClientSeedInput.readOnly = true;
    }

    populateProvablySettings();
  });
}
document.addEventListener('click', (event) => {
  const copyButton = event.target.closest('.round-copy-btn');
  if (!copyButton) {
    return;
  }

  const targetId = copyButton.dataset.copyTarget;
  if (!targetId) {
    return;
  }

  copyRoundFieldValue(targetId).then((copied) => {
    if (!copied) {
      return;
    }

    copyButton.classList.add('copied');
    window.setTimeout(() => copyButton.classList.remove('copied'), 900);
  });
});

soundBtn.addEventListener('click', () => {
  masterAudioOn = !masterAudioOn;
  renderAudioControls();
  syncAudioState();
});

if (musicSwitchEl) {
  musicSwitchEl.addEventListener('change', () => {
    musicOn = musicSwitchEl.checked;
    syncAudioState();
  });
}

if (sfxSwitchEl) {
  sfxSwitchEl.addEventListener('change', () => {
    sfxOn = sfxSwitchEl.checked;
    syncAudioState();
  });
}

historyChips.forEach((chip, index) => {
  chip.addEventListener('click', () => {
    const item = getHistoryItemByIndex(index);

    if (item) {
      multiplierEl.textContent = item.crash;
      nonceInput.value = String(item.nonce);
      verifyResult.textContent = `Loaded ${item.crash} with nonce ${item.nonce}. Click Verify Crash Point.`;
      openRoundInfo(item, index);
      return;
    }

    const point = chip.dataset.historyPoint;
    if (point) {
      multiplierEl.textContent = point;
    }
  });
});

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;
    if (!tabName) {
      return;
    }
    setTab(tabName);
  });
});


mobileTabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabName = button.dataset.mobileTab;
    if (!tabName) {
      return;
    }

    if (isMobileViewport()) {
      if (mobileOpenTab === tabName) {
        mobileOpenTab = null;
        updateMobileTabButtons();
        updateTopFiltersUi();
        return;
      }

      mobileOpenTab = tabName;
    }

    setTab(tabName);
  });
});

topMetricButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const metric = button.dataset.topMetric;
    if (!metric || metric === topMetric) {
      return;
    }

    topMetric = metric;
    updateTopFiltersUi();

    if (currentTab === 'top') {
      renderPlayers('top');
    }
  });
});

topRangeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const range = button.dataset.topRange;
    if (!range || range === topRange) {
      return;
    }

    topRange = range;
    updateTopFiltersUi();

    if (currentTab === 'top') {
      renderPlayers('top');
    }
  });
});

playerRowsEl.addEventListener('click', (event) => {
  if (currentTab !== 'bets') {
    return;
  }

  const row = event.target.closest('.player-row[data-bet-id]');
  if (!row) {
    return;
  }

  const betId = row.dataset.betId;
  if (betId && gameState.phase === 'flying') {
    cashOutBet(betId, 'manual', gameState.multiplier);
  }
});

reactionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const text = button.dataset.reaction;
    if (!text) {
      return;
    }
    appendReaction(text, 'You', true, 'lime');
  });
});

function activateCardWithKeyboard(element, handler) {
  element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handler();
    }
  });
}

podCardEl.addEventListener('click', buyPod);
hypersonicCardEl.addEventListener('click', buyHypersonic);
activateCardWithKeyboard(podCardEl, buyPod);
activateCardWithKeyboard(hypersonicCardEl, buyHypersonic);

increaseBtn.addEventListener('click', () => updateBetAmount(gameState.betAmount * 2));
decreaseBtn.addEventListener('click', () => updateBetAmount(gameState.betAmount / 2));

betBtn.addEventListener('click', handleBetButtonAction);
if (podActionBtn) {
  podActionBtn.addEventListener('click', handlePodActionButton);
}
if (cancelBetBtn) {
  cancelBetBtn.addEventListener('click', cancelPendingBet);
}

verifyProvablyBtn.addEventListener('click', () => {
  const serverHash = serverHashInput.value.trim();
  const clientSeed = clientSeedInput.value.trim();
  const nonce = Number.parseInt(nonceInput.value, 10);

  if (!serverHash || !clientSeed || Number.isNaN(nonce) || nonce < 0) {
    verifyResult.textContent = 'Please provide valid server hash, client seed, and nonce.';
    return;
  }

  const result = calculateCrashPoint(serverHash, clientSeed, nonce);
  verifyResult.textContent = `Verified crash point: ${result}x`;
  multiplierEl.textContent = `${result}x`;
});

historyTableEl.addEventListener('click', (event) => {
  const row = event.target.closest('.history-row');
  if (!row) {
    return;
  }

  const index = Number.parseInt(row.dataset.historyIndex, 10);
  const item = getHistoryItemByIndex(index);

  if (item) {
    multiplierEl.textContent = item.crash;
    nonceInput.value = String(item.nonce);
    verifyResult.textContent = `Loaded ${item.crash} with nonce ${item.nonce}. Click Verify Crash Point.`;
    openRoundInfo(item, index);
    return;
  }

  const point = row.dataset.point;
  const nonce = row.dataset.nonce;
  if (point) {
    multiplierEl.textContent = point;
    nonceInput.value = nonce || nonceInput.value;
    verifyResult.textContent = `Loaded ${point} with nonce ${nonce}. Click Verify Crash Point.`;
  }
});

if (historyIconListEl) {
  historyIconListEl.addEventListener('click', (event) => {
    const row = event.target.closest('.history-icon-row');
    if (!row) {
      return;
    }

    const index = Number.parseInt(row.dataset.historyIndex, 10);
    const item = historyIconItems[index] || getHistoryItemByIndex(index);
    if (!item) {
      return;
    }

    closeModal(historyListModalBackdrop);
    openRoundInfo(item, index);
  });
}

Array.from(document.querySelectorAll('.modal-close')).forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.closeTarget;
    if (!target) {
      return;
    }
    const backdrop = document.getElementById(target);
    if (backdrop) {
      closeModal(backdrop);
    }
  });
});

modalBackdrops.forEach((backdrop) => {
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeModal(backdrop);
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-anchor')) {
    menuDropdown.classList.add('hidden');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAllOverlays();
  }
});

window.addEventListener('resize', () => {
  visualState.cloudInited = false;
  visualState.starsInited = false;

  const mobileNow = isMobileViewport();
  if (mobileNow !== wasMobileViewport) {
    mobileOpenTab = mobileNow ? null : currentTab;
    wasMobileViewport = mobileNow;
  }

  updateMobileTabButtons();
  updateTopFiltersUi();
});

function setBootProgress(completed, total) {
  const safeTotal = total > 0 ? total : 1;
  const percent = Math.max(0, Math.min(100, Math.round((completed / safeTotal) * 100)));

  if (bootLoaderFillEl) {
    bootLoaderFillEl.style.width = `${percent}%`;
  }

  if (bootLoaderPercentEl) {
    bootLoaderPercentEl.textContent = `${percent}%`;
  }
}

function waitForImageElement(imgEl) {
  return new Promise((resolve) => {
    if (!imgEl || !imgEl.src) {
      resolve();
      return;
    }

    if (imgEl.complete) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      resolve();
    };

    imgEl.addEventListener('load', finish, { once: true });
    imgEl.addEventListener('error', finish, { once: true });
    window.setTimeout(finish, 5000);
  });
}

function preloadImageUrl(url) {
  return new Promise((resolve) => {
    if (!url) {
      resolve();
      return;
    }

    const img = new Image();
    let settled = false;
    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = url;
    window.setTimeout(finish, 5000);
  });
}

async function preloadBootAssets() {
  const domImages = Array.from(document.querySelectorAll('img[src]'));
  const extraUrls = [new URL('./assets/road.png', window.location.href).href];
  const tasks = [
    ...domImages.map((imgEl) => waitForImageElement(imgEl)),
    ...extraUrls.map((url) => preloadImageUrl(url))
  ];

  if (!tasks.length) {
    setBootProgress(1, 1);
    return;
  }

  let completed = 0;
  setBootProgress(0, tasks.length);

  await Promise.all(tasks.map((task) => task.finally(() => {
    completed += 1;
    setBootProgress(completed, tasks.length);
  })));
}

function startGameApplication() {
  if (appBooted) {
    return;
  }

  appBooted = true;
  wasMobileViewport = isMobileViewport();
  mobileOpenTab = wasMobileViewport ? null : 'bets';
  setTab('bets');
  renderHeaderHistory();
  renderHistory();
  chatLinesEl.innerHTML = DEFAULT_CHAT;
  updateGameUi();
  renderAudioControls();
  syncAudioState();
  ensureMusicBoot();
  startRound();
  startReactionSimulation();
  gameRaf = window.requestAnimationFrame(gameLoop);
}

function hideBootLoader() {
  document.body.classList.remove('booting');

  if (!bootLoaderEl) {
    return;
  }

  bootLoaderEl.classList.add('done');
  window.setTimeout(() => {
    bootLoaderEl.remove();
  }, 320);
}

async function runBootSequence() {
  try {
    await Promise.all([
      preloadBootAssets(),
      new Promise((resolve) => window.setTimeout(resolve, 450))
    ]);
  } finally {
    startGameApplication();
    window.requestAnimationFrame(() => {
      hideBootLoader();
    });
  }
}

window.addEventListener('load', () => {
  void runBootSequence();
});

window.addEventListener('beforeunload', () => {
  stopOpponentCashouts();

  if (reactionSimTimer !== null) {
    window.clearTimeout(reactionSimTimer);
  }

  if (gameRaf !== null) {
    window.cancelAnimationFrame(gameRaf);
  }

  if (typeof window.disposeF35Audio === 'function') {
    window.disposeF35Audio();
  }
});
