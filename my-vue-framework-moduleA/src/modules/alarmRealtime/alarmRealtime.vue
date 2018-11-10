<template>
  <div>
    实时报警
    {{ title }}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['alarmRealtime/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>