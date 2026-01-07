import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './screens/EditProfileScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import HomeScreen from './screens/HomeScreen';
import WishlistScreen from './screens/WishListScreen';
import CategoryPage from './screens/CategoryScreen';
import NewPage from './screens/NewScreen';
import ReelScreen from './screens/ReelScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false, animation: 'fade' }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="WishList" component={WishlistScreen} />
      <Stack.Screen name="Category" component={CategoryPage} />
      <Stack.Screen name="NewPage" component={NewPage} />
      <Stack.Screen name="ReelScreen" component={ReelScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;