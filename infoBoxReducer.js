let initialState = {
  show: false,
  message: '',
  type: '',
  timeout: null
}

const infoBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_INFO_BOX':
      clearTimeout(state.timeout);
      return {
        show: true,
        message: action.message,
        boxType: action.boxType,
        timeout: action.timeout
      }
    case 'HIDE_INFO_BOX':
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}

export default infoBoxReducer;
