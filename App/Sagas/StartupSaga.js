import { put } from 'redux-saga/effects'

import MoviesActions from 'App/Stores/Movies/Actions'
import GenresActions from 'App/Stores/Genres/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* startup() {
  yield put(MoviesActions.fetchMovies())

  yield put(GenresActions.fetchGenres())

  NavigationService.navigateAndReset('MainScreen')
}
