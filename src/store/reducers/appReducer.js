const initialState = {
  mode: 'all'
}

const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'APP@CHANGE_ACTIVE_TAB': {
      return {
        ...state,
        mode: payload
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer
