import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types';
import { EditTask, Home } from '../screens';

interface Props{}

const Stack=createNativeStackNavigator<HomeStackParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="EditTask" component={EditTask} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default HomeStack;

const styles = StyleSheet.create({
  container:{}
})