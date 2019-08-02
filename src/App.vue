<template>
  <div id="app">
    <PageWrapper />
  </div>
</template>

<script>
import PageWrapper from "./components/PageWrapper.vue";

export default {
  name: "app",
  components: {
    PageWrapper
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  color: #444;
  font-family: "Helvetica", "Verdana", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

html {
  overflow: hidden;
}

body {
  align-content: stretch;
  align-items: stretch;
  background: #ececec;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.icon {
  background-repeat: no-repeat;
  background-size: contain;
}

</style>
