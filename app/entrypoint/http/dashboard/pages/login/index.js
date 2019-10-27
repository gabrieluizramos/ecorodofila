// Default
import React, { Component, Fragment } from 'react';

// Components
import Root from '../shared/root';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';

// Styles
import styles from './styles.scss';

// Services
import { login, logout } from '../../services/auth';

class Login extends Component {
  onSubmit = e => {
    e.preventDefault();
    const {
      email: {
        value: email
      },
      password: {
        value: password
      }
    } = e.target;

    login(email, password);
    return false;
  }

  render() {
    return (
      <Root className={styles.login}>
        <div className={styles.overlay}></div>
        <title>EcoRodofila - Login</title>
        <form className={styles.form} method="POST" onSubmit={this.onSubmit}>
          <Label for="email">Email</Label>
          <Input type="text" placeholder="seu@email.com" name="email" />
          <Input type="password" placeholder="Senha" name="password" />
          <Button>Entrar</Button>
        </form>
      </Root>
    )
  }
}


export default Login;
