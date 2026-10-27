/* =========================================================
   CONFIG & DICCIONARIOS
   ========================================================= */
const API_RADIO = 'https://all.api.radio-browser.info/json/stations/search';

const i18n = {
  es: {
    header_radio: 'SISTEMA DE RADIO', search_placeholder: 'Buscar radio...', all_countries: 'Todos',
    connecting: '> Iniciando conexión...', searching: '> Buscando señal...', error_conn: '> ERROR DE CONEXIÓN:',
    results_0: '> 0 RESULTADOS ENCONTRADOS', badge_ok: '✔ MP3/OGG', badge_err: '✘ NO COMPATIBLE',
    btn_add: '＋ AÑADIR', btn_use_mp3: 'USAR MP3', btn_no_support: 'NO SOPORTADO',
    btn_play: 'PLAY', btn_pause: 'PAUSE', btn_copy: 'COPIAR', btn_export: 'EXPORTAR',
    waiting: 'SISTEMA EN ESPERA', footer_text: 'EUROTRACK SIMULATOR',
    toast_dup: '> YA ESTÁ EN LA LISTA', toast_add: '> AÑADIDO AL SII', toast_play_err: '> FALLO AL REPRODUCIR',
    toast_copied: '> TEXTO COPIADO', toast_exported: '> ARCHIVO EXPORTADO', toast_empty: '> LA LISTA YA ESTÁ VACÍA',
    toast_cleared: '> LISTA LIMPIADA', toast_import_ok: '> RADIOS IMPORTADAS', toast_import_err: '> ERROR AL IMPORTAR'
  },
  en: {
    header_radio: 'RADIO SYSTEM', search_placeholder: 'Search radio...', all_countries: 'All',
    connecting: '> Connecting...', searching: '> Searching signal...', error_conn: '> CONNECTION ERROR:',
    results_0: '> 0 RESULTS FOUND', badge_ok: '✔ MP3/OGG', badge_err: '✘ NOT COMPATIBLE',
    btn_add: '＋ ADD', btn_use_mp3: 'USE MP3', btn_no_support: 'NOT SUPPORTED',
    btn_play: 'PLAY', btn_pause: 'PAUSE', btn_copy: 'COPY', btn_export: 'EXPORT',
    waiting: 'SYSTEM WAITING', footer_text: 'EUROTRACK SIMULATOR',
    toast_dup: '> ALREADY IN LIST', toast_add: '> ADDED TO SII', toast_play_err: '> PLAYBACK FAILED',
    toast_copied: '> TEXT COPIED', toast_exported: '> FILE EXPORTED', toast_empty: '> LIST IS ALREADY EMPTY',
    toast_cleared: '> LIST CLEARED', toast_import_ok: '> RADIOS IMPORTED', toast_import_err: '> IMPORT ERROR'
  }
};

