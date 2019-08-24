import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './ThankYou.styles'

class ThankYou extends Component {

  _renderSecondaryButton = () => {
    const { onCancel, onPress } = this.props
    return (
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button(true)} onPress={onCancel}>
          <Text style={styles.textButton(true)}>BATAL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button(false)} onPress={onPress}>
          <Text style={styles.textButton(false)}>YA</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.modal}>
        <View style={styles.mainContainer}>
          <View style={styles.coloredView}>
            <Text style={styles.text}>{this.props.title}</Text>
            {
              this.props.isHasCancel
              ? this._renderSecondaryButton()
              : <TouchableOpacity style={styles.button(false)} onPress={this.props.onPress}>
                  <Text style={styles.textButton(false)}>OK</Text>
                </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default ThankYou
