<template>
  <div id="show-auth"></div>
</template>

<script>
  export default {
    setup() {},
    mounted() {
      this.$auth0.showLock('show-auth')
    },
  }
</script>
