<template>
  <footer class="is-size-7">
    <a
      id="forks"
      href="https://github.com/biggestcookie?tab=repositories"
      target="_blank"
    >
      <img src="../assets/img/fork.svg" />
      {{ forks }}
      <img src="../assets/img/star.svg" />
      {{ stars }}
    </a>
    <div id="info">
      <span>UTF-8</span>
      <span>LF</span>
      <span>Vue</span>
      <img src="../assets/img/bell.svg" />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
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
    padding-right: 0.5rem;
    img {
      width: 1rem;
      margin-left: 1rem;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Statusbar extends Vue {
  private forks = 0;
  private stars = 0;

  private mounted() {
    this.$http
      .get("https://api.github.com/repos/biggestcookie/paulhansa-site")
      .then(res => {
        this.forks = res.data["forks_count"];
        this.stars = res.data["stargazers_count"];
      });
  }
}
</script>
