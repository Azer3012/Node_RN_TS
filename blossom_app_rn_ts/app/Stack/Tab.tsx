import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from './types';
import HomeStack from './HomeStack';
import Completed from '../screens/Completed';
import { Today } from '../screens';
import CategoriesStack from './CategoriesStack';
import Icons from '../shared/icons';
import colors from '../values/colors';

interface Props{}

const Tab=createBottomTabNavigator<RootBottomTabParamList>()

const Tabs:FC<Props> = ():JSX.Element => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor:colors.gray550,
      tabBarActiveTintColor:"black",
      tabBarHideOnKeyboard:true
    }}
    
    >
        <Tab.Screen name="HomeStack" component={HomeStack}
        options={()=>({
          title:"Home",
          tabBarIcon:({color})=><Icons name='home' color={color}/>,
          headerShown:false

        })}
        
        />
        <Tab.Screen name="Completed" component={Completed}
        
        options={()=>({
          title:"Completed",
          tabBarIcon:({color})=><Icons name='completed' color={color}/>,
          headerShown:false

        })}
        
        
        />
        <Tab.Screen name="Today" component={Today}
        
        options={()=>({
          title:"Today",
          tabBarIcon:({color})=><Icons name="calendar" color={color}/>,
          headerShown:false

        })}
        
        />
        <Tab.Screen name="CategoriesStack" component={CategoriesStack}
        
        options={()=>({
          title:"Categories",
          tabBarIcon:({color})=><Icons name="categories" color={color}/>,
          headerShown:false

        })}
        
        
        />
    </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({
  container:{}
})