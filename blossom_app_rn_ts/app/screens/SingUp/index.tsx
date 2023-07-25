import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Stack/types';
import SafeAreaWrapper from '../../shared/SafeAreaWrapper';

interface Props { }

const SignUp: FC<Props> = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>()

  const navigateToSignIn = () => {
    navigation.navigate("SingIn")
  }
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Sign up screen</Text>
        <Button title='Navigate to sign in' onPress={navigateToSignIn} />
      </View>
    </SafeAreaWrapper>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {}
})