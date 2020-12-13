<template>
  <div>
    <nav id="tabs" class="navbar has-background-primary">
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        class="navbar-item"
      >
        <img src="../assets/img/vue.svg" />
        <span>{{ route.name }}</span>
      </router-link>
    </nav>
    <div id="breadcrumbs" class="is-hidden-mobile has-background-grey-darker">
      paulhansa-site > src >
      <img src="../assets/img/vue.svg" />{{ $route.name }}
    </div>
  </div>
</template>

<style lang="scss">
#tabs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .navbar-item {
    font-size: 0.8rem;
    color: $grey;

    img {
      width: 1rem;
      margin-right: 0.5rem;
    }
    &.router-link-exact-active {
      background-color: $grey-darker;
      color: $white;
      &:hover {
        background: $grey-darker;
      }
    }
    &:hover {
      background: $grey-darker;
      color: $white;
    }
  }
  @include mobile {
    width: 100vw;
    left: 0;
  }
}

#breadcrumbs {
  background: $white;
  padding-left: 0.5rem;
  width: 100%;
  top: 4.5rem;
  left: 3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  z-index: 2;

  img {
    width: 0.75rem;
    margin-right: 0.15rem;
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";
import { routes } from "/@/router/index";

export default class Tabs extends Vue {
  private routes = routes.filter(route => !!route.name);
}
</script>
