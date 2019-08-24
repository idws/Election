import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux';

import { Images } from '../../image/index'
import ImageComponent from '../ImageContentComponent/ImageContent.component'
import Modal from '../ThankYouComponent/ThankYou.component'
import Footer from '../FooterComponents/Footer.component'
import styles from './Content.styles'
import { post } from '../../actions';

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      totalCount: 0,
      totalSuara: 0,
      data:[],
      showConfirmation: false
    }
  }

  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  _post = item => () => {
    const index = item.index
    let candidates = [...this.state.data];
    let candidate = {...candidates[index]};
    candidate.count = candidate.count + 1;
    candidates[index] = candidate;
    return this.setState({ data: candidates, totalCount: this.state.totalCount + 1, showConfirmation: true });
}

  _cancel = item => () => {
    const { totalCount } = this.state
    const index = item.index
    let data = [...this.state.data];
    let candidate = {...data[index]};
    candidate.count = candidate.count - 1;
    data[index] = candidate;
    return this.setState({ data, totalCount: totalCount - 1 })
  }

  _onPressThanks = () => {
    this.props.post(this.state.data)
    this.setState({ showModal: false, totalCount: 0 })
  }

  _onConfirm = () => {
    this.setState({ showModal: true, showConfirmation: false })
  }

  _onCancel = () => {
    this.setState({ totalCount: 0, data: this.props.data })
  }

  _renderImageView = (item) => {
    const key = item.item.image
    return (
      <View style={styles.imageView}>
        <ImageComponent
          source={Images[key]}
          name={item.item.name}
          post={this._post(item)}
          cancel={this._cancel(item)}
          info={item.item.info}
        />
      </View>
    )
  }

  _renderRow = () => {
    const { data } = this.props
    return (
      <View style={styles.rowView}>
        <FlatList
          data={data}
          renderItem={this._renderImageView}
          numColumns={3}
          style={styles.flatList}
        />
      </View>
    )
  }

  _renderModal = (title, isHasCancel, onPress, onCancel) => {
    return (
      <View style={styles.modal}>
        <Modal
          title={title}
          onPress={onPress}
          onCancel={onCancel}
          isHasCancel={isHasCancel}
        />
      </View>
    )
  }

  _renderContent = () => {
    return (
      this.state.totalCount < 2 &&
      <ScrollView style={styles.scrollableView}>
        {this._renderRow()}
      </ScrollView>
    )
  }

  _onPressCount = () => {
    console.log(this.props.totalCount, 'TOTAL SUARA')
    console.table(this.props.data.sort((a, b) => {
      return b.count - a.count
    }), 'HASIL REKAP SUARA')
  }

  _onPressLook = () => {
    console.log(this.props.totalCount, 'TOTAL SUARA')
    console.table(this.props.data, 'HASIL PENGHITUNGAN SUARA')
  }


  render() {
    const { showConfirmation, showModal, totalCount } = this.state
    const showConfirmationModal = totalCount === 2 && showConfirmation == true
    return (
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Calon Wakil Ketua II / Formatur</Text>
          <Text style={styles.title}>Dewan Pastoral Paroki 2020-2022</Text>
        </View>
        { showModal && this._renderModal('Terimakasih telah memberikan suaramu', false, this._onPressThanks, ()=>{}) }
        { showConfirmationModal&& this._renderModal('Apakah Anda sudah yakin dengan pilihan Anda ?', true, this._onConfirm, this._onCancel) }
        {this._renderContent()}
        <Footer onPress={this._onPressCount} onPressLook={this._onPressLook}/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    totalCount: state.totalCount,
    state: state
  };
}

const mapDispatchToProps = {
  post
};

export default connect(mapStateToProps, mapDispatchToProps)(Content)
