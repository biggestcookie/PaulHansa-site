<template>
  <div id="line-count">
    <div
      v-for="(line, index) in new Array(100)"
      :key="index"
      class="line-number"
    >
      <span class="is-family-monospace">{{ index + 1 }}</span>
    </div>
  </div>
</template>

<style lang="scss">
#line-count {
  position: absolute;
  top: 0;
  left: 0;
  background: $white;
  opacity: 0.6;
  width: 4rem;
  text-align: right;
  .line-number {
    margin-right: 1.5rem;
    font-size: 0.8rem;
    height: 1.3rem;
  }
  @include mobile {
    width: 2rem;
    .line-number {
      margin-right: 0;
    }
  }
}
</style>

<script lang="ts">
// import { Vue } from "vue-class-component";

// export default class LineCount extends Vue {
//   // lineCount = new Array(100);
// }
</script>
