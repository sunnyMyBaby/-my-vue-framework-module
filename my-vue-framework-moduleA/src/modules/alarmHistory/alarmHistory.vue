<template>
  <div>
    历史报警
    {{title}}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['alarmHistory/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>