const translations = {
  en: {
    'page.title': 'HDR Testing',
    'display.statusLabel': 'Display status:',
    'display.infoTitle': 'Display information',
    'status.checking': 'Checking...',
    'status.supported': 'HDR Supported',
    'status.notSupported': 'HDR Not Supported',
    'status.checkError': 'Check error',
    'image.mainAlt': 'HDR image with high dynamic range',
    'image.formatLabel': 'Format:',
    'image.colorSpaceLabel': 'Color space:',
    'image.colorSpaceValue': 'Extended range',
    'comparison.title': 'HDR and SDR comparison',
    'comparison.description': 'Two images were captured in the same conditions, but one is saved with high dynamic range (HDR), while the other uses standard dynamic range (SDR). The difference is more visible on HDR-capable displays.',
    'comparison.hdrAlt': 'HDR shot with high dynamic range',
    'comparison.hdrTitle': 'HDR version',
    'comparison.hdrNote': 'Preserves highlight and shadow detail thanks to the wider brightness range.',
    'comparison.sdrAlt': 'SDR shot without high dynamic range',
    'comparison.sdrTitle': 'SDR version',
    'comparison.sdrNote': 'Loses detail in high-contrast scenes and looks less saturated.',
    'comparison.note': 'If you do not see a noticeable difference, your display or browser may not support HDR, or HDR may be disabled in system settings.',
    'demo.title': 'HDR demonstration',
    'demo.fullscreen': 'Full screen',
    'demo.exitFullscreen': 'Exit full screen',
    'demo.fullscreenAria': 'Open HDR demonstration in full screen',
    'demo.exitFullscreenAria': 'Exit HDR demonstration full screen',
    'demo.currentMode': 'Current mode:',
    'demo.hdrOn': 'HDR on',
    'demo.hdrOff': 'HDR off',
    'demo.nextChange': 'Next change in:',
    'demo.description': 'The images fade into each other every 10 seconds to show the difference when HDR is enabled.',
    'demo.hdrOffAlt': 'Image without HDR',
    'demo.hdrOnAlt': 'Image with HDR',
    'footer.photoAuthor': 'Author of the website and photos:',
    'footer.authorName': 'Evgeny Leukhin',
    'language.switcherLabel': 'Language:',
    'display.p3Support': 'P3 support',
    'display.rec2020Support': 'Rec2020 support',
    'display.dynamicRange': 'Dynamic range',
    'display.colorDepth': 'Color depth',
    'display.pixelDepth': 'Pixel depth',
    'display.screenResolution': 'Screen resolution',
    'display.mediaCapabilities': 'Media Capabilities API',
    'value.yes': 'Yes',
    'value.no': 'No',
    'value.unknown': 'Unknown',
    'value.apiNotSupported': 'API is not supported',
    'unit.bits': 'bits',
    'unit.secondsShort': 'sec'
  },
  ru: {
    'page.title': 'Тестирование HDR',
    'display.statusLabel': 'Статус дисплея:',
    'display.infoTitle': 'Информация о дисплее',
    'status.checking': 'Проверка...',
    'status.supported': 'HDR Поддерживается',
    'status.notSupported': 'HDR Не поддерживается',
    'status.checkError': 'Ошибка проверки',
    'image.mainAlt': 'HDR изображение с высоким динамическим диапазоном',
    'image.formatLabel': 'Формат:',
    'image.colorSpaceLabel': 'Цветовое пространство:',
    'image.colorSpaceValue': 'Расширенный диапазон',
    'comparison.title': 'Сравнение HDR и SDR',
    'comparison.description': 'Два изображения сняты в одинаковых условиях, но одно сохранено с расширенным динамическим диапазоном (HDR), а второе — в стандартном диапазоне (SDR). На дисплеях с поддержкой HDR разница будет заметнее.',
    'comparison.hdrAlt': 'HDR снимок с расширенным динамическим диапазоном',
    'comparison.hdrTitle': 'HDR версия',
    'comparison.hdrNote': 'Сохраняет детали в светах и тенях за счёт расширенного диапазона яркости.',
    'comparison.sdrAlt': 'SDR снимок без высокого динамического диапазона',
    'comparison.sdrTitle': 'SDR версия',
    'comparison.sdrNote': 'Теряет детали при высокой контрастности сцены, выглядит менее насыщенно.',
    'comparison.note': 'Если вы не видите заметной разницы, возможно, ваш дисплей или браузер не поддерживает HDR, либо функция отключена в настройках системы.',
    'demo.title': 'HDR демонстрация',
    'demo.fullscreen': 'На весь экран',
    'demo.exitFullscreen': 'Свернуть',
    'demo.fullscreenAria': 'Развернуть HDR демонстрацию на весь экран',
    'demo.exitFullscreenAria': 'Свернуть HDR демонстрацию',
    'demo.currentMode': 'Текущий режим:',
    'demo.hdrOn': 'HDR включено',
    'demo.hdrOff': 'HDR выключено',
    'demo.nextChange': 'Следующая смена через:',
    'demo.description': 'Изображения плавно сменяют друг друга каждые 10 секунд, чтобы показать разницу при включённом HDR.',
    'demo.hdrOffAlt': 'Изображение без HDR',
    'demo.hdrOnAlt': 'Изображение с HDR',
    'footer.photoAuthor': 'Автор сайта и фото:',
    'footer.authorName': 'Леухин Евгений',
    'language.switcherLabel': 'Язык:',
    'display.p3Support': 'Поддержка P3',
    'display.rec2020Support': 'Поддержка Rec2020',
    'display.dynamicRange': 'Динамический диапазон',
    'display.colorDepth': 'Глубина цвета',
    'display.pixelDepth': 'Глубина пикселя',
    'display.screenResolution': 'Разрешение экрана',
    'display.mediaCapabilities': 'Media Capabilities API',
    'value.yes': 'Да',
    'value.no': 'Нет',
    'value.unknown': 'Неизвестно',
    'value.apiNotSupported': 'API не поддерживается',
    'unit.bits': 'бит',
    'unit.secondsShort': 'сек'
  }
};

