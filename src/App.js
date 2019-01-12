import React, { Component } from 'react'
// import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import store from './Redux/Store/store'
import Counter from './Component/Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter caption="First" />
        <Counter caption="Second" />
      </Provider>
    )
    // const { PayIncrease, PayDecrease } = this.props
    // return (
    //   <div className="App">
    //     <div className="App">
    //       <h2>数字为{this.props.tiger}</h2>
    //       <button onClick={PayIncrease}>+</button>
    //       <button onClick={PayDecrease}>-</button>
    //     </div>
    //   </div>
    // )
  }
}

// const tiger = 10000
// // action
// const increase = {
//   type: '加'
// }
// const decrease = {
//   type: '减'
// }
// //reducer
// const reducer = (state = tiger, action) => {
//   switch (action.type) {
//     case '加':
//       return (state += 1000)
//       break
//     case '减':
//       return (state -= 1000)
//       break
//     default:
//       return state
//       break
//   }
// }
// const store = createStore(reducer)

// const mapStateToProps = state => {
//   return {
//     tiger: state
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     PayIncrease: () => dispatch({ type: '加' }),
//     PayDecrease: () => dispatch({ type: '减' })
//   }
// }
// App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

// export default () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

export default App
