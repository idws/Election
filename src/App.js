import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './Components/HeaderComponents/Header.component'
import Content from './Components/ContentComponent/Content.component'

const initialState = {
  totalCount: 0,
  data:[
    { name: '1. Albertus Hartoyo', count: 0, image: 'no1', info: 'Lingk. St. Carolus' },
    { name: '2. Alb. M. Albert Christian', count: 0, image: 'no2', info: 'Lingk. St. Benediktus' },
    { name: '3. Albertus Sudarto', count: 0, image: 'no3', info: 'Lingk. St. Yohanes' },
    { name: '4. Antonius Purwaji', count: 0, image: 'no4', info: 'Lingk. St. Stefanus Martir' },
    { name: '5. E. Herry Hermawan', count: 0, image: 'no5', info: 'Lingk. Ratu Kenyo' },
    { name: '6. Emiliya Markini', count: 0, image: 'no6', info: 'Lingk. St. Antonius' },
    { name: '7. Fellisianus Triyono', count: 0, image: 'no7', info: 'Lingk. St. Skolastika' },
    { name: '8. Fransiscus Wijayanto', count: 0, image: 'no8', info: 'Lingk. St. Petrus' },
    { name: '9. Gabriel Arya Danurdara', count: 0, image: 'no9', info: 'Lingk. Emmanuel' },
    { name: '10. Gregorius Sudarto', count: 0, image: 'no10', info: 'Lingk. St. Antonius' },
    { name: '11. HEP Dwi Marjoko', count: 0, image: 'no11', info: 'Lingk. St. Pius' },
    { name: '12. Ignasia Suryaningsih', count: 0, image: 'no12', info: 'Lingk. St. Carolus' },
    { name: '13. Irene Katharina Kasiyati', count: 0, image: 'no13', info: 'Lingk. St. Paulus' },
    { name: '14. Juventius Devi Suntoro', count: 0, image: 'no14', info: 'Lingk. St. Maria Ratu Rosari' },
    { name: '15. Katarina Susi Indreswari', count: 0, image: 'no15', info: 'Lingk. St. Robertus' },
    { name: '16. Kristiana Trisnawati', count: 0, image: 'no16', info: 'Lingk. St. Fransiskus Asisi' },
    { name: '17. L. Yulianto Endro', count: 0, image: 'no17', info: 'Lingk. St. Sisilia' },
    { name: '18. M. Theresia Budi W. S.', count: 0, image: 'no18', info: 'Lingk. St. Helena' },
    { name: '19. Mb. Retno Sari H.', count: 0, image: 'no19', info: 'Lingk. St. Agustinus Hippo' },
    { name: '20. Peter Eka Rosadi', count: 0, image: 'no20', info: 'Lingk. St. Katarina Laboure' },
    { name: '21. Petrus Sumadiyana', count: 0, image: 'no21', info: 'Lingk.St. Vincensius' },
    { name: '22. Philipus Daru Sarjito', count: 0, image: 'no22', info: 'Lingk. St. Carolus' },
    { name: '23. R. Dandun Sarjito', count: 0, image: 'no23', info: 'Lingk.St. Maria Ratu Rosari' },
    { name: '24. T. Tonny Haryanto', count: 0, image: 'no24', info: 'Lingk. St. Katarina Laboure' },
    { name: '25. Yakobus Ngadiyana', count: 0, image: 'no25', info: 'Lingk. St. Paulus' },
    { name: '26. Yohanes Yuli Farmanto', count: 0, image: 'no26', info: 'Lingk. St. Ignatius' }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'POST_DATA':
      return {
        data: action.payload,
        totalCount: state.totalCount + 1
      };
    default:
      return state;
  }
}


const store = createStore(reducer)
class App extends Component {
  
  render() {

    return (
      <Provider store={store}>
        <View style={styles.app}>
          <ScrollView>
            <Header />
            <Content />
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginHorizontal: '20',
  }
});

export default App;
