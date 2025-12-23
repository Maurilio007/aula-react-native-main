import './global.css';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'interface/rootPages';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="ListaNumero" 
            screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="soma" component={Soma} />
            <Stack.Screen name="ListaNumero" component={Soma} />
             <Stack.Screen name="Lista" component={Soma} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
