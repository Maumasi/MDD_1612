import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';

const styles = {

  iconWrapper: {
    justifyContent: 'space-around',
    width: 38,
    height: 28,
    padding: 2,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  iconBars: {
    marginHorizontal: 5,
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },

  menuAlignment: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 20,
  },
};

class Menu extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={ styles.menuAlignment }>
        <TouchableOpacity style={ [styles.iconWrapper] } onPress={ this.props.onPress } >
          <View style={ [styles.iconBars] } />
          <View style={ [styles.iconBars] } />
          <View style={ [styles.iconBars] } />
        </TouchableOpacity>
      </View>
    );
  }
}

export { Menu };
