<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-logo">
          <Logo/>
        </div>
        <div class="header-menu">
          <ul>
            <li v-for="(item,index) in nav" :key="index">
              <nuxt-link :to="item.url" class="link">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="header-btn">
          <btn>Booking Now</btn>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "About us",
          url: "/",
        },
        {
          title: "Menu",
          url: "/",
        },
        {
          title: "Features",
          url: "/",
        },
        {
          title: "Contact us",
          url: "/",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
