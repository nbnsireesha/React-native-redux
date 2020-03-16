import React, { Component } from "react";
//import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import Game from "./components/Game/index"
import reducers from './components/reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers)


class App extends Component {
  render(){
    return (
      <Provider store={store}>
            <Game />
      </Provider>
    )
  }
}
export default App;