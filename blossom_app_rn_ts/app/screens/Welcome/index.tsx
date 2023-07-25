import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const Welcome: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    </SafeAreaWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {}
})