/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer/CustomDrawer';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import ViewTimeSheets from './src/screens/ViewTimeSheets';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerView() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
        width: 270,
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#1A99CE',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor: '#002F72',
        labelStyle: {fontSize: 18},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={DrawerView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewTimeSheets"
          component={ViewTimeSheets}
          options={{headerTitle: 'View Timesheets', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
