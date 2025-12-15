import './global.css';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { Telasoma } from '@/screens/Telasoma';
import { TelaContador } from '@/screens/TelaContador';
import { Media } from '@/screens/media';
import { ParImpar } from '@/screens/Impar_Par';
export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
       <ParImpar/>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}