const COUNTRIES = [
  { code:'AF', name:'Afganistán / Afghanistan' }, { code:'AL', name:'Albania' }, { code:'DE', name:'Alemania / Germany' }, { code:'AD', name:'Andorra' }, { code:'AO', name:'Angola' }, { code:'AI', name:'Anguila' }, { code:'AG', name:'Antigua y Barbuda' }, { code:'SA', name:'Arabia Saudita' }, { code:'DZ', name:'Argelia' }, { code:'AR', name:'Argentina' }, { code:'AM', name:'Armenia' }, { code:'AW', name:'Aruba' }, { code:'AU', name:'Australia' }, { code:'AT', name:'Austria' }, { code:'AZ', name:'Azerbaiyán' }, { code:'BS', name:'Bahamas' }, { code:'BD', name:'Bangladés' }, { code:'BB', name:'Barbados' }, { code:'BH', name:'Baréin' }, { code:'BE', name:'Bélgica / Belgium' }, { code:'BZ', name:'Belice' }, { code:'BJ', name:'Benín' }, { code:'BM', name:'Bermudas' }, { code:'BY', name:'Bielorrusia' }, { code:'BO', name:'Bolivia' }, { code:'BA', name:'Bosnia y Herzegovina' }, { code:'BW', name:'Botsuana' }, { code:'BR', name:'Brasil / Brazil' }, { code:'BN', name:'Brunéi' }, { code:'BG', name:'Bulgaria' }, { code:'BF', name:'Burkina Faso' }, { code:'BI', name:'Burundi' }, { code:'BT', name:'Bután' }, { code:'CV', name:'Cabo Verde' }, { code:'KH', name:'Camboya' }, { code:'CM', name:'Camerún' }, { code:'CA', name:'Canadá / Canada' }, { code:'QA', name:'Catar' }, { code:'TD', name:'Chad' }, { code:'CL', name:'Chile' }, { code:'CN', name:'China' }, { code:'CY', name:'Chipre' }, { code:'CO', name:'Colombia' }, { code:'KM', name:'Comoras' }, { code:'KP', name:'Corea del Norte' }, { code:'KR', name:'Corea del Sur' }, { code:'CI', name:'Costa de Marfil' }, { code:'CR', name:'Costa Rica' }, { code:'HR', name:'Croacia' }, { code:'CU', name:'Cuba' }, { code:'CW', name:'Curazao' }, { code:'DK', name:'Dinamarca / Denmark' }, { code:'DM', name:'Dominica' }, { code:'EC', name:'Ecuador' }, { code:'EG', name:'Egipto' }, { code:'SV', name:'El Salvador' }, { code:'AE', name:'Emiratos Árabes Unidos' }, { code:'ER', name:'Eritrea' }, { code:'SK', name:'Eslovaquia' }, { code:'SI', name:'Eslovenia' }, { code:'ES', name:'España / Spain' }, { code:'US', name:'Estados Unidos / USA' }, { code:'EE', name:'Estonia' }, { code:'SZ', name:'Esuatini' }, { code:'ET', name:'Etiopía' }, { code:'PH', name:'Filipinas' }, { code:'FI', name:'Finlandia' }, { code:'FJ', name:'Fiyi' }, { code:'FR', name:'Francia / France' }, { code:'GA', name:'Gabón' }, { code:'GM', name:'Gambia' }, { code:'GE', name:'Georgia' }, { code:'GH', name:'Ghana' }, { code:'GI', name:'Gibraltar' }, { code:'GD', name:'Granada' }, { code:'GR', name:'Grecia / Greece' }, { code:'GL', name:'Groenlandia' }, { code:'GP', name:'Guadalupe' }, { code:'GU', name:'Guam' }, { code:'GT', name:'Guatemala' }, { code:'GF', name:'Guayana Francesa' }, { code:'GG', name:'Guernsey' }, { code:'GN', name:'Guinea' }, { code:'GQ', name:'Guinea Ecuatorial' }, { code:'GW', name:'Guinea-Bisáu' }, { code:'GY', name:'Guyana' }, { code:'HT', name:'Haití' }, { code:'HN', name:'Honduras' }, { code:'HK', name:'Hong Kong' }, { code:'HU', name:'Hungría' }, { code:'IN', name:'India' }, { code:'ID', name:'Indonesia' }, { code:'IQ', name:'Irak' }, { code:'IR', name:'Irán' }, { code:'IE', name:'Irlanda / Ireland' }, { code:'BV', name:'Isla Bouvet' }, { code:'IM', name:'Isla de Man' }, { code:'CX', name:'Isla de Navidad' }, { code:'NF', name:'Isla Norfolk' }, { code:'IS', name:'Islandia' }, { code:'KY', name:'Islas Caimán' }, { code:'CC', name:'Islas Cocos' }, { code:'CK', name:'Islas Cook' }, { code:'FO', name:'Islas Feroe' }, { code:'GS', name:'Islas Georgias del Sur y Sandwich del Sur' }, { code:'HM', name:'Islas Heard y McDonald' }, { code:'MV', name:'Islas Maldivas' }, { code:'FK', name:'Islas Malvinas' }, { code:'MP', name:'Islas Marianas del Norte' }, { code:'MH', name:'Islas Marshall' }, { code:'PN', name:'Islas Pitcairn' }, { code:'SB', name:'Islas Salomón' }, { code:'TC', name:'Islas Turcas y Caicos' }, { code:'UM', name:'Islas Ultramarinas Menores de Estados Unidos' }, { code:'VG', name:'Islas Vírgenes Británicas' }, { code:'VI', name:'Islas Vírgenes de los Estados Unidos' }, { code:'IL', name:'Israel' }, { code:'IT', name:'Italia / Italy' }, { code:'JM', name:'Jamaica' }, { code:'JP', name:'Japón / Japan' }, { code:'JE', name:'Jersey' }, { code:'JO', name:'Jordania' }, { code:'KZ', name:'Kazajistán' }, { code:'KE', name:'Kenia' }, { code:'KG', name:'Kirguistán' }, { code:'KI', name:'Kiribati' }, { code:'KW', name:'Kuwait' }, { code:'LA', name:'Laos' }, { code:'LS', name:'Lesoto' }, { code:'LV', name:'Letonia' }, { code:'LB', name:'Líbano' }, { code:'LR', name:'Liberia' }, { code:'LY', name:'Libia' }, { code:'LI', name:'Liechtenstein' }, { code:'LT', name:'Lituania' }, { code:'LU', name:'Luxemburgo' }, { code:'MO', name:'Macao' }, { code:'MK', name:'Macedonia del Norte' }, { code:'MG', name:'Madagascar' }, { code:'MY', name:'Malasia' }, { code:'MW', name:'Malaui' }, { code:'ML', name:'Mali' }, { code:'MT', name:'Malta' }, { code:'MA', name:'Marruecos' }, { code:'MQ', name:'Martinica' }, { code:'MU', name:'Mauricio' }, { code:'MR', name:'Mauritania' }, { code:'YT', name:'Mayotte' }, { code:'MX', name:'México / Mexico' }, { code:'FM', name:'Micronesia' }, { code:'MD', name:'Moldavia' }, { code:'MC', name:'Mónaco' }, { code:'MN', name:'Mongolia' }, { code:'ME', name:'Montenegro' }, { code:'MS', name:'Montserrat' }, { code:'MZ', name:'Mozambique' }, { code:'MM', name:'Birmania' }, { code:'NA', name:'Namibia' }, { code:'NR', name:'Nauru' }, { code:'NP', name:'Nepal' }, { code:'NI', name:'Nicaragua' }, { code:'NE', name:'Níger' }, { code:'NG', name:'Nigeria' }, { code:'NU', name:'Niue' }, { code:'NO', name:'Noruega / Norway' }, { code:'NC', name:'Nueva Caledonia' }, { code:'NZ', name:'Nueva Zelanda' }, { code:'OM', name:'Omán' }, { code:'NL', name:'Países Bajos / Netherlands' }, { code:'PK', name:'Pakistán' }, { code:'PW', name:'Palaos' }, { code:'PA', name:'Panamá' }, { code:'PG', name:'Papúa Nueva Guinea' }, { code:'PY', name:'Paraguay' }, { code:'PE', name:'Perú / Peru' }, { code:'PF', name:'Polinesia Francesa' }, { code:'PL', name:'Polonia / Poland' }, { code:'PT', name:'Portugal' }, { code:'PR', name:'Puerto Rico' }, { code:'GB', name:'Reino Unido / UK' }, { code:'CF', name:'República Centroafricana' }, { code:'CZ', name:'República Checa' }, { code:'CG', name:'República del Congo' }, { code:'CD', name:'República Democrática del Congo' }, { code:'DO', name:'República Dominicana' }, { code:'RE', name:'Reunión' }, { code:'RW', name:'Ruanda' }, { code:'RO', name:'Rumanía' }, { code:'RU', name:'Rusia / Russia' }, { code:'EH', name:'Sahara Occidental' }, { code:'WS', name:'Samoa' }, { code:'AS', name:'Samoa Americana' }, { code:'BL', name:'San Bartolomé' }, { code:'KN', name:'San Cristóbal y Nieves' }, { code:'SM', name:'San Marino' }, { code:'MF', name:'San Martín' }, { code:'PM', name:'San Pedro y Miquelón' }, { code:'VC', name:'San Vicente y las Granadinas' }, { code:'SH', name:'Santa Elena' }, { code:'LC', name:'Santa Lucía' }, { code:'ST', name:'Santo Tomé y Príncipe' }, { code:'SN', name:'Senegal' }, { code:'RS', name:'Serbia' }, { code:'SC', name:'Seychelles' }, { code:'SL', name:'Sierra Leona' }, { code:'SG', name:'Singapur' }, { code:'SX', name:'Sint Maarten' }, { code:'SY', name:'Siria' }, { code:'SO', name:'Somalia' }, { code:'LK', name:'Sri Lanka' }, { code:'ZA', name:'Sudáfrica' }, { code:'SD', name:'Sudán' }, { code:'SS', name:'Sudán del Sur' }, { code:'SE', name:'Suecia / Sweden' }, { code:'CH', name:'Suiza / Switzerland' }, { code:'SR', name:'Surinam' }, { code:'SJ', name:'Svalbard y Jan Mayen' }, { code:'TH', name:'Tailandia' }, { code:'TW', name:'Taiwán' }, { code:'TZ', name:'Tanzania' }, { code:'TJ', name:'Tayikistán' }, { code:'IO', name:'Territorio Británico del Océano Índico' }, { code:'TF', name:'Territorios Australes Franceses' }, { code:'PS', name:'Territorios Palestinos' }, { code:'TL', name:'Timor Oriental' }, { code:'TG', name:'Togo' }, { code:'TK', name:'Tokelau' }, { code:'TO', name:'Tonga' }, { code:'TT', name:'Trinidad y Tobago' }, { code:'TN', name:'Túnez' }, { code:'TM', name:'Turkmenistán' }, { code:'TR', name:'Turquía / Turkey' }, { code:'TV', name:'Tuvalu' }, { code:'UA', name:'Ucrania' }, { code:'UG', name:'Uganda' }, { code:'UY', name:'Uruguay' }, { code:'UZ', name:'Uzbekistán' }, { code:'VU', name:'Vanuatu' }, { code:'VA', name:'Ciudad del Vaticano' }, { code:'VE', name:'Venezuela' }, { code:'VN', name:'Vietnam' }, { code:'WF', name:'Wallis y Futuna' }, { code:'YE', name:'Yemen' }, { code:'DJ', name:'Yibuti' }, { code:'ZM', name:'Zambia' }, { code:'ZW', name:'Zimbabue' }
];

