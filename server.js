const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
