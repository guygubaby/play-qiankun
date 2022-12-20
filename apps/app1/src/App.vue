<template>
  <section class="font-sans">
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </nav>
    <router-view />
  </section>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
