
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn, SignUp, Welcome } from '../screens';

interface Props{}

const Stack=createNativeStackNavigator()

const AuthStack:FC<Props> = ():JSX.Element => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SingIn" component={SignIn} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack;

