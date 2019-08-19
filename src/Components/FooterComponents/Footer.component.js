import React, { Component } from 'react'
import { View, Text, Linking } from 'react-native'
import styles from './Footer.styles'

class Footer extends Component {

  _link = () => {
    return Linking.openURL('http://peterpaulbabadan.blogspot.co.id/')
  }

  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.topText}>Jl. Raya Tajem, Dolo, Pucanganom, Wedomartani</Text>
        <Text style={styles.topText}>Ngemplak, Sleman, DI. YOGYAKARTA, 55584</Text>
        <Text style={styles.topText} onPress={this._link}>Telp. 0274 – 870237 http://peterpaulbabadan.blogspot.co.id/</Text>
        <Text style={styles.credit}>Powered by: IDWS</Text>
      </View>
    )
  }
}

export default Footer