const savedLanguage = localStorage.getItem('preferredLanguage');
const browserLanguage = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
let currentLanguage = translations[savedLanguage] ? savedLanguage : browserLanguage;
let lastCapabilities = null;
let hdrDemoSecondsLeft = 0;
let hdrDemoActiveIndex = 0;

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyLocalization() {
  document.documentElement.lang = currentLanguage;
  document.title = t('page.title');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', t(element.dataset.i18nAlt));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
}

function updateLanguageButtons() {
  document.querySelectorAll('[data-language]').forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function setLanguage(language) {
  if (!translations[language] || currentLanguage === language) {
    return;
  }

  currentLanguage = language;
  localStorage.setItem('preferredLanguage', language);
  applyLocalization();
  updateLanguageButtons();
  updateHdrDemoState(hdrDemoActiveIndex);
  updateHdrDemoTimer(hdrDemoSecondsLeft || HDR_DEMO_INTERVAL_SECONDS);
  updateHdrDemoFullscreenButton();

  if (lastCapabilities) {
    updateDisplayInfo(lastCapabilities);
  }
}

function initLanguageSwitcher() {
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  updateLanguageButtons();
}

/**
 * Класс для определения возможностей HDR дисплея
 */
class HDRDetector {
  constructor() {
    this.capabilities = {};
  }

  /**
   * Проверка поддержки широкого цветового пространства P3
   */
  checkP3Support() {
    if (window.matchMedia) {
      return window.matchMedia('(color-gamut: p3)').matches;
    }
    return false;
  }

  /**
   * Проверка поддержки цветового пространства Rec2020
   */
  checkRec2020Support() {
    if (window.matchMedia) {
      return window.matchMedia('(color-gamut: rec2020)').matches;
    }
    return false;
  }

  /**
   * Проверка поддержки высокого динамического диапазона
   * (Новая спецификация CSS Media Queries Level 5)
   */
  checkDynamicRangeSupport() {
    if (window.matchMedia) {
      return window.matchMedia('(dynamic-range: high)').matches;
    }
    return false;
  }

  /**
   * Получение информации о глубине цвета
   */
  getColorDepth() {
    return {
      colorDepth: screen.colorDepth || t('value.unknown'),
      pixelDepth: screen.pixelDepth || t('value.unknown')
    };
  }

  /**
   * Получение разрешения экрана
   */
  getScreenResolution() {
    return {
      width: screen.width || t('value.unknown'),
      height: screen.height || t('value.unknown'),
      availWidth: screen.availWidth || t('value.unknown'),
      availHeight: screen.availHeight || t('value.unknown')
    };
  }

  /**
   * Проверка поддержки Media Capabilities API
   */
  async checkMediaCapabilities() {
    if ('mediaCapabilities' in navigator) {
      try {
        const decodingInfo = await navigator.mediaCapabilities.decodingInfo({
          type: 'image',
          colorSpace: 'p3',
          transferFunction: 'pq',
          hdrMetadataType: 'smpteSt2086'
        });
        return {
          supported: decodingInfo.supported,
          smooth: decodingInfo.smooth,
          powerEfficient: decodingInfo.powerEfficient
        };
      } catch (e) {
        return { supported: false, error: e.message };
      }
    }
    return { supported: false, error: t('value.apiNotSupported') };
  }

  /**
   * Основной метод для определения всех возможностей HDR
   */
  async detect() {
    const p3 = this.checkP3Support();
    const rec2020 = this.checkRec2020Support();
    const dynamicRange = this.checkDynamicRangeSupport();
    const colorDepth = this.getColorDepth();
    const resolution = this.getScreenResolution();
    const mediaCapabilities = await this.checkMediaCapabilities();

    this.capabilities = {
      p3,
      rec2020,
      dynamicRange,
      colorDepth,
      resolution,
      mediaCapabilities,
      // Без screen.colorDepth: на Windows часто 32 для обычного 8-bit SDR, это не HDR.
      hdrSupported: p3 || rec2020 || dynamicRange
    };

    return this.capabilities;
  }

  /**
   * Получение текстового описания статуса
   */
  getStatusText() {
    if (this.capabilities.hdrSupported) {
      return t('status.supported');
    }
    return t('status.notSupported');
  }

  /**
   * Получение класса для badge
   */
  getStatusClass() {
    if (this.capabilities.hdrSupported) {
      return 'success';
    }
    return 'error';
  }
}

let hdrDemoIntervalId = null;
const HDR_DEMO_INTERVAL = 10000;
const HDR_DEMO_INTERVAL_SECONDS = HDR_DEMO_INTERVAL / 1000;

/**
 * Форматирование значения для отображения
 */
function formatValue(value) {
  if (typeof value === 'boolean') {
    return value ? t('value.yes') : t('value.no');
  }
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value, null, 2);
  }
  return String(value);
}

