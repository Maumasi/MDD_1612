import React, { Component } from 'react';
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import { Button, Section, LoadSpinner } from 'UI_Exploration/src/Components/';

const styles = {
  theme: {
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
  },

  textTheme: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  sectionTheme: {
    padding: 2,
  },

  buttonWrapper: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  extraPadding: {
    paddingTop: 40,
  },

  buttonTheme: {
    margin: 0,
    width: ((width / 2) - 20),
  },

  yesButton: {
    backgroundColor: 'rgba(238, 100, 86, 0.6)',
    letterSpacing: 1,
    color: '#FFF',
  },

  noButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
};

const PopUp = (props) => {
  const { children, popUpBtn, visible, textTheme, sectionTheme, buttonTheme } = props;

  return (
    <Modal
      animationType={ 'slide' }
      onRequestClose={ () => {} }
      transparent={ true }
      visible={ visible }

    >
      <View style={ [styles.theme] }>
        <Section theme={ [styles.sectionTheme, sectionTheme] }>
          <Text style={ [styles.textTheme, textTheme] }>I'm a pop-up</Text>
        </Section>

        <Section theme={ [styles.sectionTheme, styles.buttonWrapper, sectionTheme] }>
          <Button
            theme={ [styles.buttonTheme, buttonTheme] }
            textTheme={ styles.noButton }
            onPress={ popUpBtn }
            buttonTitle={ 'Hide this pop-up' }
          />
        </Section>

        <Section theme={ [styles.sectionTheme, sectionTheme] }>
          <Text style={ [styles.textTheme, styles.extraPadding, textTheme] }>Look at my activity spinner below!!!</Text>
        </Section>
        <LoadSpinner/>
      </View>
    </Modal>
  );
};

export { PopUp };
