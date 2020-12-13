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
                  <span>
                    return
                    this.$http.get("https://api.github.com/users/biggestcookie/repos").then(
                  </span>
                </div>
                <div class="content indent">
                  <h4 class="title has-text-info">
                    Dev Projects
                  </h4>
                  <p>Some of my latest personal development projects.</p>
                  <div class="is-loading" v-if="loading"></div>
                  <div class="columns is-multiline">
                    <div
                      v-for="repo in repos"
                      :key="repo.name"
                      class="column is-flex is-half"
                    >
                      <a
                        class="card has-background-black-ter"
                        :href="repo.url"
                        target="_blank"
                      >
                        <div class="card-content">
                          <h5 class="cyan">{{ repo.name }}</h5>
                          <p class="is-size-7">{{ repo.description }}</p>
                          <span class="card-info">
                            <div class="stars">
                              <img src="../assets/img/star.svg" />
                              {{ repo.stars }}
                            </div>
                            <div class="url">{{ repo.lang }}</div>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <h4 class="has-text-centered has-text-grey-light mt-6">
                    Some more of my projects:
                  </h4>
                  <div class="links is-flex">
                    <a
                      href="https://github.com/biggestcookie"
                      target="_blank"
                      class="button is-uppercase"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://glitch.com/@bigcookie"
                      target="_blank"
                      class="button is-uppercase"
                    >
                      Glitch
                    </a>
                  </div>
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

<style lang="scss">
.content {
  > .title {
    margin-bottom: 1rem;
  }
  > p {
    margin-bottom: 3em !important;
  }
  .is-loading {
    pointer-events: none;
    opacity: 0.5;
    &:after {
      @include loader;
      top: calc(50% - 2.5em);
      left: calc(50% - 2.5em);
      width: 5em;
      height: 5em;
      border-width: 0.25em;
    }
  }
  .column {
    padding: 0.75rem;
    padding-right: 1.5rem;
    @include mobile {
      padding-right: 0.75rem;
    }
    .card {
      min-width: 100%;
      box-shadow: none;
      .card-content {
        padding: 0;
        padding-bottom: 2em;
        padding-right: 0.5em;
        &:hover {
          transition: 0.5s all ease;
          h5 {
            text-decoration: underline;
            color: $white;
          }
          p,
          .card-info {
            color: $white;
          }
        }
      }
      .card-info {
        position: absolute;
        font-size: 0.9em;
        bottom: 2em;
        width: calc(100% - 0.5em);
        .stars {
          position: absolute;
          left: 0;
          font-size: 0.8em;
          img {
            object-position: 0 0.1rem;
            width: 0.75rem;
          }
        }
        .url {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

interface Project {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  lang: string;
}

export default class Projects extends Vue {
  private repos: Project[] = [];
  private loading = true;

  async mounted() {
    const res = await this.$http.get(
      "https://api.github.com/users/biggestcookie/repos",
      {
        params: {
          sort: "updated"
        }
      }
    );
    this.repos = await Promise.all([
      ...res.data
        .filter(
          (repo: any) => !repo.name.includes("template") && !repo.archived
        )
        .slice(0, 6)
        .map(async (repo: any) => ({
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          lang: await this.getLangFromGitHub(repo.languages_url)
        }))
    ]);
    this.loading = false;
  }

  async getLangFromGitHub(url: string): Promise<string> {
    return this.$http.get(url).then(res => Object.keys(res.data)[0]);
  }
}
</script>
