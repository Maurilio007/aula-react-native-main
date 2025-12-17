import './global.css';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <>
      <SafeAreaView className="flex-1">
            <NavigationContainer>
              <Stack.Navigator> 
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="soma" component={Soma} />

              </Stack.Navigator>
            </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
