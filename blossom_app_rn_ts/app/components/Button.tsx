import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';

interface ButtonProps{
    onPress:()=>void,
    title:string
}

const Button:FC<ButtonProps> = ({onPress,title}):JSX.Element => {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
  container:{}
})