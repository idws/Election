import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from './ThankYou.styles'

class ThankYou extends Component {
  render() {
    return (
      // <Modal
      //   transparent={false}
      //   style={styles.modal}
      // >
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
      // </Modal>
    )
  }
}

export default ThankYou
