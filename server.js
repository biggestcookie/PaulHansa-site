const express = require('express');
const app = express();
const { execSync } = require("child_process");

app.use(express.static(__dirname));

gitPull();

setInterval(() => {
    gitPull();
}, 300000);

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Pulls latest changes from GitHub remote
function gitPull() {
    console.log("Fetching latest changes.");
    const output = execSync(`git pull`).toString();
    console.log(output);
}
