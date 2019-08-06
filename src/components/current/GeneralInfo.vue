<template>
<div>
  <div class="location">{{ location }}</div>
  <div class="date">{{ date }}</div>
  <div class="description">{{ description }}</div>
</div>
</template>

<script>
export default {
  name: 'GeneralInfo',
  props: ['location', 'date', 'description'],
}
</script>
<style scoped>
.location {
  font-size: 1.75em;
}

.date,
.description {
  font-size: 1.25em;
}

@media (max-width: 450px) {
  .date,
  .description {
    font-size: 0.9em;
  }
}
</style>