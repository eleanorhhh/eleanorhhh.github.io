<template>
  <div :class="['portfolio-root', { 'dark-theme': isDark }]">
    <button @click="toggleTheme" class="theme-toggle">{{ isDark ? '☀️' : '🌙' }}</button>

    <header class="glass-header">
      <div class="container">
        <h1><span class="chinese-name">洪郁婷</span>(Eleanor)</h1>

        <div class="button-group">
          <BaseButton href="https://github.com" type="primary">
            🐱 GitHub
          </BaseButton>
          <BaseButton href="#" type="secondary">
            📄 Resume
          </BaseButton>
        </div>
      </div>
    </header>

    <main class="container">
      <section class="bio-card">
        <p>
          我是 Eleanor，目前就讀於 **資訊工程系**。
          我擅長使用 **Django** 處理後端邏輯，並透過 **Vue.js** 打造直覺的前端介面。
          這是我參考專業學術模板 打造的作品集。
        </p>
      </section>

      <section>
        <h2 class="section-title">🎓 Education</h2>
        <div class="info-card">
          <div class="card-header">
            <h3>高雄科技大學</h3>
            <span class="date-label">2023- 2027 (預計)</span>
          </div>
          <p class="sub-text">資訊工程系 學士</p>
        </div>
      </section>

      <section>
        <h2 class="section-title">💻 Projects</h2>
        <div class="info-card highlight-border">
          <div class="card-header">
            <h3>Notion-like Editor</h3>
            <span class="date-label">2026.03</span>
          </div>
          <ul class="styled-list">
            <li>整合Tiptap編輯器與Django後端。</li>
            <li>實作區塊式編輯與自動存檔功能。</li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Eleanor. Designed for Web.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue'
const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-theme', isDark.value)
}
</script>

<style scoped>
/* --- 專業配色與層次優化 --- */
.portfolio-root {
  /* 淺色模式：拉大背景與卡片的色差 */
  --bg-main: #f1f5f9;        /* 使用更明顯的淺灰藍背景 */
  --bg-card: #ffffff;        /* 純白卡片，產生浮現感 */
  --primary: #2563eb;        /* 更深邃的藍色 */
  --text-main: #0f172a;      /* 高對比文字 */
  --text-sub: #475569;       /* 次要文字 */
  --border-color: #e2e8f0;
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* --- 深色模式 --- */
.dark-theme {
  --bg-main: #0f172a;
  --bg-card: #1e293b;
  --primary: #60a5fa;
  --text-main: #f1f5f9;
  --text-sub: #94a3b8;
  --border-color: #334155;
  --card-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- Header 區塊：保持純淨 --- */
header {
  background-color: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
  padding: 5rem 0;
  margin-bottom: 3rem;
}

/* --- 核心分層設計：卡片樣式 --- */
.info-card {
  background-color: var(--bg-card);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
  box-shadow: var(--card-shadow); /* 加上陰影讓卡片浮起來 */
  transition: transform 0.2s ease;
}

.info-card:hover {
  transform: translateY(-2px); /* 懸浮微動效 */
}

/* 專業的左側裝飾條 */
.highlight-border {
  border-left: 6px solid var(--primary);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin: 3rem 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: var(--border-color);
}

/* --- 其他元件樣式 --- */
.date-label {
  font-size: 0.85rem;
  color: var(--text-sub);
  background: var(--bg-main);
  padding: 2px 8px;
  border-radius: 4px;
}

.theme-toggle {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
}
.button-group {
  display: flex;
  gap: 12px; /* 這裡改大，按鈕就會分得越開 */
  margin-top: 24px;
}
</style>