const ISO3 = { AR:'ARG', ES:'ESP', US:'USA', MX:'MEX', DE:'DEU', FR:'FRA', BR:'BRA', IT:'ITA', GB:'GBR', CL:'CHL', CO:'COL', PE:'PER', UY:'URY', PY:'PRY', BO:'BOL', VE:'VEN', PT:'PRT', PL:'POL', NL:'NLD', CA:'CAN', AU:'AUS', JP:'JPN', CN:'CHN', IN:'IND', RU:'RUS', SE:'SWE', NO:'NOR', FI:'FIN', DK:'DNK', CH:'CHE', AT:'AUT', BE:'BEL', IE:'IRL', GR:'GRC', TR:'TUR', ZA:'ZAF' };

const LS_KEYS = { VOLUME: 'ets_volume', MUTED: 'ets_muted', LIST: 'ets_saved_list', THEME: 'ets_theme', LANG: 'ets_lang' };

const state = {
  radios: [], country: '', radioQuery: '', list: [], page: 1, limit: 24,
  lang: 'es', theme: 'dark'
};

let currentRadioId = null;
let radiosAbort = null;
const $ = (sel) => document.querySelector(sel);

function escapeHtml(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])); }
function debounce(fn, ms) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }
function cleanField(s) { return String(s ?? '').replace(/\|/g, '-').replace(/"/g, "'").replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim(); }
function normalizeName(name) { return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
function getIso3(code) { const c = String(code || '').toUpperCase(); return ISO3[c] || c || 'GEN'; }

function esCompatible(codec, url) {
  const c = String(codec || '').toLowerCase(); const u = String(url || '').toLowerCase().split('?')[0];
  if (c.includes('mp3') || c.includes('ogg') || c.includes('vorbis')) return true;
  if (u.endsWith('.mp3') || u.endsWith('.ogg')) return true;
  return false;
}

function flash(msg, color) {
  const el = document.createElement('aside');
  el.className = 'toast ' + (color === 'green' ? 'green' : color === 'red' ? 'red' : 'neutral');
  el.textContent = msg; document.body.appendChild(el); setTimeout(() => el.remove(), 2500);
}

function saveList() { localStorage.setItem(LS_KEYS.LIST, JSON.stringify(state.list)); }

/* =========================================================
   TRADUCCIÓN & TEMA
   ========================================================= */
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem(LS_KEYS.LANG, lang);
  const btnLangSpan = document.querySelector('#btnLang span');
  if (btnLangSpan) btnLangSpan.textContent = lang === 'es' ? 'ES' : 'EN';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
  });

  const searchTitle = $('#radioResults').querySelector('p');
  if (searchTitle && (searchTitle.textContent.includes('Iniciando') || searchTitle.textContent.includes('Connecting'))) {
    searchTitle.textContent = i18n[lang].connecting;
  }
  
  renderCountryMenu();
  renderList();
  updateCountryButton();
  updatePlayerDisplay(playerTitle.textContent === 'SISTEMA EN ESPERA' || playerTitle.textContent === 'SYSTEM WAITING' ? null : playerTitle.textContent, playerUrl.textContent === '—' ? null : playerUrl.textContent);
  renderRadios();
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem(LS_KEYS.THEME, theme);
  document.documentElement.setAttribute('data-theme', theme);
  const iconSun = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  const iconMoon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  $('#iconTheme').innerHTML = theme === 'dark' ? iconSun : iconMoon;
}

