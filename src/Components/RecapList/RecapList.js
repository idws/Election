import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import ListCell from '../ListCellData/ListCellData'
import styles from './RecapList.styles'

class RecapList extends Component {

  _renderItem = (item) => {
    console.log(item, 'item')
    return (
      <ListCell
        name={item.item.name}
        info={item.item.info}
        count={item.item.count}
      />
    )
  }


  render() {
    const { data, totalCount } = this.props
    console.log(data, 'data')
    return (
      <View style={styles.mainContainer}>
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
          <Text style={styles.titleText}>HASIL PEMILIHAN</Text>
        </View>
        <View style={styles.headerTable}>
          <Text style={styles.headerText}>Nama Calon</Text>
          <Text style={styles.headerText}>Asal Lingkungan</Text>
          <Text style={styles.headerText}>Total Suara</Text>
        </View>
        <FlatList
          data={data}
          renderItem={this._renderItem}
        />
        <Text style={styles.footerText}>{`Jumlah Total Suara: ${totalCount} Suara`}</Text>
      </View>
    )
  }
}

export default RecapList
