
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = {
  btnShape: {
    width: width - 60,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: 'rgb(255, 190, 87)',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  btnBorder: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
    elevation: 1,
  },
  btnText: {
    padding: 5,
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: 'Futura-Medium',
  },
};

const Button = (props) => {
  const { onPress, buttonTitle, theme, textTheme } = props;

  return (
    <View style={ [styles.btnShape, theme] }>
      <TouchableOpacity
        style={ [styles.btnBorder] }
        onPress={ onPress }
      >
        <Text style={ [styles.btnText, textTheme] }>{ buttonTitle }</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
