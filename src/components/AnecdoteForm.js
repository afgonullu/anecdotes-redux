import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { changeNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
<<<<<<< HEAD
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ""

    props.createAnecdote(content)
    props.changeNotification(`you created a new Note: ${content}`, 5)
=======
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ""
    dispatch(createAnecdote(content))
    dispatch(changeNotification(`you created a new Note: ${content}`))
    setTimeout(() => {
      dispatch(changeNotification(null))
    }, 5000)
>>>>>>> parent of d052a36... build: use server, async, redux-thunk action creators
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  changeNotification,
  createAnecdote,
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm
