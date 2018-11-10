<template>
  <div>
    布控任务
    {{ title }}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['surveillanceTask/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>