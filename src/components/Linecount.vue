<template>
  <div id="line-count">
    <div
      v-for="(line, index) in new Array(100)"
      :key="index"
      class="line-number"
    >
      <span class="is-family-monospace has-text-white">{{ index + 1 }}</span>
    </div>
  </div>
</template>

<style lang="scss">
#line-count {
  position: absolute;
  overflow: hidden;
  background: $grey-darker;
  opacity: 0.3;
  width: 3.5rem;
  text-align: right;
  .line-number {
    margin-right: 1rem;
    font-size: 0.8rem;
    height: 1.3rem;
  }
  @include mobile {
    width: 2rem;
    .line-number {
      margin-right: 0.5rem;
    }
  }
}
</style>
