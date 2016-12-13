import React, { Component } from 'react';
 import { View } from 'react-native';
import { connect } from 'react-redux';

// redux actions
import { emailChanged, passwordChanged, logInUser } from 'sharks_in_the_water/src/controllers/actions/';

// components
import { Input, Section, Button, LoadingSpinner, ErrorMessage, Header } from 'sharks_in_the_water/src/views/components/';

// themes
import themes from 'sharks_in_the_water/src/views/stylesheets/themes';
const { loginInput, boxShadow, errorStyles, loadingMessage } = themes;



const styles = {
  error: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  form: {
    marginTop: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    margin: 15,
    paddingBottom: 30,
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
  },

  inputLable: {
    color: 'rgba(255, 255, 255, 0.75)',
  },

  inputText: {
    color: 'rgba(255, 255, 255, 0.75)',
  },

  line: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginLeft: 20,
    marginRight: 10,
    marginTop: -10,
    borderRadius: 50,
  },

  buttonText: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0)',
  },

  button: {
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },

  spinner: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },

  loadingBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },

  loadingText: {
    color: '#fff',
  },
};






class LogInForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.logInUser({ email, password });
  }

  renderForm() {
    let result;
    if (this.props.loading) {
      result = (
        <Section>
          <Header textTheme={ styles.loadingText } wrapperTheme={ styles.loadingBackground } title={ 'Lets get you logged in' } />
          <LoadingSpinner />
        </Section>
      );
    } else {
      result = (
        <Section theme={ styles.form }>

          <ErrorMessage theme={ styles.error } >
            { this.props.error }
          </ErrorMessage>


          <Input
            lable={ 'email' }
            placeholder={ 'example@mail.com' }
            value={ this.props.email }
            onChangeText={ this.onEmailChange.bind(this) }
            autoFocus
            returnKeyType={ 'next' }
            returnKeyLabel={ 'next' }
            autoCapitalize={ 'none' }
            keyboardType={ 'email-address' }
            theme={ styles.input }
            textTheme={ styles.inputLable }
            inputTheme={ styles.inputText }
          />
          <View style={ styles.line} />

          <Input
            lable={ 'password' }
            value={ this.props.password }
            placeholder={ 'password123' }
            onChangeText={ this.onPasswordChange.bind(this) }
            secureTextEntry
            returnKeyType={ 'go' }
            returnKeyLabel={ 'go' }
            autoCapitalize={ 'none' }
            theme={ styles.input }
            textTheme={ styles.inputLable }
            inputTheme={ styles.inputText }
          />

          <View style={ styles.line} />

          <Button
            buttonTitle={ 'Log In' }
            onPress={ this.onButtonPress.bind(this) }
            theme={ styles.button }
            textTheme={ styles.buttonText }
          />

        </Section>
      );
    }

    return result;
  }

  render() {
    return this.renderForm();
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

LogInForm = connect(mapStateToProps, { emailChanged, passwordChanged, logInUser })(LogInForm);
export { LogInForm };
