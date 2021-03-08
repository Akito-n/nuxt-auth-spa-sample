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
    <div>{{ $auth.$state.user }}</div>
  </main>
</template>

<script lang="ts"></script>
