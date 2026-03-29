<template>
  <Transition name="pixel-fade">
    <div v-if="isVisible" class="fixed inset-0 w-screen h-screen z-[9999] bg-[#0d1117] flex flex-col items-center justify-center">

      <div class="scanlines absolute inset-0 pointer-events-none"></div>

      <div class="relative mb-12">
        <div class="character-sprite text-8xl filter drop-shadow-[0_0_15px_rgba(56,239,125,0.5)]">
          🏃‍♂️
        </div>
        <div class="h-2 w-16 bg-black/40 rounded-full blur-md mx-auto mt-2"></div>
      </div>

      <div class="w-full max-w-md px-6 font-mono z-10">
        <div class="flex items-center space-x-2 text-[#3fb950] mb-2">
          <span class="text-xs bg-[#238636] text-white px-1 rounded">SYSTEM</span>
          <span class="text-sm opacity-80">v1.0.24-stable</span>
        </div>

        <div class="terminal-box bg-[#161b22] border-2 border-[#30363d] p-4 rounded-lg shadow-2xl">
          <div v-for="(log, index) in logs" :key="index" class="text-sm mb-1">
            <span class="text-gray-500 mr-2">[{{ (index + 1).toString().padStart(2, '0') }}]</span>
            <span :class="log.color">{{ log.text }}</span>
          </div>
          <div v-if="currentLogIndex < sequence.length" class="text-sm">
            <span class="text-gray-500 mr-2">[{{ (currentLogIndex + 1).toString().padStart(2, '0') }}]</span>
            <span class="text-white">{{ currentText }}</span>
            <span class="cursor-blink ml-1">█</span>
          </div>
        </div>
      </div>

      <div class="mt-8 w-64 h-2 bg-[#30363d] rounded-full overflow-hidden z-10">
        <div
          class="h-full bg-gradient-to-r from-[#238636] to-[#3fb950] transition-all duration-300"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);
const currentText = ref("");
const logs = ref<{ text: string; color: string }[]>([]);
const currentLogIndex = ref(0);
const progress = ref(0);

// 動畫腳本
const sequence = [
  { text: "Connecting to GitHub RPG Engine...", color: "text-blue-400" },
  { text: "Loading sprites & textures...", color: "text-yellow-400" },
  { text: "Initializing Eleanor's Profile...", color: "text-green-400" },
  { text: "World generation complete.", color: "text-white" },
  { text: "Entering game...", color: "text-pink-400" }
];

const typeEffect = async () => {
  for (const item of sequence) {
    currentText.value = "";
    for (let i = 0; i < item.text.length; i++) {
      currentText.value += item.text[i];
      progress.value += (100 / sequence.length) / item.text.length;
      await new Promise(r => setTimeout(r, 40)); // 打字速度
    }
    logs.value.push({ ...item });
    currentLogIndex.value++;
    await new Promise(r => setTimeout(r, 200)); // 每行停頓
  }

  // 全部完成後關閉
  setTimeout(() => {
    isVisible.value = false;
  }, 800);
};

onMounted(() => {
  typeEffect();
});
</script>

<style scoped>
/* 核心：像素跳動感 */
.character-sprite {
  display: inline-block;
  animation: pixel-bounce 0.5s steps(2) infinite;
}

@keyframes pixel-bounce {
  0% { transform: translateY(0) scaleX(1); }
  50% { transform: translateY(-15px) scaleX(0.95); }
  100% { transform: translateY(0) scaleX(1); }
}

/* 終端游標閃爍 */
.cursor-blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 掃描線濾鏡 */
.scanlines {
  background: linear-gradient(
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.1) 50%
  ), linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.03),
    rgba(0, 255, 0, 0.01),
    rgba(0, 0, 255, 0.03)
  );
  background-size: 100% 4px, 3px 100%;
}

/* 進場與退場動畫 */
.pixel-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}
.pixel-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
  filter: blur(20px);
}
</style>
