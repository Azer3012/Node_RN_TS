import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const Today: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>

      </View>
    </SafeAreaWrapper>
  )
}

export default Today;

const styles = StyleSheet.create({
  container: {}
})