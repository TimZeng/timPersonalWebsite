const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  console.log(`serving ${req.method} request on ${req.url}`);
  next();
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
