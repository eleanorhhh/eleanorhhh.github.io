<template>
  <section id="contact" class="py-20 px-6 bg-bg-paper">
    <div class="max-w-4xl mx-auto text-center">

      <h2 class="text-6xl font-black mb-16 uppercase tracking-tighter italic">
        <span class="bg-brand-blue text-white px-4 border-4 border-black shadow-neo">Let's</span>
        <span class="block mt-4 text-black">Connect</span>
      </h2>

      <div class="bg-white border-4 border-black p-10 shadow-neo relative mb-12">
        <p class="text-2xl font-bold mb-8 text-gray-800">
          目前正在尋找實習與交流機會，<br class="hidden md:block" />
          如果你對我的作品有興趣，歡迎直接聯絡我！
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://github.com/eleanorhhh"
          target="_blank"
          class="bg-brand-orange text-white border-4 border-black p-6 shadow-neo flex items-center justify-center gap-4 hover:-rotate-2 transition-transform"
        >
          <span class="text-2xl font-black">GITHUB</span>
          <span class="text-sm font-bold underline">@eleanorhhh</span>
        </a>

        <button
          class="bg-white text-black border-4 border-black p-6 shadow-neo flex items-center justify-center gap-4 hover:rotate-2 transition-transform"
        >
          <span class="text-2xl font-black">E-MAIL</span>
          <span class="text-sm font-bold underline">tinafa3222@gmail.com</span>
        </button>
      </div>

      <footer class="mt-20 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-black text-lg">© 2026 ELEANOR — BUILT WITH VUE & TAILWIND</p>
        <div class="flex gap-4">
          <span class="w-4 h-4 bg-brand-blue border-2 border-black rounded-full"></span>
          <span class="w-4 h-4 bg-brand-orange border-2 border-black rounded-full"></span>
          <span class="w-4 h-4 bg-brand-yellow border-2 border-black rounded-full"></span>
        </div>
      </footer>

    </div>
  </section>
</template>

<style scoped>
/* 讓整體陰影在懸停時更有動感 */
.shadow-neo {
  transition: all 0.2s ease;
}
</style>
