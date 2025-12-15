import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function ParImpar() {
    const [valor, setValor]  = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        setResultado('');
    }, [valor])

    function ParImpar() {
        const numero = Number (valor);

        if (numero % 2 === 0 ){
             setResultado('O numero é par');
        }
        else {
            setResultado('O numero é impar');
        }
    }
    return (
        <View className="flex-1 items-center justify-center">
              <View className="w-full items-center justify-center gap-4 p-4">
                <Text className='text-3xl'>Impar e Par</Text>
                <InputCustomizado value={valor} onChangeText={setValor} keyboardType="numeric"/>
                <ButtonCustomizado title="resultado" onPress={ParImpar}/>
                <Text className="text3xl"> {resultado} </Text>
            </View>
        </View>

    )
}
