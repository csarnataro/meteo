<template>
  <button id="butAdd" class="fab" aria-label="Add">
    <span class="icon add"></span>
  </button>
</template>
<script>
export default {
  name: 'AddButton'
}
</script>
<style scoped>
.fab {
  background-color: #3f51b5;
  border-radius: 50%;
  bottom: 1rem;
  height: 56px;
  padding: 12px;
  position: fixed;
  right: 1rem;
  width: 56px;
  z-index: 1000;
}

.fab .icon {
  display: inline-block;
  height: 100%;
  width: 100%;
}
.add {
  background-image: url("/img/add.svg");
}
</style>
