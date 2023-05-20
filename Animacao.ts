//npm install react-native-animatable



import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

class WeatherAnimation extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Animatable.Text
            animation="zoomIn"
            iterationCount="infinite"
            style={{ fontSize: 80, fontWeight: 'bold' }}
          >
            ☀️
          </Animatable.Text>
        </View>
      );
    }
  }

  
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import WeatherAnimation from './WeatherAnimation';
  
  export default function App() {
    return (
      <View style={styles.container}>
        <WeatherAnimation />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  
//npx react-native run-android (ou run-ios)
