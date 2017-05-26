const send = require('gmail-send')({
  user: 'zengtiantian1122@gmail.com',
  pass: 'metiwnzdwhnoqulo',
  to: 'zengtiantian1122@gmail.com'
});

module.exports = {
  sendMessage: {
    sendOneMessage: (message, callback) => {
      const text = `name: ${message.name} \n email: ${message.email} \n ${message.message}`;

      send({
        subject: `Your website message from ${message.name}`,
        text
      }, (err, resp) => callback(err, resp));
    }
  }
};
