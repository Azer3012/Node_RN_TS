import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const Home: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaWrapper>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {}
})