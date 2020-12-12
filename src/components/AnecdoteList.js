import React from "react"
import { connect } from "react-redux"

import { voteFor } from "../reducers/anecdoteReducer"
import { changeNotification } from "../reducers/notificationReducer"

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    console.log(anecdote)
    props.voteFor(anecdote)
    props.changeNotification(`you voted for: ${anecdote.id}`, 5)
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
              <button onClick={() => vote(anecdote)}>vote</button>
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
