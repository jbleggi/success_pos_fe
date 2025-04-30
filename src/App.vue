<template>
  <div class="landing-page">
    <!-- Header -->
    <header class="header">
      <h1 class="title">Success Cafe</h1>
      <div class="datetime">{{ currentTime }}</div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <button class="new-sale-btn">New Sale</button>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <button class="access-btn">Staff/Manager Access</button>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive current time
const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString()
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3e3e3e;
  color: white;
}

.title {
  flex: 1;
  text-align: center;
  font-size: 2rem;
}

.datetime {
  font-size: 1rem;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-sale-btn {
  font-size: 2rem;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.new-sale-btn:hover {
  background-color: #45a049;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
}

.access-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.access-btn:hover {
  background-color: #1976D2;
}
</style>
