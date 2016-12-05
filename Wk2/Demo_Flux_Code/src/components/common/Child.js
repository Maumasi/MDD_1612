import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';

// redux actions
import { textChanged } from 'Demo_Flux/src/flux/actions/';

// custom components
import { TextArea } from 'Demo_Flux/src/components/';


class Child extends Component {

  render() {
    return (
      <View>
        <TextArea
          multiline
          placeholder={ 'Make this child component share it\'s state with the parent component using flux through Redux!' }
          value={ this.props.text }
          autoCorrect
          autoCapitalize={ 'sentences' }

          onChangeText={ (value) => {
            this.props.textChanged(value);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { text }  = state.textArea;
  return { text };
};

Child = connect(mapStateToProps, { textChanged })(Child);
export { Child };
