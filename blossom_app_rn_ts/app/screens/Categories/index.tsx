import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const Categories: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>

      </View>
    </SafeAreaWrapper>
  )
}

export default Categories;

const styles = StyleSheet.create({
  container: {}
})