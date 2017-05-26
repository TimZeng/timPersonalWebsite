export default (state = false, action) => {
  switch (action.type) {
    case 'BLOG_RECEIVE':
      return true;

    case 'ENTER_BLOG':
      return false;

    default:
      return false;
  }
};
