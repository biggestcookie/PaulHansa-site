<template>
  <footer class="is-size-7">
    <a
      id="forks"
      href="https://github.com/biggestcookie/paulhansa-site"
      target="_blank"
    >
      <img src="../assets/img/fork.svg" />
      {{ forks }}
      <img src="../assets/img/star.svg" />
      {{ stars }}
    </a>
    <div id="info">
      <span>Spaces: 4</span>
      <span>UTF-8</span>
      <span>LF</span>
      <a href="https://v3.vuejs.org/" target="_blank">Vue</a>
      <img src="../assets/img/bell.svg" />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  z-index: 1;
  flex: 2;
  background-color: $primary;
  color: $grey;
  width: 100vw;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex !important;
  justify-content: space-between;
  & > * {
    display: flex;
    margin-right: 1rem;
    > * {
      margin: 0 0.25rem;
    }
  }

  a {
    color: $grey;
    &:hover {
      color: $white;
      text-decoration: underline;
    }
  }

  #forks {
    margin-left: 0.25rem;
    img {
      width: 0.75rem;
      &:nth-of-type(1) {
        object-position: 0 0.05rem;
      }
    }
  }

  #info {
    align-self: flex-end;
    padding-right: 0.25rem;
    img {
      width: 1rem;
      margin-left: 1rem;
    }
  }

  .destination h2 {
    color: red;
  }

  h2.destination {
    color: red;
  }
}

.class1 .class2 {
  color: red;
}

.class1.class2 {
  color: red;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Statusbar extends Vue {
  private forks = 0;
  private stars = 0;

  async mounted() {
    const res = await this.$http.get(
      "https://api.github.com/repos/biggestcookie/paulhansa-site"
    );
    this.forks = res.data["forks_count"];
    this.stars = res.data["stargazers_count"];
  }
}
</script>
