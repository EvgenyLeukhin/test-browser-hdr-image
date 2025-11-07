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
      colorDepth: screen.colorDepth || 'Неизвестно',
      pixelDepth: screen.pixelDepth || 'Неизвестно'
    };
  }

  /**
   * Получение разрешения экрана
   */
  getScreenResolution() {
    return {
      width: screen.width || 'Неизвестно',
      height: screen.height || 'Неизвестно',
      availWidth: screen.availWidth || 'Неизвестно',
      availHeight: screen.availHeight || 'Неизвестно'
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
    return { supported: false, error: 'API не поддерживается' };
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
      // HDR считается поддерживаемым, если есть хотя бы одна из проверок
      hdrSupported: p3 || rec2020 || dynamicRange || (colorDepth.colorDepth >= 30)
    };

    return this.capabilities;
  }

  /**
   * Получение текстового описания статуса
   */
  getStatusText() {
    if (this.capabilities.hdrSupported) {
      return 'HDR Поддерживается';
    }
    return 'HDR Не поддерживается';
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

/**
 * Форматирование значения для отображения
 */
function formatValue(value) {
  if (typeof value === 'boolean') {
    return value ? 'Да' : 'Нет';
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
 * Обновление интерфейса с информацией о дисплее
 */
function updateDisplayInfo(capabilities) {
  const container = document.getElementById('display-info');
  const badge = document.getElementById('hdr-status-badge');
  
  // Очистка контейнера
  container.innerHTML = '';

  // Обновление badge
  const statusText = capabilities.hdrSupported ? 'HDR Поддерживается' : 'HDR Не поддерживается';
  const statusClass = capabilities.hdrSupported ? 'success' : 'error';
  badge.textContent = statusText;
  badge.className = `badge ${statusClass}`;

  // Добавление информации
  container.appendChild(createInfoItem('Поддержка P3', capabilities.p3));
  container.appendChild(createInfoItem('Поддержка Rec2020', capabilities.rec2020));
  container.appendChild(createInfoItem('Динамический диапазон', capabilities.dynamicRange));
  container.appendChild(createInfoItem('Глубина цвета', `${capabilities.colorDepth.colorDepth} бит`));
  container.appendChild(createInfoItem('Глубина пикселя', `${capabilities.colorDepth.pixelDepth} бит`));
  container.appendChild(createInfoItem('Разрешение экрана', `${capabilities.resolution.width} × ${capabilities.resolution.height}`));
  
  if (capabilities.mediaCapabilities.supported !== undefined) {
    container.appendChild(createInfoItem('Media Capabilities API', capabilities.mediaCapabilities.supported));
  }
}

/**
 * Инициализация при загрузке страницы
 */
async function init() {
  const detector = new HDRDetector();
  
  try {
    const capabilities = await detector.detect();
    updateDisplayInfo(capabilities);
    
    // Логирование в консоль для отладки
    console.log('HDR Capabilities:', capabilities);
  } catch (error) {
    console.error('Ошибка при определении HDR:', error);
    document.getElementById('hdr-status-badge').textContent = 'Ошибка проверки';
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

