<template>
  <div class="card-spinner">
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CardSpinner'
}
</script>

<style scoped>
/**
 * Loading spinner
 */

.card-spinner {
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  margin-left: -16px;
  margin-top: -16px;
  position: absolute;
  width: 100%;
}

.card-spinner svg {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card-spinner svg circle {
  animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;
  box-sizing: border-box;
  stroke: #3f51b5;
  stroke-width: 3px;
  transform-origin: 50%;
}

@keyframes rotate {
  from { transform: rotate(0); }
  to { transform: rotate(450deg); }
}

@keyframes line {
  0% {
    stroke-dasharray: 2, 85.964;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    transform: rotate(90deg);
  }
}

</style>
