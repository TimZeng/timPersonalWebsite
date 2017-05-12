import axios from 'axios';

export const updateMessage = ({ prop, value }) => ({
  type: 'UPDATE_MESSAGE',
  payload: { prop, value }
});

export const sendMessage = ({ name, email, message }) => {
  axios.post('/message', { name, email, message })
    .then(response => {
      if (response.status === 200) {
        return {
          type: 'MESSAGE_SENT',
          payload: ''
        };
        // window.alert('Thanks for your message!');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
