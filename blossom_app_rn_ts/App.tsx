import { StatusBar, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import Button from './app/components/Button';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/Stack/AuthStack';
import Tabs from './app/Stack/Tab';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Props{}

const App:FC<Props> = ():JSX.Element => {
  return (
    <SafeAreaProvider>

    
    <NavigationContainer>
      {/* <AuthStack/> */}
      <Tabs/>
    </NavigationContainer>
    {/* <StatusBar translucent/> */}
    </SafeAreaProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{}
})