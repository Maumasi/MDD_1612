
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from 'Demo_Flux/src/flux/reducers/';
import { Child, Parent } from 'Demo_Flux/src/components/';
class App extends Component {

  // app view
  render() {
    const store = createStore(reducers, {});
    return (
      <Provider store={ store } >
        <View style={ styles.container }>
          <Parent />
          <Child />
        </View>
      </Provider>
    );
  }
}// class

export default App;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#54EBEF',
  }
}
