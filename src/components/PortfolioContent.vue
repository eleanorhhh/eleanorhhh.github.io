<template>
  <section id="projects" class="py-20 px-6 bg-bg-paper">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-6xl font-black mb-16 uppercase tracking-tighter italic flex flex-col items-center">
        <span class="bg-brand-orange text-white px-4 border-4 border-black shadow-neo">Featured</span>
        <span class="block mt-6 text-black">Side Projects</span>
      </h2>

      <div class="flex flex-col items-center gap-12">

        <div class="max-w-4xl w-full border-4 border-black bg-white shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all">
          <div class="p-4 border-b-4 border-black bg-brand-blue text-white flex justify-between items-center">
            <span class="font-bold uppercase tracking-widest text-sm">Web App / Full-stack</span>
            <span class="text-xs font-black">2026</span>
          </div>

          <div class="p-8 flex flex-col items-center text-center">
            <h3 class="text-3xl font-black mb-4 uppercase text-black">Notion-like System</h3>
            <p class="text-gray-700 font-bold leading-relaxed mb-6 max-w-2xl">
              結合 Vue 3 與 Django 架構，開發具備 Tiptap 核心的即時文件編輯器。
              重點在於互動回饋機制（如 Slash Commands），將資工的邏輯底蘊轉化為流暢的操作體驗。
            </p>
            <div class="flex gap-2 flex-wrap mb-8 justify-center">
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">Vue.js</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">Django</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">Tiptap</span>
            </div>
            <a href="https://github.com/eleanorhhh/tiptap.git" target="_blank"
               class="inline-flex items-center justify-center gap-2 bg-black text-white font-black py-4 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,92,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-full md:w-max">
              <span>VIEW ON GITHUB</span>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div class="max-w-4xl w-full border-4 border-black bg-white shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all">
          <div class="p-4 border-b-4 border-black bg-brand-blue text-white flex justify-between items-center">
            <span class="font-bold uppercase tracking-widest text-sm">Web App / Full-stack</span>
            <span class="text-xs font-black text-white">2026</span>
          </div>

          <div class="p-8 flex flex-col items-center text-center">
            <h3 class="text-3xl font-black mb-4 uppercase text-black">Travel Planner Full-Stack</h3>
            <p class="text-gray-700 font-bold leading-relaxed mb-6 max-w-2xl">
            協作開發旅遊規劃系統，運用 FastAPI 非同步架構高效實作多人行程編輯 API，提升系統併發處理能力。</p>
            <div class="flex gap-2 flex-wrap mb-8 justify-center">
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">Vue.js</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">FastAPI</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-black text-xs text-black">MySQL</span>
            </div>
            <a href="https://github.com/bellayang9455/travel-backend-fastapi-mysql.git" target="_blank"
               class="inline-flex items-center justify-center gap-2 bg-black text-white font-black py-4 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,92,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-full md:w-max">
              <span>VIEW ON GITHUB</span>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

      </div> </div>
  </section>
</template>
