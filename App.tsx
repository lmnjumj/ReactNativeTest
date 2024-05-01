/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import Test from './src/Test';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
         <Test/>
    </SafeAreaView>
  );
}

export default App;
