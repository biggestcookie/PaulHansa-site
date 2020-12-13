<template>
  <section class="hero is-family-monospace">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="content-block has-family-code">
              <span class="grayed">
                <span class="orange">function </span>
                <span class="cyan">introduce()</span>: string
                <span class="blue">{</span>
              </span>
              <div class="indent">
                <span class="grayed">return ```</span>
                <div class="content indent">
                  <h2 class="title has-text-info">Paul Hansa</h2>
                  <h5 class="has-text-grey-lighter">
                    Software Engineer
                  </h5>
                </div>
                <span class="grayed">```</span>
              </div>
              <span class="grayed blue">}</span>
            </div>
            <div class="content-block has-family-code">
              <span class="grayed">
                <span class="orange">function </span>
                <span class="cyan">about()</span>: string
                <span class="blue">{</span>
              </span>
              <div class="indent">
                <span class="grayed">return ```</span>
                <div class="content indent">
                  <h4 class="title has-text-info">Hey there!</h4>
                  <p>
                    I'm Paul, a software engineer based in Atlanta, GA. <br />
                    I specialize in building apps for the web, harnessing a deep
                    understanding of user experience and accessible design.
                  </p>
                  <div class="links is-flex">
                    <router-link to="/dev" class="button is-uppercase">
                      Dev work
                    </router-link>
                    <a
                      href="https://drive.google.com/open?id=1g0e5bwXMcL99mGFxBjeWgSDGMIU5O7ir"
                      target="_blank"
                      class="button is-uppercase"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <span class="grayed">```</span>
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
  .links {
    width: 100%;
    justify-content: space-around;
    margin-bottom: 2em;
    .button {
      min-width: 120px;
    }
    @include mobile {
      justify-content: space-between;
      .button {
        min-width: inherit;
      }
    }
  }
}
</style>
