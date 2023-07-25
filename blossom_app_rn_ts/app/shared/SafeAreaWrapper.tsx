import { StyleSheet, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props{
    children:ReactNode
}

const SafeAreaWrapper:FC<Props> = ({children}):JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})