import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      // searchText: '',
    };
  }

  // onSearchTextChange(e) {
  //   this.setState({
  //     searchText: e.target.value,
  //   });
  // }

  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            name="text-input"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="checkbox-input"
          />
        </label>
      </form>
    );
  }
}
