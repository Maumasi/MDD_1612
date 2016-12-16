import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';


const styles = {
  image: {
    width: 30,
    height: 80,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'relative',
    // opacity: 0.75,
    // backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: 0.85,
    height: 75,
    width: 170,
    borderRadius: 50,
    position: 'relative',
    top: -210,
    //backgroundColor: 'red',
  },

  container: {
    position: 'absolute',
    left: -30,
    top: 25,
    // backgroundColor: 'rgba(0, 0, 0, 0)',
  },
};



class GameButton extends Component {
  constructor(props) {
    super(props);

    const state = {
      test: '',
    }

    const { onPress, status } = props;
  }


  statusTabButton() {
    console.log(this.props.status);
    let result;
    if(this.props.status == 'shark') {
      result = <Image style={ styles.image } source={ require('sharks_in_the_water/src/views/resources/userStatus_shark.png') }/>;
    } else {
      result = <Image style={ styles.image } source={ require('sharks_in_the_water/src/views/resources/userStatus_fish.png') }/>;
    }

    return result;
  }

  navToLeaderBoard() {
    Actions.leaderBoard()
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.statusTabButton() }
        <TouchableHighlight
          style={ styles.button }
          onPress={ this.props.onPress }
          underlayColor='rgba(0, 0, 0, 0)'
          activeOpacity={ 0.65 }
          >

          <View/>
        </TouchableHighlight>

      </View>
    );
  }
}

export { GameButton };
