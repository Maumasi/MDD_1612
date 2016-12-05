import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

// custom components
import { TextArea } from 'Demo_Flux/src/components/';


class Parent extends Component {

  render() {
    console.log(this.props.text);
    return (
      <View style={ styles.parent }>
        <Text style={ styles.title }>This is the parent component</Text>

        <Text style={ styles.text }>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    height: 500,
    marginTop: 30,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#25B6BA',
    borderRadius: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  text: {
    flex: 9,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.95)'
  },

  title: {
    flex: 1,
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.75)',
  },
});




const mapStateToProps = (state) => {
  const { text }  = state.textArea;
  return { text };
};


Parent = connect(mapStateToProps, {})(Parent);
export { Parent };
