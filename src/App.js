import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from './Components/HeaderComponents/Header.component'
import Content from './Components/ContentComponent/Content.component'

class App extends Component {
  
  render() {
    // eslint-disable-next-line
    const firebaseConfig = {
      apiKey: "AIzaSyCjnG7fGjIUrz3z9GKjEjXKyH47cjVIRDc",
      authDomain: "election-77491.firebaseapp.com",
      databaseURL: "https://election-77491.firebaseio.com",
      projectId: "election-77491",
      storageBucket: "",
      messagingSenderId: "214166115802",
      appId: "1:214166115802:web:6a6a5fd8430ff86d"
    }

    return (
      <View style={styles.app}>
        <Header />
        <ScrollView>
          <Content />
        </ScrollView>
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/6.4.0/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use */}
        {/* https://firebase.google.com/docs/web/setup#reserved-urls --> */}

        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js"></script>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginHorizontal: '20',
    // maxWidth: 500
  }
});

export default App;
