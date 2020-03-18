function init() {
  const app = new StimulusApplication().app;
  loadGithubRepos().then(console.log);
}

async function loadGithubRepos() {
  const githubApiUrl = "https://api.github.com";
  const userName = "biggestcookie";

  const response = await axios.get(`${githubApiUrl}/users/${userName}/repos`, {
    params: {
      type: "owner",
      sort: "updated"
    }
  });
  return response.data;
}

init();
