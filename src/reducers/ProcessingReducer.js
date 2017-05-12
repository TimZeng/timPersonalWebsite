export default (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_PROCESSING':
      return action.payload;

    case 'MESSAGE_SENT':
      return false;

    default:
      return state;
  }
};
