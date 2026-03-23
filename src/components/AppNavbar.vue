<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const navLinks = [
  { name: '關於我', href: '#about' },
  { name: '作品展示', href: '#projects' },
  { name: '聯絡資訊', href: '#contact' }
]
</script>

<template>
  <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex-shrink-0 font-bold text-xl tracking-tighter">
          ELEANOR<span class="text-blue-600">.</span>
        </div>

        <div class="hidden md:flex space-x-8">
          <a v-for="link in navLinks" :key="link.name" :href="link.href"
             class="text-sm font-medium text-gray-500 hover:text-black transition-colors">
            {{ link.name }}
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 focus:outline-none p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-gray-100">
      <div class="px-4 pt-2 pb-6 space-y-2">
        <a v-for="link in navLinks" :key="link.name" :href="link.href"
           @click="isMenuOpen = false"
           class="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
