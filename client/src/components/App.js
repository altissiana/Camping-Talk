import React, { Component } from 'react'
import { Provider } from 'react-redux'
import "../styles/base.css";
import store from '../store'
import Chat from './Chat'




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>

    )
  }
}

export default App
