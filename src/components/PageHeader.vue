<template>
  <header class="header">
    <h1>
      Weather PWA
      <a href="https://darksky.net/poweredby/" class="powered-by">
        Powered by Dark Sky
      </a>
    </h1>
    <button id="butInstall" aria-label="Install" hidden></button>
    <button id="butRefresh" aria-label="Refresh"></button>
  </header>
</template>
<script>

 export default {
  name: 'PageHeader'
}
</script>
<style>
/**
 * Header
 */

.header {
  align-content: center;
  align-items: stretch;
  background: #3f51b5;
  box-shadow:
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 2px 9px 1px rgba(0, 0, 0, 0.12),
    0 4px 2px -2px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 20px;
  height: 56px;
  justify-content: flex-start;
  padding: 16px 16px 0 16px;
  position: fixed;
  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  width: 100%;
  will-change: transform;
  z-index: 1000;
}

.header h1 {
  flex: 1;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}

.header button {
  border: none;
  cursor: pointer;
  height: 24px;
  margin-right: 16px;
  opacity: 0.54;
  outline: none;
  overflow: hidden;
  text-indent: -30000px;
  transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);
  width: 24px;
}

.header #butRefresh {
  background: url(/images/refresh.svg) center center no-repeat;
}

.header #butInstall {
  background: url(/images/install.svg) center center no-repeat;
}

.header .powered-by {
  color: white;
  font-size: 0.6em;
  text-decoration: none;
}
</style>