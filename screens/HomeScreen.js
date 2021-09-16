import React, { Component } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends Component{
  render(){
      return(
        <View style={styles.container}>
          <LinearGradient 
          colors={['yellow', 'blue']} 
          start={{x:0,y: 10}}
          end={{x: 10,y: 0}}
          style={styles.box}
          >
            <TextInput 
              style={styles.inputBox}
              placeholder="Enter Your Name"
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Age"
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Gender"
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Weight"
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Height"
            />
          </LinearGradient>
  
          <LinearGradient
            colors={['#c0392b', '#f1c40f', '#8e44ad']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.button}
          >
            <TouchableOpacity>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </LinearGradient>
      </View>
    );
  }
}

  
const styles = StyleSheet.create({
  container: {
    flex:0.5
  },
  box: {
    width: '100%',
    height: "100%",
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24
  },
  inputBox:{
    height:40,
    borderWidth:1,
    padding:10,
    margin:10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
});