import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ProyectsScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Pages 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
  }
});