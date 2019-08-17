import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './ThankYou.styles'

class ThankYou extends Component {
  render() {
    return (
      <View style={styles.modal}>
        <View style={styles.mainContainer}>
          <View style={styles.coloredView}>
            <Text style={styles.text}>Terimakasih telah memberikan suaramu</Text>
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
              <Text style={styles.textButton}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default ThankYou
