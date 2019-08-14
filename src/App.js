import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Header from './Components/HeaderComponents/Header.component'
import Content from './Components/ContentComponent/Content.component'

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Header />
        <ScrollView>
          <Content />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginHorizontal: '20',
    // maxWidth: 500
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
