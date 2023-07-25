import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../Stack/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props{}

const SignIn:FC<Props> = ():JSX.Element => {
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParams>>()

  const navigateToSignUp=()=>{
   navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
        <Text>Sign in Screen</Text>
        <Button onPress={navigateToSignUp} title='Navigate to sign up'/>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  container:{}
})