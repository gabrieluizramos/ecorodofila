// Default
import React, { Component, Fragment } from 'react';

import Router from 'next/router';

// Components
import Root from '../shared/root';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';
import Title from '../../components/title';

// HoC
import { withSnackbar } from '../shared/hoc';

// Styles
import styles from './styles.scss';

// Services
import { login, validateAuthentication } from '../../services/auth';

class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  static async getInitialProps (ctx) {
    const token = validateAuthentication(ctx, false);

    return {
      authenticated: !!token
    };
  }

  componentDidMount() {
    if(this.props.authenticated) {
      Router.push('/dashboard');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      username: {
        value: username
      },
      password: {
        value: password
      }
    } = e.target;

    this.login(username, password);
  }

  async login(user, password) {
    try {
      await login(user, password);

      this.props.setSnackbar({
        type: 'success',
        message: 'Logado com sucesso! Redirecionando...'
      });

      setTimeout(() => {
        Router.push('/dashboard');
      }, 3500);
    } catch(err) {
      this.props.setSnackbar({
        type: 'error',
        message: 'Erro ao logar. Você digitou suas credenciais corretamente?'
      });

      console.log(err);
    }
  }

  render() {
    return this.props.authenticated ? null : (
      <Root className={styles.login}>
        <div className={styles.overlay}></div>
        <title>EcoRodofila - Login</title>
        <section className={styles.formContainer}>
         <header>
            <Title />
            <span className={styles.subtitle}>
              Por favor, informe suas credenciais para acessar o sistema
            </span>
          </header>
          <form className={styles.form} method="POST" onSubmit={this.onSubmit}>
            <Input type="text" name="username" label="Usuário" />
            <Input type="password" name="password" label="Senha" />
            <Button>Entrar</Button>
          </form>
        </section>
      </Root>
    );
  }
}


export default withSnackbar(Login);
