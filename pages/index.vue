<template>
  <main>
    <ul>
      <li
        v-for="page in ['Options API', 'Class API', 'Composition API']"
        :key="page"
      >
        <nuxt-link
          :to="
            `/${page
              .toLowerCase()
              .split(' ')
              .join('-')}`
          "
        >
          With {{ page }}
        </nuxt-link>
      </li>
    </ul>
    <div v-if="!loggedIn()">
      <div>ログインしてください。</div>
      <nuxt-link class="button is-primary" to="/login">
        <span>login</span>
      </nuxt-link>
    </div>
    <div v-else>
      <div>{{ userInfo().nickname }}</div>
      <button @click="logout()">
        ログアウトする
      </button>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  methods: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    },
    userInfo() {
      const user = this.$auth0.getUserData()
      console.log(user)
      return user
    },
    logout() {
      this.$auth0.logOut()
      this.$router.replace('/')
    }
  }
}
</script>
