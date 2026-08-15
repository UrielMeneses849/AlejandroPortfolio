# Portafolio de Alejandro García

Portafolio personal de Alejandro García: del oficio gastronómico al desarrollo de software. Está construido con React, TypeScript y Vite.

## Desarrollo local

Requiere Node.js 22 o superior.

```bash
npm ci
npm run dev
```

Para crear el sitio estático de producción:

```bash
npm run build
```

El resultado queda en `dist/`.

## Publicar en GitHub Pages

El repositorio ya incluye el flujo de GitHub Actions en `.github/workflows/deploy-pages.yml`. Cada `push` a `main` ejecuta las comprobaciones, genera el sitio y lo publica.

Después de subir el repositorio a GitHub:

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Haz `push` a la rama `main` o ejecuta el flujo manualmente desde la pestaña **Actions**.

Si el repositorio se llama `AlePortfolio`, el sitio se publicará en `https://<usuario>.github.io/AlePortfolio/`. La configuración de Vite calcula esa ruta automáticamente durante el despliegue. Para un repositorio llamado `<usuario>.github.io`, usa la raíz del dominio.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo. |
| `npm run build` | Comprueba tipos y crea la versión de producción. |
| `npm run lint` | Ejecuta las reglas de calidad. |
| `npm run preview` | Sirve localmente el resultado de `dist/`. |
