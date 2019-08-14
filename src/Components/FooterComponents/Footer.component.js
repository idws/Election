import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Footer.styles'

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.topText}>Jl. Raya Tajem, Dolo, Pucanganom, Wedomartani</Text>
        <Text style={styles.topText}>Ngemplak, Sleman, DI. YOGYAKARTA, 55584</Text>
        <Text style={styles.topText}>Telp. 0274 – 870237 http://peterpaulbabadan.blogspot.co.id/</Text>

      </View>
    )
  }
}

export default Footer
