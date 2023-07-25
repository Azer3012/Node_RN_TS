import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../Stack/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const SignIn: FC<Props> = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  const navigateToSignUp = () => {
    navigation.navigate("SignUp")
  }
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Sign in Screen</Text>
        <Button onPress={navigateToSignUp} title='Navigate to sign up' />
      </View>
    </SafeAreaWrapper>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  container: {}
})