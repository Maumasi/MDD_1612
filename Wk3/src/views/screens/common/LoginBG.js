import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Header, ScreenWrapper } from 'sharks_in_the_water/src/views/components/';
const { width, height } = Dimensions.get('window');
const styles = {
  background: {
    width,
    height,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    top: 150,
    right: 0,
    left: 0,
    //bottom: -80,
  },
};


class LoginBG extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScreenWrapper>
        <Image style={ styles.background } source={ require('sharks_in_the_water/src/views/resources/background.png') }/>
      </ScreenWrapper>
    );
  }
}

export { LoginBG };
