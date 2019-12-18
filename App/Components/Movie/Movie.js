import React from 'react'
import { View, Image, Text } from 'react-native'
import { uniq } from 'ramda'
import moment from 'moment'

import { Config } from 'App/Config'
import Touchable from 'App/Components/Touchable/Touchable'
import NavigationService from 'App/Services/NavigationService'
import Styles from './Movie.style'

const Movie = ({ data, page, genres }) => {
  const imageSource = {
    uri: data.backdrop_path ? `${Config.IMAGE_URL}${data.backdrop_path}` : Config.PLACEHOLDER_URL,
  }
  const release = moment(data.release_date).format('MMMM D, YYYY')

  const formatGenres = (genre_ids) => {
    let genreIds = uniq(genre_ids)
    let allGenres = ''

    genreIds = genreIds.forEach((id, index) => {
      allGenres += genres[id]

      if (index < genreIds.length - 1) {
        allGenres += ' / '
      }
    })

    return allGenres
  }

  const renderGenres = () => {
    const { genre_ids } = data
    const pageGenreStyle = { textAlign: 'left' }

    if (!page) {
      return <Text style={Styles.genre}>{genres[genre_ids[0]]}</Text>
    } else {
      return <Text style={[Styles.genre, pageGenreStyle]}>{formatGenres(genre_ids)}</Text>
    }
  }

  const renderContainer = () => {
    const pageInfoContainer = page && { flexDirection: 'column', height: 50 }

    return (
      <View style={Styles.container}>
        <View style={Styles.imageContainer}>
          <Image style={Styles.image} source={imageSource} resizeMode={'cover'} />
        </View>

        <View style={Styles.bottomContainer}>
          <Text style={Styles.title}>{data.title}</Text>

          <View style={[Styles.infoContainer, pageInfoContainer]}>
            <Text style={Styles.release}>{release}</Text>
            {renderGenres()}
          </View>
        </View>
      </View>
    )
  }

  const onPress = () => {
    NavigationService.navigate('MovieScreen', { data, genres })
  }

  if (page) {
    return renderContainer()
  } else {
    return <Touchable onPress={onPress}>{renderContainer()}</Touchable>
  }
}

export default Movie
