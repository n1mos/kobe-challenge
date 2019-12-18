import React from 'react'

import { ScrollView, Text, View } from 'react-native'

import Styles from './MovieScreen.style'
import Movie from 'App/Components/Movie/Movie'

const MovieScreen = ({
  navigation: {
    state: {
      params: { data, genres },
    },
  },
}) => {
  return (
    <ScrollView style={Styles.scrollView}>
      <Movie page={true} genres={genres} data={data} />

      <View style={Styles.overviewContainer}>
        <Text style={Styles.title}>Overview</Text>

        <Text style={Styles.overview}>{data.overview}</Text>
      </View>
    </ScrollView>
  )
}

export default MovieScreen
