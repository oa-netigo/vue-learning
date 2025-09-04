<template>
  <div class="call-to-action">
    <div class="cta-content">
      <h2 class="cta-title">Ready to get started?</h2>
      <p class="cta-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button class="cta-button">
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.call-to-action {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  border-radius: 12px;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.cta-description {
  font-size: 1.2rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-button {
  background: white;
  color: #667eea;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cta-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.cta-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>