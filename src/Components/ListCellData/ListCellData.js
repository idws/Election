import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './ListCellData.styles'

class ListCellData extends Component {
  render() {
    const { name, count, info } = this.props
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.contentText}>{name}</Text>
        <Text style={styles.contentText}>{info}</Text>
        <Text style={styles.lastContentText}>{count}</Text>
      </View>
    )
  }
}

export default ListCellData
