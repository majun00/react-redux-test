import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../Redux/Action'

const Counter = ({ caption, Increment, Decrement, value }) => {
  return (
    <div>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <span>
        {caption} count:{value}
      </span>
    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    value: state[ownProps.caption]
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    Increment: () => {
      dispatch(increment(ownProps.caption))
    },
    Decrement: () => {
      dispatch(decrement(ownProps.caption))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Counter)
