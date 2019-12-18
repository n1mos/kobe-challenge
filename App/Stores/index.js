import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as MoviesReducer } from './Movies/Reducers'
import { reducer as GenresReducer } from './Genres/Reducers'

export default () => {
  const rootReducer = combineReducers({
    movies: MoviesReducer,
    genres: GenresReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
