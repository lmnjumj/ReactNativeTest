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

function Test(): React.JSX.Element {
  const onPressButton = () => {
    // 버튼이 눌렸을 때 수행할 동작을 여기에 추가하세요.
    console.log("Button pressed");
  };
  return (
    <SafeAreaView>
         <TouchableOpacity onPress={onPressButton}>
            <Text >버튼</Text>
         </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Test;