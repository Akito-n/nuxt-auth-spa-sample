<template>
  <section>
    <div><h1>Hello Nuxt</h1></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Login extends Vue {
  authenticate() {
    this.$auth.logout()
  }
}
</script>