/**
 * Создание элемента информации о дисплее
 */
function createInfoItem(label, value) {
  const item = document.createElement('div');
  item.className = 'status-item';
  item.innerHTML = `
    <div class="status-item-label">${label}</div>
    <div class="status-item-value">${formatValue(value)}</div>
  `;
  return item;
}

/**
 * Запуск плавного переключения изображений в HDR-демо
 */
function startHdrDemoAnimation() {
  if (hdrDemoIntervalId) {
    return;
  }

  const images = document.querySelectorAll('.hdr-demo-image');
  if (images.length < 2) {
    return;
  }

  hdrDemoActiveIndex = 0;
  hdrDemoSecondsLeft = HDR_DEMO_INTERVAL_SECONDS;
  updateHdrDemoState(hdrDemoActiveIndex);
  updateHdrDemoTimer(hdrDemoSecondsLeft);
  restartHdrDemoProgress();

  hdrDemoIntervalId = window.setInterval(() => {
    hdrDemoSecondsLeft -= 1;

    if (hdrDemoSecondsLeft <= 0) {
      images[hdrDemoActiveIndex].classList.remove('is-active');
      hdrDemoActiveIndex = (hdrDemoActiveIndex + 1) % images.length;
      images[hdrDemoActiveIndex].classList.add('is-active');
      updateHdrDemoState(hdrDemoActiveIndex);
      hdrDemoSecondsLeft = HDR_DEMO_INTERVAL_SECONDS;
      restartHdrDemoProgress();
    }

    updateHdrDemoTimer(hdrDemoSecondsLeft);
  }, 1000);
}

