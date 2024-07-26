import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen.js';
import UserScreen from './screens/UserScreen.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator initialRouteName='User'>
      <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
        headerStyle: {
          backgroundColor: '#3c0a6b',
        },
        headerTintColor: '#fff',
        drawerLabel: 'Welcome Screen',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle: {
          backgroundColor:'#ccc'
        }
      }} />
      <Drawer.Screen name='User' component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
}
