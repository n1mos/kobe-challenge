import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Movies/Actions'
import { GenresTypes } from 'App/Stores/Genres/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchMovies } from './MoviesSaga'
import { fetchGenres } from './GenresSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchMovies()` when a `FETCH_MOVIES` action is triggered
    takeLatest(ExampleTypes.FETCH_MOVIES, fetchMovies),
    takeLatest(GenresTypes.FETCH_GENRES, fetchGenres),
  ])
}
