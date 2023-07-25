import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import Button from './app/components/Button';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/Stack/AuthStack';
import Tabs from './app/Stack/Tab';

interface Props{}

const App:FC<Props> = ():JSX.Element => {
  return (
    <NavigationContainer>
      {/* <AuthStack/> */}
      <Tabs/>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{}
})