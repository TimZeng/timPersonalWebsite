export default (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_OVERLAY':
      return action.payload.component;

    default:
      return state;
  }
};
