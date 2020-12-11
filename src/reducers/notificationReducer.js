const reducer = (state = "", action) => {
  console.log("ACTION: ", action)

  switch (action.type) {
    case "A":
      return action.data.message
    case "CLEAR":
      return ""
    default:
      return state
  }
}

const clearNotification = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR",
    })
  }
}

export const changeNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch({
      type: "A",
      data: { message },
    })
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout * 1000)
  }
}

export default reducer
