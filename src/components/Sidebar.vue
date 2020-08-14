<template>
  <aside id="activity-bar" class="is-hidden-mobile">
    <img src="../assets/img/file.svg" />
    <img src="../assets/img/search.svg" />
    <img src="../assets/img/extensions.svg" />
    <img src="../assets/img/settings.svg" />
  </aside>
</template>

<style lang="scss">
#activity-bar {
  width: 3rem;
  height: 100%;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  img {
    padding: 1rem 0;
    &:nth-child(4) {
      position: absolute;
      bottom: 1rem;
      left: 0.75rem;
      @include mobile {
        left: 0rem;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sidebar extends Vue {}
</script>
