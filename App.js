import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='EventsList' component={EventList} options={{ title: 'Your Events' }} />
        <Stack.Screen name='NewEvent' component={EventForm} options={{ title: 'Add New Form' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}