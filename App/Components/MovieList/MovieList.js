import React from 'react'

import { FlatList, Text, View } from 'react-native'

import Styles from './MovieList.style'
import Movie from 'App/Components/Movie/Movie'

const MovieList = ({ title, data, onRefresh, onEndReached, ListFooterComponent, refreshing }) => {
  const genres = {}

  if (data.genres) {
    data.genres.forEach((value) => (genres[value['id']] = value['name']))
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        style={Styles.list}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={({ item }) => <Movie page={false} genres={genres} data={item} />}
        keyExtractor={(item) => `movie-${item.id}`}
        ListHeaderComponent={() => <Text style={Styles.title}>{title}</Text>}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default MovieList
