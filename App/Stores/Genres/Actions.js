import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchGenres: null,
  fetchGenresLoading: null,
  fetchGenresSuccess: ['genres'],
  fetchGenresFailure: ['errorMessage'],
})

export const GenresTypes = Types
export default Creators
