<script setup lang="ts">
defineProps<{
  href?: string;
  type?: 'primary' | 'secondary';
  target?: string;
}>();
</script>

<template>
  <a v-if="href" :href="href" :target="target || '_blank'"
     :class="['base-btn', type || 'primary']">
    <slot></slot>
  </a>

  <button v-else :class="['base-btn', type || 'primary']">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
}

/* 主按鈕樣式 (Primary) - 帶有立體陰影 */
.primary {
  background-color: var(--primary);
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3);
  filter: brightness(1.1);
}

/* 次要按鈕樣式 (Secondary) - 邊框質感 */
.secondary {
  background-color: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
  background-color: var(--bg-accent);
  transform: translateY(-2px);
}

.base-btn:active {
  transform: translateY(0);
}
</style>
