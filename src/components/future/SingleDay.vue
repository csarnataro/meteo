<template>
  <!--
  <div class="visual">
    <div :class="'icon ' + this.icon "></div>
    <div class="temperature">
      <span class="value">{{ this.temperature }}</span><span class="scale">°{{ this.scale }}</span>
    </div>
  </div>
  -->
  <div class="oneday">
    <div class="date">00:00</div>
    <div :class="'icon ' + this.icon "></div>
    <div class="temp-high">
      <span class="value">{{ this.temperature }}</span>°
    </div>
  </div>

</template>

<script>
export default {
  name: 'SingleDay',
  props: {
    icon: String,
    temperature: Number
  }
}
</script>
<style scoped>
.oneday {
  flex-grow: 1;
  text-align: center;
}

.oneday .icon {
  height: 64px;
  margin-left: auto;
  margin-right: auto;
  width: 64px;
}

.oneday .temp-high,
.oneday .temp-low {
  display: inline-block;
}

.oneday .temp-low {
  color: #666;
}

/**
 * Media query to adjust size of content for small screens
 */

@media (max-width: 450px) {
  .oneday .icon {
    height: 32px;
    width: 32px;
  }
}
</style>