<template>
  <!-- 引入 NES.css (只在這個組件生效時載入) -->
  <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
  <transition name="fade">
  <div v-if="isVisible" class="retro-fullscreen-overlay">
    <!-- 使用 NES.css 的黑暗模式容器 -->
    <div class="nes-container is-dark with-title login-box">
      <p class="title">System Boot</p>

      <div class="terminal-content">
        <p class="nes-text is-success">SYSTEM v1.0.24-stable</p>
        <br />
        <p>Welcome to Eleanor's Website <span class="blink-cursor">█</span></p>
      </div>

      <!-- NES 風格的進度條 -->
      <progress class="nes-progress is-success" value="80" max="100"></progress>
    </div>
  </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(true)

// 模擬載入完成後關閉動畫 (例如 3 秒後)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 3000)
})
</script>

<style scoped>
/* 確保字體有套用到 */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* 強制全螢幕並置中，這可以解決你原本蓋不住側邊欄的問題 */
.retro-fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 9999; /* 確保層級在最上層 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
}

/* 讓容器有一點寬度限制，看起來更像對話框 */
.login-box {
  min-width: 320px;
  max-width: 600px;
  width: 90%;
}

.terminal-content {
  text-align: left;
  line-height: 1.8;
  font-size: 0.8rem;
  margin-bottom: 2rem;
}

/* 游標閃爍動畫 */
.blink-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* 微調進度條與文字的間距 */
progress {
  margin-top: 1.5rem;
  height: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out; /* 0.8秒的平滑過渡，你可以自己微調時間 */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* 讓透明度降到 0 */
}
</style>