/* =========================================================
   VOLUMEN + PLAYER
   ========================================================= */
const audio = document.getElementById('globalAudio');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');
const btnMute = document.getElementById('btnMute');
const btnStop = document.getElementById('btnStop');
const playerTitle = document.getElementById('playerTitle');
const playerUrl = document.getElementById('playerUrl');
const playerDot = document.getElementById('playerDot');
const iconVolume = document.getElementById('iconVolume');

const SVG_VOL_ON = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`;
const SVG_VOL_LOW = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>`;
const SVG_VOL_MUTE = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;

function applyVolume(value, persist = true) {
  const v = Math.max(0, Math.min(1, value));
  audio.volume = v; if (v > 0) audio.muted = false;
  if (persist) { localStorage.setItem(LS_KEYS.VOLUME, String(v)); localStorage.setItem(LS_KEYS.MUTED, String(audio.muted)); }
  updateVolumeUI();
}
function updateVolumeUI() {
  const pct = Math.round(audio.volume * 100);
  const muted = audio.muted || audio.volume === 0;
  volumeSlider.value = String(pct);
  volumeLabel.textContent = muted ? 'MUTE' : pct + '%';
  iconVolume.innerHTML = muted ? SVG_VOL_MUTE : (pct < 40 ? SVG_VOL_LOW : SVG_VOL_ON);
  btnMute.style.opacity = muted ? '0.5' : '1';
}
function updatePlayerDisplay(title, url) {
  playerTitle.textContent = title || i18n[state.lang].waiting;
  playerUrl.textContent = url || '—';
  if (title) playerDot.classList.add('active');
  else playerDot.classList.remove('active');
}

