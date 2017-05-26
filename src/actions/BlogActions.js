import axios from 'axios';

export const getBlog = (id) => {
  const url = `/blog?blogID=${id}`;
  return (dispatch) => {
    axios.get(url)
      .then(res => {
        dispatch({ type: 'BLOG_RECEIVE', payload: res.data.blog });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getBlogList = () =>
  (dispatch) => {
    axios.get('/blogList')
      .then(res => {
        dispatch({ type: 'BLOG_LIST_RECEIVE', payload: res.data.blogList });
      })
      .catch(error => {
        console.log(error);
      });
  };

export const enterBlog = () => ({ type: 'ENTER_BLOG' });
