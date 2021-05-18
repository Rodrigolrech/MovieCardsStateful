import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StorylineInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="textarea"
          name="storyline"
          data-testid="storyline-input"
          id="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
