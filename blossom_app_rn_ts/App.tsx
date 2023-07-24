import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import Button from './app/components/Button';

interface Props{}

const App:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
      <Button/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{}
})