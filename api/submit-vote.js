// api/submit-vote.js
const fs = require('fs');

module.exports = (req, res) => {
  let votes = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'votes.json'), 'utf8'));

  if (req.body.vote) {
    votes[req.body.vote]++;
    fs.writeFileSync(path.join(__dirname, '..', 'votes.json'), JSON.stringify(votes));
    res.json(votes);
  } else {
    res.status(400).json({ error: 'No option selected' });
  }
};