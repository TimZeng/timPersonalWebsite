import axios from 'axios';

export const getBlog = () => {
  return (dispatch) => {
    axios.get('/blog')
      .then(res => {
        dispatch({ type: 'BLOG_RECEIVE', payload: res.data.blog });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
