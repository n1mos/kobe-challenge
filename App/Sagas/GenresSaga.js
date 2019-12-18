import { put, call } from 'redux-saga/effects'
import GenresActions from 'App/Stores/Genres/Actions'
import { genresService } from 'App/Services/GenresService'

export function* fetchGenres() {
  yield put(GenresActions.fetchGenresLoading())

  const genres = yield call(genresService.fetchGenres)

  if (genres) {
    yield put(GenresActions.fetchGenresSuccess(genres))
  } else {
    yield put(GenresActions.fetchGenresFailure('There was an error. Please try again later.'))
  }
}
