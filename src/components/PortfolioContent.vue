<template>
  <section class="p-8 bg-bg-paper">
    <h2 class="text-6xl font-black mb-12 uppercase tracking-tighter italic">
      <span class="bg-brand-orange text-white px-4 border-4 border-black shadow-neo">Featured</span>
      <span class="block mt-2 text-black">Works</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2 border-4 border-black bg-white shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all">
        <div class="p-4 border-b-4 border-black bg-brand-blue text-white flex justify-between items-center">
          <span class="font-bold uppercase">Web App / Full-stack</span>
          <span class="text-xs">2026</span>
        </div>
        <div class="p-6 flex flex-col lg:flex-row gap-6">
          <div class="lg:w-1/2">
            <h3 class="text-3xl font-black mb-4">Notion-like Document System</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              結合 Vue 3 與 Django 架構，開發具備 Tiptap 核心的即時文件編輯器。
              重點在於**互動回饋機制**（如 Slash Commands），將資工的邏輯底蘊轉化為流暢的操作體驗。
            </p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-bold text-xs">Vue.js</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-bold text-xs">Django</span>
              <span class="px-3 py-1 bg-brand-yellow border-2 border-black font-bold text-xs">Tiptap</span>
            </div>
          </div>
          <div class="lg:w-1/2 bg-gray-200 border-4 border-black aspect-video flex items-center justify-center">
             <span class="text-gray-500 font-bold">[ Project Preview ]</span>
          </div>
        </div>
      </div>

      <div class="border-4 border-black bg-brand-yellow shadow-neo p-6 flex flex-col justify-between">
        <h3 class="text-2xl font-black italic underline uppercase">Frontend Skills</h3>
        <ul class="font-bold space-y-2 mt-4">
          <li>✦ Tailwind CSS / CSS Animation</li>
          <li>✦ TypeScript Mastery</li>
          <li>✦ UI Interaction Logic</li>
        </ul>
        <div class="mt-6 p-4 bg-white border-2 border-black">
          <p class="text-sm font-bold text-center">讓程式不僅是邏輯，更是能被感知的設計。</p>
        </div>
      </div>
    </div>
  </section>
</template>
