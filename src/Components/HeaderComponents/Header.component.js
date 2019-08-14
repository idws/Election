import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from '../../image/index'
import styles from './Header.styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={Images.logo}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Komisioner Pemilihan</Text>
          <Text style={styles.subtitle}>Paroki St. Petrus & Paulus Babadan</Text>
          <Text style={styles.subtitle}>Keuskupan Agung Semarang</Text>
        </View>
      </View>
    )
  }
}

export default Header
