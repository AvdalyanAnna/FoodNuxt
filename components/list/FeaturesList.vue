<template>
  <div class="features-list">
    <div class="features-item" v-for="(item,index) in features" :key="index">
      <div class="icon">
        <svg-icon :name="`${item.icon}.svg`"/>
      </div>
      <Title class="title-min">item.title</Title>
      <Description>
        {{ item.description }}
      </Description>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesList",
  data() {
    return {
      features: [
        {
        icon:'home',
        title: 'Quality Food ',
        description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
      },
        {
        icon:'delivery',
        title: 'Food Delivery',
        description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
      },
        {
        icon:'taste',
        title: 'Super Taste',
        description: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'
      }
      ]
    }
  }
}
</script>
