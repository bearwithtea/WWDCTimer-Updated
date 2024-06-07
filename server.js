import bodyParser from 'body-parser';
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// This will parse the body of incoming POST requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Read the votes from the file
let votes = JSON.parse(fs.readFileSync('votes.json', 'utf8'));

app.use(express.static(path.join(__dirname, 'public')));

// Default route to send the index.html file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 

// Import your routes
const submitVote = require('./api/submit-vote');
const results = require('./api/results');
const currentVotes = require('./api/current-votes');

// Use your routes
app.post('/submit-vote', submitVote);
app.get('/results', results);
app.get('/current-votes', currentVotes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});