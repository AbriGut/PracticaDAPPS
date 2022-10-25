import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const ContactPage = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Opción 3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
  }
});