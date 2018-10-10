import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser } from 'reducers/core';
import { withFirebase } from 'react-redux-firebase';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import Input from 'components/form/Input';
import Button from 'components/Button';
import { withVenueConfig } from 'containers/VenueConfigProvider';
import { NotEmptyValidator } from 'utils/formValidators';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

class Login extends PureComponent {

  state = {
    error: '',
  };

  handleLogin = (values) => {
    console.log('logging in');
    console.log(values.email);
    this.props.firebase
      .auth()
      .signInWithEmailAndPassword(
        `${this.props.venueConfig.id}+${values.email}`,
        values.password
      )
      .catch(error => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    return (
      <Container>
        {this.props.currentUser && <Redirect to="/" />}
        <Field
          name="email"
          component={Input}
          placeholder="Email address"
          type="email"
          validate={NotEmptyValidator}
        />
        <Field
          name="password"
          component={Input}
          placeholder="Password"
          type="password"
          validate={NotEmptyValidator}
        />

        {this.state.error}

        <Button
          kind="primary"
          label="Login"
          onClick={this.props.handleSubmit(this.handleLogin)}
        />
      </Container>
    );
  }
}

export default compose(
  reduxForm({
    form: 'Login form',
  }),
  connect(state => ({
    currentUser: getUser(state),
  })),
  withVenueConfig,
  withFirebase,
)(Login);
