<template>
  <div class="description">
    <div class="humidity">
      <span class="label">Umidità:</span>
      <span class="value"></span><span class="scale">%</span>
    </div>
    <div class="wind">
      <span class="label">Vento:</span>
      <span class="value"></span>
      <span class="scale">km/h</span>
      <span class="direction"></span>°
    </div>
    <div class="sunrise">
      <span class="label">Alba:</span>
      <span class="value"></span>
    </div>
    <div class="sunset">
      <span class="label">Tramonto:</span>
      <span class="value"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['location', 'date', 'description'],
}
</script>
<style scoped>
.description {
  font-size: 1.25em;
  flex-grow: 1;
}

.description .label {
  color: #666;
}
@media (max-width: 450px) {
  .description {
    font-size: 0.9em;
  }
}

</style>