volumeSlider.addEventListener('input', (e) => { applyVolume(parseInt(e.target.value, 10) / 100); });
btnMute.addEventListener('click', () => { audio.muted = !audio.muted; localStorage.setItem(LS_KEYS.MUTED, String(audio.muted)); updateVolumeUI(); });
btnStop.addEventListener('click', () => { audio.pause(); audio.removeAttribute('src'); audio.load(); currentRadioId = null; updatePlayerDisplay(null, null); updatePlayButtons(); });
audio.addEventListener('play', updatePlayButtons);
audio.addEventListener('pause', updatePlayButtons);
audio.addEventListener('ended', () => { currentRadioId = null; updatePlayerDisplay(null, null); updatePlayButtons(); });
audio.addEventListener('error', () => { if (!audio.currentSrc) return; flash(i18n[state.lang].toast_play_err, 'red'); });

/* =========================================================
   RADIOS
   ========================================================= */
async function loadRadios(page = 1) {
  state.page = page;
  const resultsEl = $('#radioResults');
  resultsEl.innerHTML = `<p class="text-slate-500 font-mono text-sm py-8">${i18n[state.lang].searching}<span class="loader"></span></p>`;
  $('#pagination').innerHTML = '';

  if (radiosAbort) radiosAbort.abort();
  radiosAbort = new AbortController();

  const params = new URLSearchParams({ limit: state.limit, offset: (state.page - 1) * state.limit, order: 'clickcount', reverse: 'true', hidebroken: 'true' });
  if (state.country) params.set('countrycode', state.country);
  if (state.radioQuery) params.set('name', state.radioQuery);

  try {
    const res = await fetch(`${API_RADIO}?${params.toString()}`, { signal: radiosAbort.signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const raw = await res.json();
    state.radios = processRadios(raw);
    renderRadios();
    renderPagination(raw.length === state.limit);
  } catch (err) {
    if (err.name === 'AbortError') return;
    resultsEl.innerHTML = `<p class="text-[var(--danger)] font-mono text-sm py-8">${i18n[state.lang].error_conn} ${escapeHtml(err.message)}</p>`;
  }
}

function processRadios(raw) {
  const groups = new Map();
  for (const r of raw) {
    if (!r.stationuuid) continue;
    const url = r.url_resolved || r.url; if (!url) continue;
    const key = normalizeName(r.name) || r.stationuuid;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  const result = [];
  for (const group of groups.values()) {
    const compatible = group.filter(r => esCompatible(r.codec, r.url_resolved || r.url));
    let best = compatible.length ? compatible.reduce((a, b) => ((b.bitrate || 0) > (a.bitrate || 0) ? b : a)) : group[0];
    result.push({ ...best, _group: group, _compatible: esCompatible(best.codec, best.url_resolved || best.url) });
  }
  result.sort((a, b) => {
    if (a._compatible && !b._compatible) return -1;
    if (!a._compatible && b._compatible) return 1;
    return (b.bitrate || 0) - (a.bitrate || 0);
  });
  return result;
}

function renderRadios() {
  const host = $('#radioResults');
  if (!state.radios.length) {
    host.innerHTML = `<p class="text-slate-500 font-mono text-sm py-8">${i18n[state.lang].results_0}</p>`;
    return;
  }
  host.innerHTML = state.radios.map(renderRadioCard).join('');
  updatePlayButtons();
}

function renderPagination(hasMore) {
  const host = $('#pagination');
  if (state.page === 1 && !hasMore) { host.innerHTML = ''; return; }
  
  let html = '';
  const startPage = Math.max(1, state.page - 2);
  const endPage = hasMore ? state.page + 2 : state.page;
  
  html += state.page > 1 
    ? `<button data-page="${state.page - 1}" class="w-8 h-8 flex items-center justify-center border-2 border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-[var(--surface)]"><</button>`
    : `<span class="w-8 h-8 flex items-center justify-center border-2 border-transparent text-[var(--text-dim)]"><</span>`;

  for (let i = startPage; i <= endPage; i++) {
    if (i === state.page) html += `<span class="w-8 h-8 flex items-center justify-center border-2 border-[var(--accent)] bg-[var(--accent)] text-white font-bold">${i}</span>`;
    else html += `<button data-page="${i}" class="w-8 h-8 flex items-center justify-center border-2 border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-[var(--surface)]">${i}</button>`;
  }
  
  html += hasMore 
    ? `<button data-page="${state.page + 1}" class="w-8 h-8 flex items-center justify-center border-2 border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-[var(--surface)]">></button>`
    : `<span class="w-8 h-8 flex items-center justify-center border-2 border-transparent text-[var(--text-dim)]">></span>`;
    
  host.innerHTML = html;
}

function renderRadioCard(radio) {
  const group = radio._group || [radio];
  const compat = radio._compatible;
  const groupCompat = group.find(r => esCompatible(r.codec, r.url_resolved || r.url));
  const dotClass = radio.lastcheckok === 1 ? 'on' : 'off';
  const badge = compat ? `<span class="badge badge-ok">${i18n[state.lang].badge_ok}</span>` : `<span class="badge badge-err">${i18n[state.lang].badge_err}</span>`;

  const iso3 = getIso3(radio.country);
  const genre = radio.tags ? radio.tags.split(',')[0].trim() : iso3;
  const language = radio.language || iso3;

  const channelsHtml = group.length > 1
    ? `<section class="channels-box"><span style="color:var(--text-dim);">>> CANALES:</span>${group.map(r => {
        const c = esCompatible(r.codec, r.url_resolved || r.url);
        return `<span style="color:var(--${c ? 'success' : 'danger'});margin-left:8px;">${c ? '✔' : '✘'} ${escapeHtml(r.codec || '?')} ${r.bitrate || 0}k</span>`;
      }).join(' ')}</section>` : '';

  let actionBtn = '';
  if (compat) {
    actionBtn = `<button data-action="add-radio" data-radio-id="${radio.stationuuid}" class="btn btn-lime px-4 py-2 text-xs">${i18n[state.lang].btn_add}</button>`;
  } else if (groupCompat) {
    actionBtn = `<button data-action="add-alt" data-radio-id="${radio.stationuuid}"
      data-alt-url="${escapeHtml(groupCompat.url_resolved || groupCompat.url)}"
      data-alt-name="${escapeHtml(radio.name)}" data-alt-genre="${escapeHtml(genre)}"
      data-alt-language="${escapeHtml(language)}" data-alt-bitrate="${groupCompat.bitrate || 128}"
      class="btn btn-green px-4 py-2 text-xs">${i18n[state.lang].btn_use_mp3}</button>`;
  } else {
    actionBtn = `<button class="btn btn-ghost px-4 py-2 text-xs opacity-50 cursor-not-allowed" disabled>${i18n[state.lang].btn_no_support}</button>`;
  }

  return `
  <article class="radio-card" data-radio-id="${radio.stationuuid}" data-compat="${compat ? 'ok' : 'err'}">
    <header class="flex items-start justify-between gap-3 mb-3">
      <section class="flex items-center gap-3 min-w-0">
        <span class="dot ${dotClass}"></span>
        <h3 class="radio-name truncate">${escapeHtml(radio.name || 'Unknown')}</h3>
      </section>
      ${badge}
    </header>
    <p class="radio-meta flex flex-wrap gap-2 mb-2">
      <span class="text-[var(--text)]">${escapeHtml(radio.codec || '?')}</span><span class="text-[var(--border-2)]">|</span>
      <span>${radio.bitrate || 0} KBPS</span><span class="text-[var(--border-2)]">|</span>
      <span>${escapeHtml(radio.countryName || radio.country || '?')}</span>
      ${radio.tags ? `<span class="text-[var(--border-2)]">|</span><span class="truncate max-w-xs">${escapeHtml(radio.tags.split(',').slice(0,3).join(', '))}</span>` : ''}
    </p>
    ${channelsHtml}
    <footer class="flex gap-3 mt-4">
      <button data-action="play-radio" data-radio-id="${radio.stationuuid}" class="btn btn-play flex-1 py-2">
        <svg viewBox="0 0 24 24" style="width:14px;height:14px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ${i18n[state.lang].btn_play}
      </button>
      ${actionBtn}
    </footer>
  </article>`;
}

function playRadioById(id) {
  const radio = state.radios.find(r => r.stationuuid === id);
  if (!radio) return;
  const url = radio.url_resolved || radio.url;
  if (currentRadioId === id && !audio.paused) { audio.pause(); updatePlayButtons(); return; }
  currentRadioId = id; audio.src = url;
  updatePlayerDisplay(radio.name || 'Radio', url);
  audio.play().catch(() => { flash(i18n[state.lang].toast_play_err, 'red'); currentRadioId = null; updatePlayerDisplay(null, null); updatePlayButtons(); });
  updatePlayButtons();
}

function updatePlayButtons() {
  document.querySelectorAll('.radio-card').forEach(card => {
    const btn = card.querySelector('[data-action="play-radio"]');
    if (!btn) return;
    const on = card.dataset.radioId === currentRadioId && !audio.paused;
    if (on) {
      btn.innerHTML = `<svg viewBox="0 0 24 24" style="width:14px;height:14px;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> ${i18n[state.lang].btn_pause}`;
      btn.style.borderColor = 'var(--accent)'; btn.style.color = 'var(--accent)';
    } else {
      btn.innerHTML = `<svg viewBox="0 0 24 24" style="width:14px;height:14px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ${i18n[state.lang].btn_play}`;
      btn.style.borderColor = ''; btn.style.color = '';
    }
  });
}

/* =========================================================
   LISTA + .sii
   ========================================================= */
function addToList(url, name, genre, language, bitrate) {
  if (!url || !name) return;
  const item = {
    id: 'i' + Date.now() + Math.random().toString(36).slice(2, 7),
    url: cleanField(url), name: cleanField(name),
    genre: cleanField(genre || 'GEN').toUpperCase(), language: cleanField(language || 'GEN').toUpperCase(),
    bitrate: String(parseInt(bitrate, 10) || 128)
  };
  if (state.list.some(x => x.url === item.url && x.name === item.name)) { flash(i18n[state.lang].toast_dup, 'red'); return; }
  state.list.push(item); saveList(); renderList(); flash(i18n[state.lang].toast_add, 'green');
}

function removeFromList(id) {
  state.list = state.list.filter(x => x.id !== id);
  saveList(); renderList();
}

let dragSrcEl = null;

function renderList() {
  const host = $('#listItems');
  $('#listCount').textContent = String(state.list.length);
  if (!state.list.length) {
    host.innerHTML = '<li class="text-xs text-center py-4 font-mono text-[var(--text-dim)] border-2 border-dashed border-[var(--border)]">> VACÍO / EMPTY</li>';
  } else {
    host.innerHTML = state.list.map(item => `
      <li class="list-item" draggable="true" data-id="${item.id}">
        <span class="drag-handle">
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </span>
        <section class="flex-1 min-w-0">
          <strong class="list-item-title">${escapeHtml(item.name)}</strong>
          <code class="list-item-url">${escapeHtml(item.url)}</code>
          <small class="list-item-meta">${escapeHtml(item.genre)} / ${escapeHtml(item.language)} / ${item.bitrate}</small>
        </section>
        <button data-action="remove-item" data-item-id="${item.id}" style="color:var(--danger);" class="hover:text-white transition-colors cursor-pointer" title="Quitar">
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </li>`).join('');
  }
  updateSIIPreview();
  
  const items = host.querySelectorAll('.list-item');
  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
    item.addEventListener('dragend', handleDragEnd);
  });
}

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', this.dataset.id);
  this.classList.add('dragging');
}
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  this.classList.add('drag-over');
}
function handleDrop(e) {
  e.stopPropagation();
  this.classList.remove('drag-over');
  if (dragSrcEl !== this) {
    const srcId = dragSrcEl.dataset.id;
    const destId = this.dataset.id;
    const srcIdx = state.list.findIndex(x => x.id === srcId);
    const destIdx = state.list.findIndex(x => x.id === destId);
    
    const [moved] = state.list.splice(srcIdx, 1);
    state.list.splice(destIdx, 0, moved);
    
    saveList();
    renderList();
  }
}
function handleDragEnd(e) {
  this.classList.remove('dragging');
  document.querySelectorAll('.list-item').forEach(el => el.classList.remove('drag-over'));
}

