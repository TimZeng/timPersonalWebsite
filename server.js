const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

const send = require('gmail-send')({
  user: 'zengtiantian1122@gmail.com',
  pass: 'metiwnzdwhnoqulo',
  to: 'zengtiantian1122@gmail.com'
  // subject: 'customer message',
  // text:    'test message'   // Plain text
});

const blog = require('./temp_data');

app.use(parser.json());

app.use((req, res, next) => {
  console.log(`serving ${req.method} request on ${req.url}`);
  next();
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/message', (req, res) => {
  const text = `name: ${req.body.name} \n email: ${req.body.email} \n ${req.body.message}`;

  send({
    subject: `Your website message from ${req.body.name}`,
    text
  }, (err, resp) => {
    if (err) console.log('err: ', err);
    else {
      res.status(200);
      res.send('success');
    }
  });
});

app.get('/blog', (req, res) => {
  res.status(200);
  res.send(JSON.stringify(blog));
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
