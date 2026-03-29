<template>
  <div :class="['portfolio-root', { 'dark-theme': isDark }]">
    <!-- 主題切換按鈕 -->
    <button @click="emitToggle" class="theme-toggle">
      {{ isDark ? '☀️' : '🌙' }}
    </button>

    <header class="glass-header">
      <div class="container">
        <h1><span class="chinese-name">洪郁</span>(Eleanor)</h1>
        <div class="button-group">
          <BaseButton href="https://github.com" type="primary">🐱 GitHub</BaseButton>
          <BaseButton href="#" type="secondary">📄 Resume</BaseButton>
        </div>
      </div>
    </header>

    <main class="container">
      <section class="bio-card">
        <p>
          我是 Eleanor，目前就讀於高雄科技大學資訊工程系。[cite: 2]
          我擅長使用 Django 處理後端邏輯，並透過 Vue.js 打造直覺的前端介面。[cite: 2]
        </p>
      </section>

      <section>
        <h2 class="section-title">🎓 Education</h2>
        <div class="info-card">
          <div class="card-header">
            <h3>高雄科技大學</h3>
            <span class="date-label">2023 - 2027 (預計)[cite: 2]</span>
          </div>
          <p class="sub-text">資訊工程系 學士[cite: 2]</p>
        </div>
      </section>

      <section>
        <h2 class="section-title">💻 Projects</h2>
        <div class="info-card highlight-border">
          <div class="card-header">
            <h3>Notion-like Editor</h3>
            <span class="date-label">2026.03[cite: 2]</span>
          </div>
          <ul class="styled-list">
            <li>整合 Tiptap 編輯器與 Django 後端。[cite: 2]</li>
            <li>實作區塊式編輯與自動存檔功能。</li>
          </ul>
          <BaseButton href="https://github.com/eleanorhhh/tiptap.git" type="primary">
            🐱 GitHub
          </BaseButton>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Eleanor. Designed for Web.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

// 定義 Props 接收主題狀態
defineProps<{ isDark: boolean }>()

// 定義 Emit 用於通知父組件切換主題
const emit = defineEmits(['toggleTheme'])
const emitToggle = () => emit('toggleTheme')
</script>

<style scoped>
/* 將原本 App.vue 中的所有 CSS 樣式貼到這裡 */
.portfolio-root {
  --bg-main: #f1f5f9;
  --bg-card: #ffffff;
  --primary: #2563eb;
  --text-main: #0f172a;
  --text-sub: #475569;
  --border-color: #e2e8f0;
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  min-height: 100vh;
  transition: all 0.3s ease;
}

.dark-theme {
  --bg-main: #0f172a;
  --bg-card: #1e293b;
  --primary: #60a5fa;
  --text-main: #f1f5f9;
  --text-sub: #94a3b8;
  --border-color: #334155;
}

.container { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
header { background-color: var(--bg-card); border-bottom: 1px solid var(--border-color); padding: 5rem 0; margin-bottom: 3rem; }
.info-card { background-color: var(--bg-card); padding: 1.5rem 2rem; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 2rem; box-shadow: var(--card-shadow); transition: transform 0.2s ease; }
.info-card:hover { transform: translateY(-2px); }
.highlight-border { border-left: 6px solid var(--primary); }
.section-title { font-size: 1.5rem; font-weight: 700; color: var(--primary); margin: 3rem 0 1.5rem 0; display: flex; align-items: center; gap: 0.5rem; }
.section-title::after { content: ""; flex: 1; height: 1px; background-color: var(--border-color); }
.date-label { font-size: 0.85rem; color: var(--text-sub); background: var(--bg-main); padding: 2px 8px; border-radius: 4px; }
.theme-toggle { position: fixed; top: 1.5rem; right: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); width: 45px; height: 45px; border-radius: 50%; cursor: pointer; z-index: 1000; }
.button-group { display: flex; gap: 12px; margin-top: 24px; }
</style>
