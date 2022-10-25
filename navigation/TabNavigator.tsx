import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProyectsScreen } from '../src/screens/ProyectsScreen';
import { HabitsScreen } from '../src/screens/HabitsScreen';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

//Constante receptora de -createBottomTabNavigator-
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    const navigatio = useNavigation();
  return (
    <Tab.Navigator
    screenOptions={ ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let nameIcon='';
        switch(route.name){
          case 'page1':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'page2':
            nameIcon= focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >
      {/* #10 Generamos las Screens */}
        {/* Screen Proyectos */}
      <Tab.Screen 
        name='page1'
        component={ ProyectsScreen } 
        options={{
          tabBarLabel: "Page1",
          title: 'Page1',
           headerLeft: () => {
            return (
            <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
              <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          );
        },
        }} 
      /> 
        {/* Screen Habitos */}
      <Tab.Screen 
        name='page2'
        component={ HabitsScreen } 
        options={{
          tabBarLabel: 'Page2',
          headerLeft: () => {
          return (
            <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
              <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          );
        },
        }}
      />
        {/* Screen Tareas */}
    </Tab.Navigator>
  )
}
