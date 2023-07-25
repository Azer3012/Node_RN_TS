
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesStackParamList } from './types';
import { Categories, Category } from '../screens';


interface Props{}

const Stack=createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStack:FC<Props> = ():JSX.Element => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{headerShown:false}} />
        <Stack.Screen name="Category" component={Category} options={{headerShown:false}}/>
        <Stack.Screen name="CreateCategory" component={Category} options={{headerShown:false}} />
        
    </Stack.Navigator>
  )
}

export default CategoriesStack;