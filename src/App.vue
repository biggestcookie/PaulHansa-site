<template>
  <navbar />
  <div id="main">
    <sidebar />
    <div id="right-pane">
      <tabs />
      <div id="window">
        <div id="viewport">
          <line-count />
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <statusbar />
</template>

<style lang="scss">
body,
html {
  overflow: hidden;
  height: 100%;
}
#app {
  position: relative;
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
      #viewport {
        position: relative;
        min-height: 100%;
        overflow: hidden;
        section {
          margin-left: 4rem;
          @include mobile {
            margin-left: 2rem;
          }
          h1,
          h2,
          h3,
          h4 {
            text-transform: uppercase;
          }

          .orange {
            color: $orange;
          }

          .cyan {
            color: $cyan;
          }

          .blue {
            color: $blue;
          }

          .gray {
            color: $grey;
          }

          .grayed {
            opacity: 0.6;
            font-size: 0.8em;
          }

          .overflow {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            // color: $grey-lighter;
          }

          .column {
            .content-block {
              margin-bottom: 5rem;
              .indent {
                margin: 0 2em;
                display: block;
              }
              .content {
                margin-top: 1rem;
              }
            }
          }
          @include mobile {
            .column .content-block .indent {
              margin: 0 1em;
              .content {
                margin-top: 0.5em;
              }
            }
            p {
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LineCount from "/@/components/Linecount.vue";
import Navbar from "/@/components/Navbar.vue";
import Sidebar from "/@/components/Sidebar.vue";
import Statusbar from "/@/components/Statusbar.vue";
import Tabs from "/@/components/Tabs.vue";

@Options({
  components: {
    LineCount,
    Navbar,
    Sidebar,
    Statusbar,
    Tabs
  }
})
export default class App extends Vue {}
</script>
