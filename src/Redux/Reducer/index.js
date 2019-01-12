import { Increment, Decrement } from '../Action'

export default (state, action) => {
  const { counterCaption } = action
  console.log('action', action)
  switch (action.type) {
    case Increment:
      return { ...state, [counterCaption]: state[counterCaption] + 1 }
      break
    case Decrement:
      return { ...state, [counterCaption]: state[counterCaption] - 1 }
      break
    default:
      return state
      break
  }
}
