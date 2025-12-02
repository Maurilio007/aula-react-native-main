import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from 'react';
import { Text, View } from "react-native";

export function LoginScreen() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full p-5 gap-5 items-center">
        <Text className="text-3xl">Nosso app </Text>

        <InputCustomizado 
          placeholder={"Login"}
          onChangeText={(text) => {setLogin(text)}}
        />
        <InputCustomizado 
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => {setSenha(text)}}
          
        />

        <ButtonCustomizado title="Entrar" onPress={() => console.log("login", login, "senha", senha)} />

        <Text className="text-blue-400">
          Esqueceu a Senha?
        </Text>
      </View>
    </View>
  )
}