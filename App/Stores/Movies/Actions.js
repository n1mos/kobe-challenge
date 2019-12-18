import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchMovies: ['page'],
  fetchMoviesLoading: null,
  fetchMoviesSuccess: ['movies'],
  fetchMoviesFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
