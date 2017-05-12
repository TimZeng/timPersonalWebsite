const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      console.log('changing', action.payload.prop, 'to', action.payload.value);
      return { ...state, [action.payload.prop]: action.payload.value };

    default:
      return state;
  }
};
