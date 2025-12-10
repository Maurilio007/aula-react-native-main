import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Telasoma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [resultado, setResultado] = useState<number>(0);

  console.log('Valor1:', valor1);
  console.log('Valor2:', valor2);
  console.log('Valor3:', valor3)
  console.log('resultado:', resultado);

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2, valor3]);

  function somar() {
    const soma = Number(valor1) + Number(valor2) + Number(valor3);
    setResultado(soma);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-4 p-4">
        <Text className="text-3xl text-gray-600">Soma dos valores</Text>

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
         <InputCustomizado
          placeholder="valor3"
          keyboardType="decimal-pad"
          onChangeText={(text) => setValor3(text)}
        />

        <ButtonCustomizado title="Somar os valores" onPress={somar} />

        <Text>Resultado da soma: {resultado} </Text>
      </View>
    </View>
  );
}
