export default (state = false, action) => {
  switch (action.type) {
    case 'MESSAGE_SENT':
      return true;

    case 'TOGGLE_OVERLAY':
      return false;

    default:
      return state;
  }
};
