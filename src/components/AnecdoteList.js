import React from "react"
import { connect } from "react-redux"

import { voteFor } from "../reducers/anecdoteReducer"
import { changeNotification } from "../reducers/notificationReducer"

const AnecdoteList = (props) => {
<<<<<<< HEAD
  const vote = (anecdote) => {
    console.log(anecdote)
    props.voteFor(anecdote)
    props.changeNotification(`you voted for: ${anecdote.id}`, 5)
=======
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
    dispatch(changeNotification(`you voted for: ${id}`))
    setTimeout(() => {
      dispatch(changeNotification(null))
    }, 5000)
>>>>>>> parent of d052a36... build: use server, async, redux-thunk action creators
  }

  return (
    <div>
      {props.anecdotes
        .filter((anecdote) => anecdote.content.includes(props.filter))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  changeNotification,
  voteFor,
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdotes
