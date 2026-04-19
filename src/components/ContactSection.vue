<script setup lang="ts">
import { ref } from 'vue'

const email = 'tinafa3222@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true

    // 2 秒後恢復原狀
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('無法複製 Email', err)
  }
}
</script>

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
          @click="copyEmail"
          class="bg-brand-yellow text-black border-4 border-black p-6 shadow-neo flex items-center justify-center gap-4 hover:rotate-2 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <div v-if="!copied" class="flex items-center gap-4">
            <span class="text-2xl font-black">E-MAIL</span>
            <span class="text-sm font-bold underline">{{ email }}</span>
          </div>
          <div v-else class="flex items-center gap-2">
            <span class="text-2xl font-black uppercase">Copied!</span>
            <span class="text-xl">✨</span>
          </div>
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
.shadow-neo {
  transition: all 0.2s ease;
}
</style>