/**
 * Обновление подписи текущего состояния HDR в демонстрации
 */
function updateHdrDemoState(activeIndex) {
  const state = document.getElementById('hdr-demo-state-value');

  if (!state) {
    return;
  }

  const isHdrOn = activeIndex === 1;
  state.textContent = isHdrOn ? t('demo.hdrOn') : t('demo.hdrOff');
  state.className = `badge ${isHdrOn ? 'success' : 'error'}`;
}

/**
 * Обновление визуального таймера до следующей смены изображения
 */
function updateHdrDemoTimer(secondsLeft) {
  const timer = document.getElementById('hdr-demo-timer-value');

  if (timer) {
    timer.textContent = `${secondsLeft} ${t('unit.secondsShort')}`;
  }
}

/**
 * Перезапуск плавной анимации полосы прогресса
 */
function restartHdrDemoProgress() {
  const progress = document.getElementById('hdr-demo-timer-progress');

  if (!progress) {
    return;
  }

  progress.classList.remove('is-running');
  progress.style.width = '100%';
  void progress.offsetWidth;
  progress.style.width = '';
  progress.classList.add('is-running');
}

/**
 * Обновление подписи кнопки полноэкранного режима
 */
function updateHdrDemoFullscreenButton() {
  const button = document.getElementById('hdr-demo-fullscreen-button');
  const frame = document.getElementById('hdr-demo-frame');

  if (!button || !frame) {
    return;
  }

  const isFullscreen = document.fullscreenElement === frame;
  button.textContent = isFullscreen ? t('demo.exitFullscreen') : t('demo.fullscreen');
  button.setAttribute(
    'aria-label',
    isFullscreen ? t('demo.exitFullscreenAria') : t('demo.fullscreenAria')
  );
}

/**
 * Переключение полноэкранного режима HDR-демонстрации
 */
async function toggleHdrDemoFullscreen() {
  const frame = document.getElementById('hdr-demo-frame');

  if (!frame || !document.fullscreenEnabled) {
    return;
  }

  try {
    if (document.fullscreenElement === frame) {
      await document.exitFullscreen();
    } else {
      await frame.requestFullscreen();
    }
  } catch (error) {
    console.error('Ошибка при переключении полноэкранного режима:', error);
  }
}

/**
 * Выход из полноэкранного режима по клику на изображение
 */
async function exitHdrDemoFullscreenOnFrameClick() {
  const frame = document.getElementById('hdr-demo-frame');

  if (document.fullscreenElement !== frame) {
    return;
  }

  try {
    await document.exitFullscreen();
  } catch (error) {
    console.error('Ошибка при выходе из полноэкранного режима:', error);
  }
}

/**
 * Инициализация кнопки полноэкранного режима
 */
