export default (state = [], action) => {
  switch (action.type) {
    case 'BLOG_LIST_RECEIVE':
      return action.payload;

    default:
      return state;
  }
};
