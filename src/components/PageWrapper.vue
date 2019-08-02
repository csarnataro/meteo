<template>
  <div class="page-wrapper">
    <PageHeader />
    <Content />
    <!-- DialogContainer /> -->
  </div>
</template>
<script>
import PageHeader from './PageHeader.vue'
import Content from './Content.vue'

 export default {
  name: 'PageWrapper',
  components: {
    PageHeader,
    Content
  }
}
</script>
<style>
  
</style>