// api/current-votes.js
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  let votes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'votes.json'), 'utf8'));
  res.json(votes);
};