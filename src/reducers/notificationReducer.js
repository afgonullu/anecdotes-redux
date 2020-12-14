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

let timeOut

const fireNewNotification = (dispatch, t) => {
  clearTimeout(timeOut)
  timeOut = setTimeout(() => {
    dispatch(clearNotification())
  }, t * 1000)
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
    fireNewNotification(dispatch, timeout)
  }
}

export default reducer
