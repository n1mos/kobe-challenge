import React, { Component } from 'react'
import { View, Text, TextInput, Image } from 'react-native'

import { Images } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Touchable from 'App/Components/Touchable/Touchable'
import Styles from './Header.style'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
  }

  renderBackButton() {
    const { length } = this.props.options.navigation.state.routes
    const showBackButton = length > 1

    if (!showBackButton) {
      return <View />
    }

    return (
      <Touchable onPress={() => NavigationService.navigateBack()}>
        <View style={Styles.backContainer}>
          <Image style={Styles.back} source={Images.back} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  render() {
    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.subHeaderContainer}>
          {this.renderBackButton()}

          <View style={Styles.logoContainer}>
            <Image style={Styles.logo} source={Images.logo} resizeMode={'contain'} />
          </View>
        </View>

        <View style={Styles.searchContainer}>
          <View style={Styles.searchIconContainer} pointerEvents="none">
            <Image style={Styles.searchIcon} source={Images.search} resizeMode={'contain'} />
          </View>

          <TextInput
            style={Styles.searchInput}
            placeholder="Search"
            onChangeText={(text) => this.setState({ text })}
            underlineColorAndroid="transparent"
            value={this.state.text}
          />
        </View>
      </View>
    )
  }
}

export default Header
