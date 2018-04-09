import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <MyImage imgName='./images/Cartoon.png' />
    );
  }
}

class MyImage extends Component {
  render() {
    let pic = {
      uri: this.props.imgName
    };
    return (
      <Image source={require(pic)} style={{width: 220, height: 150,}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  }
});
