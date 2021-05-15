import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          value={ value }
          onChange={ onChange }
          name="title"
          data-testid="title-input"
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
