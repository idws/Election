import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { Images } from '../../image/index'
import ImageComponent from '../ImageContentComponent/ImageContent.component'
import Modal from '../ThankYouComponent/ThankYou.component'
import Footer from '../FooterComponents/Footer.component'
import styles from './Content.styles'


class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      totalCount: 0,
      data:[
        { name: 'Albertus Hartoyo', count: 0, image: 'no1', info: 'Lingk. St. Carolus' },
        { name: 'Alb. Magnus Albert Christian', count: 0, image: 'no2', info: 'Lingk. St. Benediktus' },
        { name: 'Albertus Sudarto', count: 0, image: 'no3', info: 'Lingk. St. Benediktus' },
        { name: 'Antonius Purwaji', count: 0, image: 'no4', info: 'Lingk. St. Benediktus' },
        { name: 'Eduardus Herry Hermawan', count: 0, image: 'no5', info: 'Lingk. St. Benediktus' },
        { name: 'Emiliya Markini', count: 0, image: 'no6', info: 'Lingk. St. Benediktus' },
        { name: 'Fellisianus Triyono', count: 0, image: 'no7', info: 'Lingk. St. Benediktus' },
        { name: 'Fransiscus Wijayanto', count: 0, image: 'no8', info: 'Lingk. St. Benediktus' },
        { name: 'Gabriel Arya Danurdara', count: 0, image: 'no9', info: 'Lingk. St. Benediktus' },
        { name: 'Gregorius Sudarto', count: 0, image: 'no10', info: 'Lingk. St. Benediktus' },
        { name: 'HEP Dwi Marjoko', count: 0, image: 'no11', info: 'Lingk. St. Benediktus' },
        { name: 'Ignasia Suryaningsih', count: 0, image: 'no12', info: 'Lingk. St. Benediktus' },
        { name: 'Irene Katharina Kasiyati', count: 0, image: 'no13', info: 'Lingk. St. Benediktus' },
        { name: 'Juventius Devi Suntoro', count: 0, image: 'no14', info: 'Lingk. St. Benediktus' },
        { name: 'Katarina Susi Indreswari', count: 0, image: 'no15', info: 'Lingk. St. Benediktus' },
        { name: 'Kristiana Trisnawati', count: 0, image: 'no16', info: 'Lingk. St. Benediktus' },
        { name: 'Laurentius Yulianto Endro', count: 0, image: 'no17', info: 'Lingk. St. Benediktus' },
        { name: 'Maria Theresia Budi Wahyu S.', count: 0, image: 'no18', info: 'Lingk. St. Benediktus' },
        { name: 'Mb. Retno Sari Handayani', count: 0, image: 'no19', info: 'Lingk. St. Benediktus' },
        { name: 'Peter Eka Rosadi', count: 0, image: 'no20', info: 'Lingk. St. Benediktus' },
        { name: 'Petrus Sumadiyana', count: 0, image: 'no21', info: 'Lingk. St. Benediktus' },
        { name: 'Philipus Daru Sarjito', count: 0, image: 'no22', info: 'Lingk. St. Benediktus' },
        { name: 'Romualdus Dandun Sarjito', count: 0, image: 'no23', info: 'Lingk. St. Benediktus' },
        { name: 'Theodorus Tonny Haryanto', count: 0, image: 'no24', info: 'Lingk. St. Benediktus' },
        { name: 'Yakobus Ngadiyana', count: 0, image: 'no25', info: 'Lingk. St. Benediktus' },
        { name: 'Yohanes Yuli Farmanto', count: 0, image: 'no26', info: 'Lingk. St. Benediktus' }
      ],
    }
  }

  _post = item => () => {
    const index = item.index
    let data = [...this.state.data];
    let candidate = {...data[index]};
    candidate.count = candidate.count + 1;
    data[index] = candidate;
    return this.setState({ data, totalCount: this.state.totalCount + 1 });
}

  _cancel = () => {
    return this.setState({ totalCount: 0 })
  }

  _onPressThanks = () => {
    this.setState({ totalCount: 0 })
  }

  _renderImageView = (item) => {
    const key = item.item.image
    return (
      <View style={styles.imageView}>
        <ImageComponent
          source={Images[key]}
          name={item.item.name}
          post={this._post(item)}
          cancel={this._cancel}
          info={item.item.info}
        />
      </View>
    )
  }

  _renderRow = () => {
    const { data } = this.state
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

  _renderModal = () => {
    return (
      this.state.totalCount === 2 &&
      <View style={styles.modal}>
        <Modal onPress={this._onPressThanks} />
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


  render() {
    console.log(this.state, 'data')
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
