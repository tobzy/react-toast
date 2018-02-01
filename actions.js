export function showInfoBoxWithParams(message, type, timeout) {
  return {
    type: 'SHOW_INFO_BOX',
    message: message,
    boxType: type,
    timeout: timeout
  }
}

export function hideInfoBox() {
  return {
    type: 'HIDE_INFO_BOX'
  }
}

export function showInfoBox(message, type, timeout) {
  return function(dispatch) {
    let timeoutRef = setTimeout( () => {
      dispatch(hideInfoBox());
    }, timeout);

    dispatch(showInfoBoxWithParams(message, type, timeoutRef));

  }
}
