import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';

interface Props{}

const Welcome:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
        <Text>Welcome</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container:{}
})