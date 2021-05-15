import React, { Component } from 'react';
import TitleInput from './AddMovieComponents/TitleInput';
import SubtitleInput from './AddMovieComponents/SubtitleInput';
import ImageInput from './AddMovieComponents/ImageInput';
import StorylineInput from './AddMovieComponents/StorylineInput';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImageInput value={ imagePath } onChange={ this.handleChange } />
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
      </form>
    );
  }
}
