import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GenresTypes } from './Actions'

export const fetchGenresLoading = (state) => ({
  ...state,
  genresIsLoading: true,
  genresErrorMessage: null,
})

export const fetchGenresSuccess = (state, { genres }) => ({
  ...state,
  genres,
  genresIsLoading: false,
  genresErrorMessage: null,

})

export const fetchGenresFailure = (state, { errorMessage }) => ({
  ...state,
  genres: {},
  genresIsLoading: false,
  genresErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [GenresTypes.FETCH_GENRES_LOADING]: fetchGenresLoading,
  [GenresTypes.FETCH_GENRES_SUCCESS]: fetchGenresSuccess,
  [GenresTypes.FETCH_GENRES_FAILURE]: fetchGenresFailure,
})
