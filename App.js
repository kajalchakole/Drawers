import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserScreen from './screens/UserScreen.js';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return <NavigationContainer >
    <BottomTab.Navigator initialRouteName='User'
    screenOptions = {{
      headerStyle: { backgroundColor: '#3c0a6b' },
      headerTintColor: '#fff',
      tabBarActiveTintColor: '#3c0a6b',
    }} >
      <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
      }}/>
      <BottomTab.Screen name='User' component={UserScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />
      }}/>
    </BottomTab.Navigator>
  </ NavigationContainer>
}
