const reducer = (state = "", action) => {
  console.log("ACTION: ", action)

  switch (action.type) {
    case "A":
      console.log(action.data.message)
      return action.data.message
    default:
      return state
  }
}

<<<<<<< HEAD
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
=======
export const changeNotification = (message) => {
  console.log(message)
  return {
    type: "A",
    data: { message },
>>>>>>> parent of d052a36... build: use server, async, redux-thunk action creators
  }
}

export default reducer
