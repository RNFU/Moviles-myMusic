/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Switch } from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  //Constructor del button
  constructor(props) {
    super(props);
    this.state = { //el estado
      switchValue: false, //variable global de la app
    };
  }
  onChange = (value) => { //cambiamos el estado del boton
    console.warn(`El switch cambiara a: ${value}`)
    this.setState({switchValue: value}) //con esto se setea el valor del estado del boton
  }
  onPressLearnMore() { //Funcion del boton handler
    console.warn('Presionaste el boton')
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.box, styles.red]}></View>
      <View style={[styles.box, styles.green]}></View>
      <View style={[styles.box, styles.blue]}></View>
    
        {/* <Switch  cuando el valor cambie, se mandara a la funcion el valor del state (true/false)
        onValueChange = {() =>this.onChange(!this.state.switchValue)} arrow fuction
        value = {this.state.switchValue}
        />                      shift+command+7    BOTON
        <Button agregamos este boton
          title="titulo"
          onPress={this.onPressLearnMore}
          tittle="learn more"
          color="#841584"
          accessibilityLabel="Learn more about this buttom"
        /> */}
      
        {/* <Text style={styles.welcome}>MyMusic - ApellidoPaterno y materno</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap' 
  },
  box: {
    width: 150,
    height:200,
    backgroundColor: 'black',
  },
  red: {
    //alignSelf: 'flex-end',
    backgroundColor: 'red',
    //flex:2,
  },
  green: {
    //alignSelf: 'center',
    backgroundColor: 'green',
    flex: 1,
  },
  blue: {
    //alignSelf: 'flex-start',
    backgroundColor: 'blue',
  },
});
