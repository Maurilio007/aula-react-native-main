import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { getData, storeData } from "utils/storage";

export function ListaNumeroScreen() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState<number[]>([]);


  async function adicionarItem() {
    setLista([...lista, Number(item)]);

    await storeData({key: "ListaNumero", value: JSON.stringify([...lista, Number(item)])});
    setItem("");
  }

  async function limpaLista() {
    setLista([]);

    await storeData({key: "ListaNumero", value: JSON.stringify([])});
  }

  async function carregarLista() {
    const dados = await getData("ListaNumero") || [];
    

    setLista(dados);
  }
  useEffect(() => {
        carregarLista();
    }, []);


  return(
    <View className="flex-1 items-center gap-4 p-3">
      <Text className="text-4xl m-3">
        Lista de itens
      </Text>
      <InputCustomizado 
        placeholder="item" 
        value={item} 
        onChangeText={(text) => setItem(text)}
      />
      <ButtonCustomizado 
        title="Adicionar" 
        onPress={adicionarItem}
      />
      <ButtonCustomizado 
        title="Limpar Lista" 
        onPress={limpaLista}
      />

      <ScrollView className="w-full mt-5 p-3 border border-gray-300 rounded-lg gap-5">
        {lista.map((item, index) => (
          <Text 
            key={index} 
            className="text-2xl"
          >
            {item} - {item % 2 === 0? "Par" : "Impar"}
          </Text>
        ))}
      </ScrollView>

    </View>
  )
}