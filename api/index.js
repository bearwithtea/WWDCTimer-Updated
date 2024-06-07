// api/index.js
import path from 'path';

export default (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
};