function buildSII() {
  let out = 'SiiNunit\n{\nlive_stream_def : .live_streams {\n';
  state.list.forEach((item, i) => {
    out += ` stream_data[${i}]: "${item.url}|${item.name}|${item.genre}|${item.language}|${item.bitrate}|0|0|0|0"\n`;
  });
  out += '}\n}\n';
  return out;
}
function updateSIIPreview() { $('#siiPreview').textContent = buildSII(); }

/* =========================================================
   IMPORTAR .sii
   ========================================================= */
document.getElementById('btnImport').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const text = evt.target.result;
      const regex = /stream_data\[\d+\]:\s*"([^"]+)"/g;
      let match;
      let count = 0;

      while ((match = regex.exec(text)) !== null) {
        const line = match[1];
        const parts = line.split('|');
        if (parts.length >= 5) {
          const [url, name, genre, language, bitrate] = parts;
          if (!state.list.some(x => x.url === url && x.name === name)) {
            state.list.push({
              id: 'i' + Date.now() + Math.random().toString(36).slice(2, 7),
              url: cleanField(url), name: cleanField(name),
              genre: cleanField(genre).toUpperCase(), language: cleanField(language).toUpperCase(),
              bitrate: String(parseInt(bitrate, 10) || 128)
            });
            count++;
          }
        }
      }
      
      if (count > 0) {
        saveList(); renderList(); flash(`${i18n[state.lang].toast_import_ok} (${count})`, 'green');
      } else {
        flash(i18n[state.lang].toast_import_err, 'red');
      }
    } catch (err) {
      flash(i18n[state.lang].toast_import_err, 'red');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

/* =========================================================
   PAISES
   ========================================================= */
function renderCountryMenu() {
  const menu = $('#countryMenu');
  const sortedCountries = [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const items = [{ code:'', name: i18n[state.lang].all_countries, icon:'globe' }, ...sortedCountries];
  
  menu.innerHTML = items.map(c => {
    const flag = c.code
      ? `<img src="https://flagcdn.com/w40/${c.code.toLowerCase()}.png" alt="" class="w-5 h-3 object-cover rounded-sm" loading="lazy">`
      : `<svg viewBox="0 0 24 24" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    const active = state.country === c.code ? 'active' : '';
    return `<li><button class="country-item ${active} flex items-center gap-3 w-full text-left font-mono text-xs" data-country-code="${c.code}">${flag}<span>${escapeHtml(c.name)}</span></button></li>`;
  }).join('');
}

function updateCountryButton() {
  const el = $('#countryBtnContent');
  if (!state.country) {
    el.innerHTML = `
      <svg viewBox="0 0 24 24" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      <span>${i18n[state.lang].all_countries}</span>
    `;
  } else {
    const c = COUNTRIES.find(x => x.code === state.country);
    el.innerHTML = `<img src="https://flagcdn.com/w40/${state.country.toLowerCase()}.png" alt="" class="w-4 h-3 object-cover rounded-sm"><span>${escapeHtml(c ? c.name : state.country)}</span>`;
  }
}

/* =========================================================
   EVENTOS GLOBALES
   ========================================================= */
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('#countryWrap')) $('#countryMenu').classList.add('hidden');

  const pageBtn = ev.target.closest('[data-page]');
  if (pageBtn) { loadRadios(parseInt(pageBtn.dataset.page)); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

  const countryItem = ev.target.closest('[data-country-code]');
  if (countryItem) {
    state.country = countryItem.dataset.countryCode;
    updateCountryButton(); $('#countryMenu').classList.add('hidden'); loadRadios(1); return;
  }

  const btn = ev.target.closest('[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {
    case 'play-radio': playRadioById(btn.dataset.radioId); break;
    case 'add-radio': {
      const r = state.radios.find(x => x.stationuuid === btn.dataset.radioId);
      if (!r) break;
      const iso3 = getIso3(r.country); const genre = r.tags ? r.tags.split(',')[0].trim() : iso3;
      addToList(r.url_resolved || r.url, r.name, genre, r.language || iso3, r.bitrate || 128); break;
    }
    case 'add-alt': addToList(btn.dataset.altUrl, btn.dataset.altName, btn.dataset.altGenre, btn.dataset.altLanguage, parseInt(btn.dataset.altBitrate, 10) || 128); break;
    case 'remove-item': removeFromList(btn.dataset.itemId); break;
  }
});

document.getElementById('radioSearch').addEventListener('input', debounce((e) => { state.radioQuery = e.target.value.trim(); loadRadios(1); }, 600));
document.getElementById('countryBtn').addEventListener('click', (e) => { e.stopPropagation(); $('#countryMenu').classList.toggle('hidden'); });

document.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key === 'ArrowUp') { e.preventDefault(); applyVolume(audio.volume + 0.05); }
  if (e.key === 'ArrowDown') { e.preventDefault(); applyVolume(audio.volume - 0.05); }
  if (e.key.toLowerCase() === 'm') btnMute.click();
});

document.getElementById('btnCopy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(buildSII()); flash(i18n[state.lang].toast_copied, 'green'); } catch { alert('Error'); }
});
document.getElementById('btnDownload').addEventListener('click', () => {
  const blob = new Blob([buildSII()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = 'live_streams.sii'; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500); flash(i18n[state.lang].toast_exported, 'green');
});
document.getElementById('btnClear').addEventListener('click', () => {
  if (!state.list.length) { flash(i18n[state.lang].toast_empty, 'neutral'); return; }
  state.list = []; saveList(); renderList(); flash(i18n[state.lang].toast_cleared, 'neutral');
});
document.getElementById('btnTheme').addEventListener('click', () => { setTheme(state.theme === 'dark' ? 'light' : 'dark'); });
document.getElementById('btnLang').addEventListener('click', () => { setLanguage(state.lang === 'es' ? 'en' : 'es'); });

/* =========================================================
   INIT
   ========================================================= */
function init() {
  const savedTheme = localStorage.getItem(LS_KEYS.THEME) || 'dark';
  const savedLang = localStorage.getItem(LS_KEYS.LANG) || 'es';
  const savedList = localStorage.getItem(LS_KEYS.LIST);
  
  if (savedList) {
    try { state.list = JSON.parse(savedList); } catch (e) { state.list = []; }
  }

  let savedV = parseFloat(localStorage.getItem(LS_KEYS.VOLUME));
  if (isNaN(savedV)) savedV = 0.6;
  audio.volume = Math.max(0, Math.min(1, savedV));
  audio.muted = localStorage.getItem(LS_KEYS.MUTED) === 'true';
  
  setTheme(savedTheme);
  setLanguage(savedLang);
  
  updateVolumeUI();
  updateCountryButton();
  renderCountryMenu();
  renderList();
  loadRadios(1);
}

document.addEventListener('DOMContentLoaded', init);