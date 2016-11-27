
import React, { Component } from 'react';
import { View } from 'react-native';

import {
  Menu,
  PopUp,
  Map,
  Toggle,
} from 'UI_Exploration/src/Components/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: true,
      toggleSwitch: false,
    };
  }

  displayPopUp() {
    console.log("Menu button hit");
    console.log("State: ", this.state.showPopUp);
    this.setState({showPopUp: true});
  }

  hidePopUp() {
    console.log("Pop-up button hit");
    console.log("State: ", this.state.showPopUp);
    this.setState({showPopUp: false});
  }

  popUp() {
    console.log("Pop-up");
    console.log("State: ", this.state.showPopUp);
    let result = null;
    if(this.state.showPopUp) {
      result = <PopUp popUpBtn={ this.hidePopUp.bind(this) } />;
    } else {
      result = <View/>;
    }
    return result;
  }

  switchToggle() {
    console.log("toggle switched");
    console.log("State: ", this.state);
    this.setState({toggleSwitch: !this.state.toggleSwitch});
  }

  // app view
  render() {

  	// show all the UI components
    return (
      <View>
        <Map/>
        <Menu onPress={ this.displayPopUp.bind(this) } />
        <Toggle value={ this.state.toggleSwitch } onValueChange={ this.switchToggle.bind(this) } />
        { this.popUp() }
      </View>
    );
  }
}// class

export default App;
