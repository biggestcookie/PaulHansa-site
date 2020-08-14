<template>
  <nav id="navbar-main" class="navbar  is-primary">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="../assets/img/vscode.svg" />
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-item">
        <a
          href="https://drive.google.com/open?id=1g0e5bwXMcL99mGFxBjeWgSDGMIU5O7ir"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div class="navbar-item">
        <a href="mailto:contact@paulhansa.com" target="_blank">Contact</a>
      </div>
      <div class="navbar-item">
        <a href="https://github.com/biggestcookie" target="_blank">Github</a>
      </div>
      <div class="navbar-item">
        <a href="https://www.linkedin.com/in/paulhansa" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
    <div class="navbar-center">
      <div class="navbar-item is-size-7">
        {{ $route.name }} - paulhansa-site
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
#navbar-main {
  display: flex;
  .navbar-brand {
    width: 3rem;
    img {
      margin-left: 0.25rem;
      width: 16px;
      height: 16px;
    }
  }

  .navbar-menu {
    z-index: 1;
    font-size: 0.8rem;
    .navbar-item:hover {
      background-color: $grey-lighter;
    }
  }

  .navbar-center {
    position: absolute;
    align-items: stretch;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    color: $grey;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>
