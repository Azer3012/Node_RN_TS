import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const EditTask: FC<Props> = (): JSX.Element => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>

      </View>
    </SafeAreaWrapper>
  )
}

export default EditTask;

const styles = StyleSheet.create({
  container: {}
})