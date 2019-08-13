<template>
  <div class="visual">
    <div :class="`icon ${this.icon}`"></div>
    <div class="temperature">
      <span class="value">{{ this.temperature }}</span><span class="scale">°{{ this.scale }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Visual',
  props: {
    temperature: Number,
    icon: String,
    scale: {
      type: String,
      default: 'C'
    }
  }
}
</script>
<style scoped>
.icon {
    height: 128px;
    width: 128px;
}
.visual {
  display: flex;
  font-size: 4em;
  flex-grow: 1;
}

.scale {
  font-size: 0.5em;
  vertical-align: super;
}

@media (max-width: 450px) {
  .visual {
      font-size: 3em;
  }
  .icon {
      height: 96px;
      width: 96px;
  }
}
</style>
