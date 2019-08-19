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

  _onPressCancel = () => {
    this.setState({ disabled: false })
    return this.props.cancel()
  }

  render() {
    const { name, source, info } = this.props
    const { disabled } = this.state
    return (
      <View style={styles.imageView}>
        {/* <View> */}
          <Image
            source={source}
            style={styles.image}
          />
          <Text style={styles.name}>{name}</Text>  
          <Text style={styles.info}>{info}</Text>                  
          <TouchableOpacity style={styles.button(disabled)} disabled={disabled} onPress={this._onPress}>
            <Text style={styles.textButton}>Pilih</Text>          
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel} onPress={this._onPressCancel}>
            <Text style={styles.textButton}>Batal</Text> 
          </TouchableOpacity>
        {/* </View>
        <View style={styles.info}>
        </View> */}
      </View>
    )
  }
}

export default ImageContent