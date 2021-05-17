import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieBtn extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
        value="submit"
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
