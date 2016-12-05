
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const TextArea = (props) => {
  const {
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    autoFocus,
    autoCapitalize,
    returnKeyType,
    onSubmitEditing,
    keyboardType,
    returnKeyLabel,
    style,
    multiline,
    autoCorrect,
    theme,
  } = props;

  return (
    <View style={ [theme] }>
      <TextInput
        multiline={ multiline }
        placeholder={ placeholder }
        autoCorrect={ autoCorrect }
        style={ [styles.lableStyle, style] }
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ secureTextEntry }
        autoFocus={ autoFocus }
        autoCapitalize={ autoCapitalize }
        returnKeyType={ returnKeyType }
        onSubmitEditing={ onSubmitEditing }
        keyboardType={ keyboardType }
        returnKeyLabel={ returnKeyLabel }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lableStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    padding: 5,
    height: 100,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    borderColor: '#25B6BA',
    borderRadius: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export { TextArea };
