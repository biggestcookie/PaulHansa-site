class StimulusApplication {
  constructor() {
    this.app = Stimulus.Application.start();
    this.registerControllers();
  }

  registerControllers() {
    this.app.register("github", GithubController);
  }
}

class GithubController extends Stimulus.Controller {
  greet() {
    console.log("hi");
  }
}
