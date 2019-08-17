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
        { name: 'Lebron James', count: 0 },
        { name: 'Kevin Durant', count: 0 },
        { name: 'Anthony Davis', count: 0 },
        { name: 'Stephen Curry', count: 0 },
        { name: 'James Harden', count: 0 },
        { name: 'Kawhi Leonard', count: 0 },
        { name: 'Kyrie Irving', count: 0 },
        { name: 'Klay Thompson', count: 0 },
        { name: 'Joel Embiid', count: 0 },
        { name: 'Draymond Green', count: 0 },
        { name: 'Luka Doncic', count: 0 },
        { name: 'Kyle Lowry', count: 0 },
        { name: 'Demarcus Cousin', count: 0 },
        { name: 'Gianis Antetokoumpo', count: 0 },
        { name: 'Jason Tatum', count: 0 },
        { name: 'Russel Westbrook', count: 0 },
        { name: 'Gordon Hayward', count: 0 },
        { name: 'Kristapz Porzingis', count: 0 },
        { name: 'Bradley Beal', count: 0 },
        { name: 'Jokic', count: 0 },
        { name: 'Paul George', count: 0 },
        { name: 'Donovan Mitchell', count: 0 },
        { name: 'Paul George', count: 0 },
        { name: 'Pau Gasol', count: 0 },
        { name: 'Myles Turner', count: 0 }
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

  // _post = item => () => {
  //   const { totalCount, data } = this.state
  //   const index = item.index
  //   console.log(item, 'item')    
  //   return this.setState({ [data[index].count]: data[index].count + 1, totalCount: totalCount + 1})
  //   // return console.log('should post the vote')
  // }

  _cancel = () => {
    return this.setState({ totalCount: 0 })
  }

  _onPressThanks = () => {
    this.setState({ totalCount: 0 })
  }

  _renderImageView = (item) => {
    return (
      <View style={styles.imageView}>
        <ImageComponent
          source={Images.noImage}
          name={item.item.name}
          post={this._post(item)}
          cancel={this._cancel}
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
          numColumns={5}
          style={styles.flatList}
        />
        {/* <FlatList
          data={candidate2}
          renderItem={this._renderImageView}
        />
        <FlatList
          data={candidate3}
          renderItem={this._renderImageView}
        />
        <FlatList
          data={candidate4}
          renderItem={this._renderImageView}
        />
        <FlatList
          data={candidate5}
          renderItem={this._renderImageView}
        /> */}

        {/* {this._renderImageView(candidate[0].name)}
        {this._renderImageView(candidate[1].name)}
        {this._renderImageView(candidate[2].name)}
        {this._renderImageView(candidate[3].name)}
        {this._renderImageView(candidate[4].name)} */}
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
        {/* {this._renderRow()}
        {this._renderRow()}
        {this._renderRow()}
        {this._renderRow()} */}
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
