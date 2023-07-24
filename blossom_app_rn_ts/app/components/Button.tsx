import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';

interface Props{}

const Button:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
        <Text>Button</Text>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  container:{}
})