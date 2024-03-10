import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Tour from './components/Tour.js'
import { useEffect } from 'react';
import TextExample from './components/TextExample.js';

export default function App() {
    useEffect(() => {
        SplashScreen.hide();
      }, [])
      return (
        // <TextExample/>
        <Tour />
     )
}

