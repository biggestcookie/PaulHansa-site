<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item"></div>
      <div class="level-item"></div>
      <div class="level-item"></div>
    </div>
    <div class="level-item">Title</div>
  </nav>
</template>

<style lang="scss">
.level-left .level-item {
  width: 10px;
  height: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  &:nth-child(1) {
    background-image: url("/assets/img/close.png");
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>
