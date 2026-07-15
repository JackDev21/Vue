<template>
  <footer class="mt-[clamp(2.4rem,5vw,4.3rem)] text-[#101f2f]">
    <section class="bg-[#e3e3e3]">
      <div
        class="mx-auto w-[min(1680px,calc(100%-2.8rem))] grid grid-cols-4 max-[1080px]:grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-[clamp(2rem,3.2vw,3.7rem)] py-[clamp(2.6rem,5vw,4rem)]"
      >
        <article class="border-t border-[#2d7a22] pt-[1.1rem]">
          <header class="flex items-center justify-between gap-3">
            <h4 class="m-0 text-[clamp(1.05rem,1.45vw,1.68rem)] font-medium tracking-[-0.01em]">
              Dirección
            </h4>
            <span aria-hidden="true" class="inline-block w-[1.85rem] h-[1.85rem] text-[#2d7a22]">
              <svg
                viewBox="0 0 24 24"
                class="w-full h-full"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
              >
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </span>
          </header>
          <p
            class="mt-[1.35rem] mb-0 max-w-[34ch] text-[clamp(0.98rem,1.08vw,1.1rem)] leading-normal"
          >
            Avenida del Lago 25, 28042 Vitoria-Gasteiz, Álava, España
          </p>
        </article>

        <article class="border-t border-[#2d7a22] pt-[1.1rem]">
          <header class="flex items-center justify-between gap-3">
            <h4 class="m-0 text-[clamp(1.05rem,1.45vw,1.68rem)] font-medium tracking-[-0.01em]">
              Contacto
            </h4>
            <span aria-hidden="true" class="inline-block w-[1.85rem] h-[1.85rem] text-[#2d7a22]">
              <svg
                viewBox="0 0 24 24"
                class="w-full h-full"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
              >
                <path
                  d="M6.7 3.3 9.8 6.4c.5.5.6 1.3.2 1.9L8.5 10c1 2.1 2.7 3.8 4.8 4.8l1.7-1.5c.6-.5 1.4-.4 1.9.2l3.1 3.1c.6.6.6 1.5 0 2.1l-1.4 1.4c-.8.8-2 .9-3 .4A22 22 0 0 1 3.2 8.7c-.5-1-.4-2.2.4-3L5 3.3c.6-.6 1.5-.6 1.7 0Z"
                />
              </svg>
            </span>
          </header>
          <p
            class="mt-[1.35rem] mb-0 max-w-[34ch] text-[clamp(0.98rem,1.08vw,1.1rem)] leading-normal"
          >
            Teléfono: +34 910 00 11 22<br />
            reservas@hoteldemo.com<br />
            eventos@hoteldemo.com<br />
            Ponte en contacto con nuestro equipo
          </p>
        </article>

        <article class="border-t border-[#2d7a22] pt-[1.1rem]">
          <header class="flex items-center justify-between gap-3">
            <h4 class="m-0 text-[clamp(1.05rem,1.45vw,1.68rem)] font-medium tracking-[-0.01em]">
              Cómo llegar
            </h4>
            <span aria-hidden="true" class="inline-block w-[1.85rem] h-[1.85rem] text-[#2d7a22]">
              <svg
                viewBox="0 0 24 24"
                class="w-full h-full"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
              >
                <path d="m21 3-8 18-2.2-7.8L3 11 21 3Z" />
              </svg>
            </span>
          </header>
          <p
            class="mt-[1.35rem] mb-0 max-w-[34ch] text-[clamp(0.98rem,1.08vw,1.1rem)] leading-normal"
          >
            Te indicamos la mejor ruta para llegar a Hotel Demo, Álava
          </p>
        </article>

        <article class="border-t border-[#2d7a22] pt-[1.1rem]">
          <header class="flex items-center justify-between gap-3">
            <h4 class="m-0 text-[clamp(1.05rem,1.45vw,1.68rem)] font-medium tracking-[-0.01em]">
              Síguenos en ...
            </h4>
            <span aria-hidden="true" class="inline-block w-[1.85rem] h-[1.85rem] text-[#2d7a22]">
              <svg
                viewBox="0 0 24 24"
                class="w-full h-full"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
              >
                <circle cx="6" cy="12" r="2" fill="currentColor" />
                <circle cx="18" cy="6" r="2" fill="currentColor" />
                <circle cx="18" cy="18" r="2" fill="currentColor" />
                <path d="M8 11 16 7M8 13l8 4" />
              </svg>
            </span>
          </header>
          <nav class="mt-[1.35rem] flex items-center gap-4" aria-label="Redes sociales">
            <a
              href="https://www.facebook.com/jardinesdeuleta"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer noopener"
              class="grid w-[1.45rem] h-[1.45rem] place-items-center text-[#0b0f14] hover:text-[#2d7a22]"
            >
              <svg viewBox="0 0 24 24" class="w-full h-full fill-current" aria-hidden="true">
                <path
                  d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z"
                />
              </svg>
            </a>
            <a
              href="https://x.com/JardinesUleta"
              aria-label="X"
              target="_blank"
              rel="noreferrer noopener"
              class="grid w-[1.45rem] h-[1.45rem] place-items-center text-[#0b0f14] hover:text-[#2d7a22]"
            >
              <svg viewBox="0 0 24 24" class="w-full h-full fill-current" aria-hidden="true">
                <path
                  d="m4 4 6.5 8.7L4.2 20h2.2l5.1-5.9L16.1 20H20l-6.8-9.1L19 4h-2.2l-4.7 5.4L8 4H4Z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jardinesdeuleta/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
              class="grid w-[1.45rem] h-[1.45rem] place-items-center text-[#0b0f14] hover:text-[#2d7a22]"
            >
              <svg viewBox="0 0 24 24" class="w-full h-full fill-current" aria-hidden="true">
                <path
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4.7A4.3 4.3 0 1 0 12 16.3 4.3 4.3 0 0 0 12 7.7Zm0 1.8A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5.1-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hotel-jardines-de-uleta-suites/?originalSubdomain=es"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
              class="grid w-[1.45rem] h-[1.45rem] place-items-center text-[#0b0f14] hover:text-[#2d7a22]"
            >
              <svg viewBox="0 0 24 24" class="w-full h-full fill-current" aria-hidden="true">
                <path
                  d="M4.7 3.8A1.9 1.9 0 1 1 2.8 5.7a1.9 1.9 0 0 1 1.9-1.9ZM3.3 8h2.8v12H3.3V8Zm4.7 0h2.7v1.6h.1c.4-.7 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.8V20h-2.8v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V20H8V8Z"
                />
              </svg>
            </a>
          </nav>
        </article>
      </div>
    </section>

    <section class="bg-[#2c7d22] text-white mb-[clamp(1.1rem,2.2vw,1.9rem)]">
      <div class="mx-auto w-[min(1680px,calc(100%-2.8rem))]">
        <div
          aria-label="Sellos de calidad y certificaciones"
          class="grid grid-cols-7 max-[1080px]:grid-cols-4 max-sm:grid-cols-2 items-center gap-[2.2rem] max-[1080px]:gap-6 max-sm:gap-4 py-[clamp(2rem,4vw,2.8rem)]"
        >
          <img
            class="justify-self-center w-[min(100%,10.3rem)] h-[5.2rem] object-contain object-center"
            src="https://hoteljardinesdeuleta.com/wp-content/uploads/2024/11/Logo-Etikoa-Turismo-Jardines-de-Uleta.png"
            alt="Sello Etikoa Turismo Euskadi"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,8rem)] h-[5.2rem] object-contain object-center"
            src="https://hoteljardinesdeuleta.com/wp-content/uploads/2024/11/secundario_Compromiso_CT-removebg-preview.png"
            alt="Compromiso de Calidad Turística"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,7.6rem)] h-[5.2rem] object-contain object-center"
            src="https://hoteljardinesdeuleta.com/wp-content/uploads/2024/11/Logo-TurismoFamiliarEUSKADI_V.png"
            alt="Turismo Familiar Euskadi"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,5.8rem)] h-[5.8rem] object-contain object-center"
            src="https://www.hoteljardinesdeuleta.com/wp-content/uploads/2024/11/logo-ecostar-jardines-de-uleta.avif"
            alt="Sello Ecostar Jardines de Uleta"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,8.4rem)] h-[5.2rem] object-contain object-center"
            src="https://www.hoteljardinesdeuleta.com/wp-content/uploads/2022/11/BIKEFRIENDLY-533x210.png"
            alt="Sello Bikefriendly"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,4.35rem)] h-[5.2rem] object-contain object-center brightness-0 invert"
            src="https://www.hoteljardinesdeuleta.com/wp-content/uploads/2022/11/pet-friendly-1.png"
            alt="Alojamiento pet friendly"
            loading="lazy"
            decoding="async"
          />
          <img
            class="justify-self-center w-[min(100%,4.35rem)] h-[5.2rem] object-contain object-center brightness-0 invert"
            src="https://hoteljardinesdeuleta.com/wp-content/uploads/2024/11/adaptado.png"
            alt="Alojamiento adaptado"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          class="border-t border-white/16 py-[1.05rem_1.25rem] flex items-center flex-nowrap max-[1080px]:flex-wrap overflow-x-auto max-[1080px]:overflow-x-visible gap-[1.6rem] text-[0.88rem] max-sm:text-[0.76rem] leading-[1.45] font-questrial font-normal"
        >
          <span class="whitespace-nowrap flex-none"
            >Copyright 2026 HOTEL &amp; CATERING JARDINES DE ULETA</span
          >
          <a
            class="whitespace-nowrap flex-none hover:underline"
            href="https://www.hoteljardinesdeuleta.com/aviso-legal"
            target="_blank"
            rel="noreferrer noopener"
            >Aviso Legal</a
          >
          <a
            class="whitespace-nowrap flex-none hover:underline"
            href="https://www.hoteljardinesdeuleta.com/politica-de-privacidad"
            target="_blank"
            rel="noreferrer noopener"
            >Política de privacidad</a
          >
          <a
            class="whitespace-nowrap flex-none hover:underline"
            href="https://www.hoteljardinesdeuleta.com/politica-de-cookies"
            target="_blank"
            rel="noreferrer noopener"
            >Cookies</a
          >
          <a
            class="whitespace-nowrap flex-none hover:underline"
            href="https://altiplaconsulting.com/"
            target="_blank"
            rel="noreferrer noopener"
            >Diseño y programación Altipla Consulting</a
          >
          <a
            class="whitespace-nowrap flex-none hover:underline"
            href="https://millenium-soft.com/"
            target="_blank"
            rel="noreferrer noopener"
            >PMS: Millenium Soft</a
          >
          <a
            class="whitespace-nowrap flex-none inline-flex items-center gap-1.5 hover:underline"
            href="#"
          >
            <img
              class="w-[0.95rem] h-[0.95rem] block"
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1f8.svg"
              alt="Bandera de España"
            />
            <span>Español</span>
          </a>
          <a
            class="whitespace-nowrap flex-none inline-flex items-center gap-1.5 hover:underline"
            href="#"
          >
            <img
              class="w-[0.95rem] h-[0.95rem] block"
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ec-1f1e7.svg"
              alt="Bandera de Reino Unido"
            />
            <span>English</span>
          </a>
          <a class="whitespace-nowrap flex-none font-bold hover:underline" href="#">Mi Reserva</a>
        </div>
      </div>
    </section>
  </footer>
</template>
