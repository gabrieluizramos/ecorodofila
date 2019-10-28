// Default
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Text from '../text';
import Input from '../input';
import Button from '../button';

// Styles
import styles from './styles.scss';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      description: props.description,
      observations: props.observations
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.createIncident = this.createIncident.bind(this);
    this.updateIncident = this.updateIncident.bind(this);
    this.getExtraProps = this.getExtraProps.bind(this);
  }

  onChange(field, { target: { value } }) {
    this.setState({ [field]: value })
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name: {
        value: name
      },
      description: {
        value: description
      },
      observations: {
        value: observations
      }
    } = e.target;

    return this.props.update ? this.updateIncident(observations) : this.createIncident(name, description, observations);
  }

  async createIncident(name, description, observations) {
    console.log(name, description, observations);
  }

  async updateIncident(observations) {
    console.log(observations);
  }

  getExtraProps() {
    const extraProps = {};

    if(this.props.update) {
      extraProps.disabled = true;
    }

    return extraProps;
  }

  render() {
    const extraProps = this.getExtraProps();

    return (
      <form className={styles.form} method="POST" onSubmit={this.onSubmit}>
        <Input
          type="text"
          label="Nome"
          name="name"
          placeholder="Digite um nome para identificar esse incidente"
          value={this.state.name}
          onChange={this.onChange.bind(this, 'name')}
          {...extraProps}
        />
        <Input
          type="textarea"
          label="Ocorrido"
          name="description"
          placeholder="Descreva o ocorrido"
          value={this.state.description}
          onChange={this.onChange.bind(this, 'description')}
          {...extraProps}
        />
        <Input
          type="textarea"
          label="Observações"
          name="observations"
          placeholder="Alguma observação adicional para consulta"
          onChange={this.onChange.bind(this, 'observations')}
          value={this.state.observations}
        />
        <Button>Criar</Button>
      </form>
    );
  }
}

Form.defaultProps = {
  update: false,
  values: {
    name: '',
    description: '',
    observations: ''
  }
};

export default Form;
