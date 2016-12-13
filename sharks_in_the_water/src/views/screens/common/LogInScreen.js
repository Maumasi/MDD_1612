// login screen

import React, { Component } from 'react';
import { Image, StatusBar, Text } from 'react-native';

// components
import { Header, ScreenWrapper } from 'sharks_in_the_water/src/views/components/';
import { LogInForm } from 'sharks_in_the_water/src/views/partials/';
import { LoginBG } from 'sharks_in_the_water/src/views/screens/';

// themes
import themes from 'sharks_in_the_water/src/views/stylesheets/themes';
StatusBar.setBarStyle('dark-content');

const styles = {
  header: {
    fontSize: 30,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#FFF',
  },

  background: {
    backgroundColor: '#C5F4F9',
  },
};

class LogInScreen extends Component {

  render() {
    return (
      <ScreenWrapper theme={ styles.background }>
        <LoginBG/>
        <Header textTheme={ styles.header } title={ 'Sharks in the Warter' } />

        <LogInForm />

      </ScreenWrapper>
    );
  }
}

export { LogInScreen };
