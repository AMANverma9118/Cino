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
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { AuthProvider } from './context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <AuthProvider>
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
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </AuthProvider>
  </NavigationContainer>
);

export default App;