import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Media() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState<number>(0);

  console.log('Valor1:', valor1);
  console.log('Valor2:', valor2);
  console.log('resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2]);

  function media() {
    const media = ((Number(valor1) + Number (valor2)) / 2 );
    setResultado(media);
  }
  return(
  <View className="flex-1 items-center justify-center">
    <View className="w-full items-center justify-center gap-4 p-4">
      <Text className="text-3xl text-gray-600">Media dos valores</Text>

      <InputCustomizado
        placeholder="valor1"
        keyboardType="decimal-pad"
        onChangeText={(text) => setValor1(text)}
      />
      <InputCustomizado
        placeholder="valor2"
        keyboardType="decimal-pad"
        onChangeText={(text) => setValor2(text)}
      />
      <ButtonCustomizado title="Media dos valores" onPress={media} />

      <Text>Resultado da Media: {resultado} </Text>
    </View>
  </View>
  )
}
