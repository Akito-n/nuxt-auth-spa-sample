<template>
  <section>
    <div><h1>Hello Nuxt callback</h1></div>
  </section>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('url', $route.path)
    })
    // const domain = this.$auth0.showLock('auth0')
  }
})
</script>
