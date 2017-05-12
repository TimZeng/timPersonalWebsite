export default (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_OVERLAY':
      return action.payload.project || '';

    default:
      return state;
  }
};
