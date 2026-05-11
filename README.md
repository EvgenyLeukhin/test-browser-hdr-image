# test-browser-hdr-image

Demo: [https://evgenyleukhin.github.io/test-browser-hdr-image/](https://evgenyleukhin.github.io/test-browser-hdr-image/)

HDR-Image: [https://evgenyleukhin.github.io/test-browser-hdr-image/hdr-image.jpg](image-link)

## Публикация

Краткий план выкладки статики на **любой удалённый сервер** (не только GitHub Pages).

### TODO

- [ ] **Собрать проект** — `yarn build` или `npm run build`. Готовые файлы — в каталоге `dist/`.
- [ ] **Задать публичный URL сайта** — домен и путь, где откроется страница (например `https://example.com/` или `https://example.com/hdr/`).
- [ ] **Обновить `vite.config.js`** — константы `siteOrigin` и `repoBase`:
  - корень домена: например `siteOrigin: 'https://example.com'`, `repoBase: '/'`;
  - подкаталог: например `repoBase: '/hdr/'` (со слэшами, как в реальном URL).
  После смены — снова выполнить `yarn build`, чтобы плагин подставил верный **og:image** в собранный HTML.
- [ ] **Обновить `src/index.html`** — все абсолютные ссылки с `github.io` / старым путём:
  - `link rel="canonical"`;
  - `og:url`, `og:image`, `twitter:image`;
  - блок JSON-LD (`@id`, `url`, `isPartOf` и т.д.).
  Затем снова `yarn build`.
- [ ] **(По желанию) `package.json`** — поле `homepage` заменить на финальный URL (для документации, на сборку не влияет).
- [ ] **Залить на сервер содержимое `dist/`** — скопировать **все файлы из `dist/`** в корень сайта или в нужную подпапку веб-сервера (`index.html`, `assets/`, favicon’ы, `site.webmanifest` и т.д.). Node.js на сервере не нужен.
- [ ] **Проверить веб-сервер** — отдаётся `index.html` по корневому URL; для статики достаточно обычной конфигурации nginx / Apache и желательно HTTPS.

### Локальная проверка сборки

```bash
yarn build && yarn serve
```

Откройте `http://localhost:4173/` — должны подтянуться стили и скрипты (в сборке используются относительные пути к `assets/`).

### Примечание

`public/site.webmanifest` использует относительные пути (`./`) — при той же структуре каталогов на сервере менять его обычно не требуется.
