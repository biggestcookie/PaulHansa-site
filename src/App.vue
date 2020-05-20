<template>
  <div id="app">
    <navbar />
    <div id="main">
      <sidebar />
      <div id="right-pane">
        <tabs />
        <div id="window">
          <router-view />
        </div>
      </div>
    </div>
    <statusbar />
  </div>
</template>

<style lang="scss">
body,
html {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#main {
  display: flex;
  height: 100%;
  overflow: hidden;

  #right-pane {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    #window {
      width: 100%;
      height: 100%;
      flex: 1;
      overflow-y: scroll;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Tabs from "@/components/Tabs.vue";
import Statusbar from "@/components/Statusbar.vue";

@Component({
  components: {
    Navbar,
    Sidebar,
    Statusbar,
    Tabs
  }
})
export default class App extends Vue {}
</script>
