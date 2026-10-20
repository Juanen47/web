# jelopez.link

Web personal de Juan Enrique López Monteagudo. Astro estático desplegado en Cloudflare Pages (cada push a `master`).

## Estructura

- `src/i18n/content.ts`: todos los textos de la portada en español e inglés, y las rutas equivalentes de cada idioma.
- `src/layouts/Base.astro`: `<head>` común (SEO, Open Graph, hreflang, JSON-LD), navegación y pie.
- `src/components/`: `Home`, `Site` (página «Este sitio») y `Privacy`, que reciben el idioma como prop.
- `src/pages/`: rutas en español (`/`, `/este-sitio/`, `/privacidad/`) y en inglés bajo `/en/`.
- `public/_headers`: cabeceras HTTP de Cloudflare Pages (CSP, HSTS, caché). La CSP no permite scripts inline.
- `public/og.png`: imagen para compartir en redes (1200×630).

## Comandos

| Comando           | Acción                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor local en `localhost:4321`       |
| `npm run build`   | Genera el sitio en `./dist/`             |
| `npm run preview` | Sirve el build localmente                |