function initHdrDemoFullscreen() {
  const button = document.getElementById('hdr-demo-fullscreen-button');
  const frame = document.getElementById('hdr-demo-frame');

  if (!button || !frame) {
    return;
  }

  if (!document.fullscreenEnabled || !frame.requestFullscreen) {
    button.hidden = true;
    return;
  }

  button.addEventListener('click', toggleHdrDemoFullscreen);
  frame.addEventListener('click', exitHdrDemoFullscreenOnFrameClick);
  document.addEventListener('fullscreenchange', updateHdrDemoFullscreenButton);
  updateHdrDemoFullscreenButton();
}

/**
 * Остановка переключения изображений в HDR-демо
 */
function stopHdrDemoAnimation() {
  if (!hdrDemoIntervalId) {
    return;
  }

  window.clearInterval(hdrDemoIntervalId);
  hdrDemoIntervalId = null;

  const images = document.querySelectorAll('.hdr-demo-image');
  images.forEach((image, index) => {
    image.classList.toggle('is-active', index === 0);
  });
  hdrDemoActiveIndex = 0;
  hdrDemoSecondsLeft = HDR_DEMO_INTERVAL_SECONDS;
  updateHdrDemoState(0);
  updateHdrDemoTimer(HDR_DEMO_INTERVAL_SECONDS);
  restartHdrDemoProgress();
}

/**
 * Показ HDR-демо только на дисплеях с поддержкой HDR
 */
function updateHdrDemo(capabilities) {
  const demo = document.getElementById('hdr-demo');

  if (!demo) {
    return;
  }

  demo.hidden = !capabilities.hdrSupported;

  if (capabilities.hdrSupported) {
    startHdrDemoAnimation();
  } else {
    stopHdrDemoAnimation();
  }
}

/**
 * Обновление интерфейса с информацией о дисплее
 */
function updateDisplayInfo(capabilities) {
  const container = document.getElementById('display-info');
  const badge = document.getElementById('hdr-status-badge');
  lastCapabilities = capabilities;
  
  // Очистка контейнера
  container.innerHTML = '';

  // Обновление badge
  const statusText = capabilities.hdrSupported ? t('status.supported') : t('status.notSupported');
  const statusClass = capabilities.hdrSupported ? 'success' : 'error';
  badge.textContent = statusText;
  badge.className = `badge ${statusClass}`;

  // Добавление информации
  container.appendChild(createInfoItem(t('display.p3Support'), capabilities.p3));
  container.appendChild(createInfoItem(t('display.rec2020Support'), capabilities.rec2020));
  container.appendChild(createInfoItem(t('display.dynamicRange'), capabilities.dynamicRange));
  container.appendChild(createInfoItem(t('display.colorDepth'), `${capabilities.colorDepth.colorDepth} ${t('unit.bits')}`));
  container.appendChild(createInfoItem(t('display.pixelDepth'), `${capabilities.colorDepth.pixelDepth} ${t('unit.bits')}`));
  container.appendChild(createInfoItem(t('display.screenResolution'), `${capabilities.resolution.width} × ${capabilities.resolution.height}`));
  
  if (capabilities.mediaCapabilities.supported !== undefined) {
    container.appendChild(createInfoItem(t('display.mediaCapabilities'), capabilities.mediaCapabilities.supported));
  }

  updateHdrDemo(capabilities);
}

/**
 * Инициализация при загрузке страницы
 */
async function init() {
  const detector = new HDRDetector();
  applyLocalization();
  initLanguageSwitcher();
  initHdrDemoFullscreen();
  
  try {
    const capabilities = await detector.detect();
    updateDisplayInfo(capabilities);
    
    // Логирование в консоль для отладки
    console.log('HDR Capabilities:', capabilities);
  } catch (error) {
    console.error('Ошибка при определении HDR:', error);
    document.getElementById('hdr-status-badge').textContent = t('status.checkError');
    document.getElementById('hdr-status-badge').className = 'badge error';
  }
}

// Запуск при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Обновление при изменении ориентации или размера окна
window.addEventListener('resize', () => {
  const detector = new HDRDetector();
  detector.detect().then(updateDisplayInfo);
});

