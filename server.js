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

app.use(parser.json());

app.use((req, res, next) => {
  console.log(`serving ${req.method} request on ${req.url}`);
  next();
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/message', (req, resp) => {
  console.log(req.body);
  const text = `name: ${req.body.name} \n email: ${req.body.email} \n ${req.body.message}`;

  send({
    subject: `Your website message from ${req.body.name}`,
    text
  }, (err, res) => {
    if (err) console.log('err: ', err);
    else {
      resp.send('success');
    }
  });
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
