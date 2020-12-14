import anecdoteService from "../services/anecdoteService"

export const voteFor = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.voteOne(anecdote)
    dispatch({
      type: "VOTE",
      data: updatedAnecdote,
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    })
  }
}

export const initialize = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT",
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  console.log("ACTION: ", action)
  switch (action.type) {
    case "VOTE":
      const id = action.data.id
      const anecdote = state.find((item) => item.id === id)
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      return state.map((item) => (item.id !== id ? item : updatedAnecdote))
    case "NEW_ANECDOTE":
      return [...state, action.data]
    case "INIT":
      return action.data
    default:
      return state
  }
}

export default reducer
