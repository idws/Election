import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Images } from '../../image/index'
import ImageComponent from '../ImageContentComponent/ImageContent.component'
import Modal from '../ThankYouComponent/ThankYou.component'
import Footer from '../FooterComponents/Footer.component'
import styles from './Content.styles'

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  _post = () => {
    this.setState({ count: this.state.count + 1 })
    return console.log('should post the vote')
  }

  _onPressThanks = () => {
    this.setState({ count: 0 })
  }

  _renderImageView = () => {
    return (
      <ImageComponent
        source={Images.noImage}
        name='Lebron James'
        post={this._post}
      />
    )
  }

  _renderRow = () => {
    return (
      <View style={styles.rowView}>
        {this._renderImageView()}
        {this._renderImageView()}
        {this._renderImageView()}
        {this._renderImageView()}
        {this._renderImageView()}
      </View>
    )
  }

  _renderModal = () => {
    return (
      this.state.count === 2 &&
      <View style={styles.modal}>
        <Modal onPress={this._onPressThanks} />
      </View>
    )
  }

  _renderContent = () => {
    return (
      this.state.count < 2 &&
      <ScrollView style={styles.scrollableView}>
        {this._renderRow()}
        {this._renderRow()}
        {this._renderRow()}
        {this._renderRow()}
        {this._renderRow()}
      </ScrollView>
    )
  }


  render() {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Calon Wakil Ketua II / Formatur Dewan Pastoral Paroki 2020-2022</Text>
        </View>
        {this._renderModal()}
        {this._renderContent()}
        <Footer/>
      </View>
    )
  }
}

export default Content
