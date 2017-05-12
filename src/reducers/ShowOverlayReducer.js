export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_OVERLAY':
      return action.payload.overlay;

    default:
      return state;
  }
};
