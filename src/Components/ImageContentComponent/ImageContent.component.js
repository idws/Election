import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './ImageContent.styles'

class ImageContent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      disabled: false
    }
  }

  _onPress = () => {
    this.setState({ disabled: true })
    this.props.post()
  }

  render() {
    const { name, source } = this.props
    const { disabled } = this.state
    return (
      <View style={styles.imageView}>
        <Image
          source={source}
          style={styles.image}
        />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button(disabled)} disabled={disabled} onPress={this._onPress}>
          <Text style={styles.textButton}>Pilih</Text>          
        </TouchableOpacity>
      </View>
    )
  }
}

export default ImageContent