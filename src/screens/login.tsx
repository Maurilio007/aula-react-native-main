import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  function logar () {
    console.log('login', login, 'senha', senha);
    navigation.navigate("soma")
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl">Nosso app </Text>

        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => {
            setSenha(text);
          }}
        />

        <ButtonCustomizado
          title="Entrar"
          onPress={logar}
        />

        <View className="flex-row gap-4">
          <Text className="text-xl text-blue-400">Cadastra-se</Text>
          <Text className="text-xl">|</Text>
          <Text className="text-blue-400">Esqueceu a Senha?</Text>
        </View>
      </View>
    </View>
  );
}
