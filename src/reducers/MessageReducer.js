const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return { ...state, [action.payload.prop]: action.payload.value };

    case 'MESSAGE_SENT':
      console.log('message send!');
      return INITIAL_STATE;

    default:
      return state;
  }
};
