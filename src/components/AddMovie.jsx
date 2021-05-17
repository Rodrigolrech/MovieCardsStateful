import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './AddMovieComponents/TitleInput';
import SubtitleInput from './AddMovieComponents/SubtitleInput';
import ImageInput from './AddMovieComponents/ImageInput';
import StorylineInput from './AddMovieComponents/StorylineInput';
import RatingInput from './AddMovieComponents/RatingInput';
import SelectInput from './AddMovieComponents/SelectInput';
import AddMovieBtn from './AddMovieComponents/AddMovieBtn';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImageInput value={ imagePath } onChange={ this.handleChange } />
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <SelectInput value={ genre } onChange={ this.handleChange } />
        <AddMovieBtn onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
