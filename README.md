# Jardines de Uleta Suites — Landing page

Hotel landing page construida con Vue 3, TypeScript y Vite.

## Stack

- **Vue 3** con `<script setup>` y Composition API
- **TypeScript**
- **Vite** como bundler
- **Vue Router** (ruta única `/`)
- **hls.js** para reproducción del vídeo hero en streaming HLS

## Estructura

```text
src/
├── assets/          # Estilos globales y fuente Questrial
├── components/
│   ├── booking/     # Widget de reserva (fechas, huéspedes, promo)
│   └── hero/        # Header con topbar, navbar y vídeo de fondo
├── composables/
│   ├── useBooking.ts    # Estado y lógica del formulario de reserva
│   └── useHeroVideo.ts  # Inicialización del stream HLS
├── router/          # Definición de rutas
└── views/
    └── HomeView.vue # Página principal (orquestadora)
```

## Puesta en marcha

```sh
npm install
npm run dev
```

## Otros comandos

| Comando              | Descripción                        |
| -------------------- | ---------------------------------- |
| `npm run build`      | Compila y minimiza para producción |
| `npm run type-check` | Comprobación de tipos con vue-tsc  |
| `npm run lint`       | Linting con ESLint + oxlint        |
