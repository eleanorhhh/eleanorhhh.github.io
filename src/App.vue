<template>

  <AppNavbar/>
  <AboutSection/>
  <!-- 主要作品集組件 -->
  <PortfolioContent
    :is-dark="isDark"
    @toggle-theme="toggleTheme"
  />
  <ContactSection/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PortfolioContent from './components/PortfolioContent.vue'
import AppNavbar from './components/AppNavbar.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-theme', isDark.value)
}
</script>

<style>
/* 這裡可以放一些全域重置 (Reset) CSS */
body {
  margin: 0;
  padding: 0;
}
</style>
