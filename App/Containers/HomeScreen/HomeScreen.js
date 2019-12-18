import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import MoviesActions from 'App/Stores/Movies/Actions'
import Styles from './HomeScreen.style'
import MovieList from 'App/Components/MovieList/MovieList'

class HomeScreen extends React.Component {
  renderMovieList() {
    const { moviesErrorMessage, moviesIsLoading, genresErrorMessage, genres, movies } = this.props

    if (moviesErrorMessage) {
      return <Text style={Styles.error}>{moviesErrorMessage}</Text>
    }

    if (!movies.hasOwnProperty('results')) {
      return <ActivityIndicator size="large" color="#000" />
    }

    movies['results'].genres = !genresErrorMessage ? genres.genres : null

    return (
      <MovieList
        title="Upcoming Movies"
        data={movies['results']}
        onEndReached={() => this.fetchMovies()}
        onRefresh={() => this.fetchMovies(1)}
        refreshing={moviesIsLoading}
        ListFooterComponent={moviesIsLoading && <ActivityIndicator size="large" color="#000" />}
      />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.renderMovieList()}
      </View>
    )
  }

  fetchMovies(selectPage = null) {
    const { page, total_pages } = this.props.movies

    if (page < total_pages) {
      const nextPage = selectPage || page + 1

      this.props.fetchMovies(nextPage)
    }
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  moviesIsLoading: state.movies.moviesIsLoading,
  moviesErrorMessage: state.movies.moviesErrorMessage,
  genres: state.genres.genres,
  genresIsLoading: state.genres.genresIsLoading,
  genresErrorMessage: state.genres.genresErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (page) => dispatch(MoviesActions.fetchMovies(page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
