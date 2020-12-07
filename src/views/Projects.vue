<template>
  <section class="hero is-family-monospace">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="content-block has-family-code">
              <span class="grayed">
                <span class="orange">function </span>
                <span class="cyan">getProjects()</span>: Projects[]
                <span class="blue">{</span>
              </span>
              <div class="indent">
                <div class="overflow grayed">
                  <span
                    >return
                    this.$http.get("https://api.github.com/users/biggestcookie/repos").then(</span
                  >
                </div>
                <div class="content indent">
                  <h4 class="title has-text-info">
                    Projects
                  </h4>
                </div>
                <span class="grayed gray">);</span>
              </div>
              <span class="grayed blue">}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

interface Project {
  name: string;
  description: string;
  url: string;
}

export default class Projects extends Vue {
  private projects: Project[] = [];

  mounted() {
    // this.$http
    //   .get("https://api.github.com/users/biggestcookie/repos", {
    //     params: {
    //       sort: "updated"
    //     }
    //   })
    //   .then(res => {
    //     res.data.map((project: any) => {
    //       this.projects.push({
    //         name: project.name,
    //         description: project.description,
    //         url: project.html_url
    //       });
    //     });
    //   });
  }
}
</script>
