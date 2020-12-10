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

export const changeNotification = (message) => {
  console.log(message)
  return {
    type: "A",
    data: { message },
  }
}

export default reducer
