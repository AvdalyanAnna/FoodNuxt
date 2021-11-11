<template>
  <img :src="require(`~/assets/img/icons-svg/${name}`)" alt="">
</template>

<script>
export default {
  name: "svgIcon",
  props:{
    name:{
      type:String,
      require:true
    }
  }
}
</script>

<style scoped>

</style>
