import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

export function TelaContador () { 
    const [contador, setContador] = useState(0);

    return (
        <View className="flex-1 items-center justify-center gap-5 ">
            <Text   className="text-4xl">{contador}</Text>

            <View className="flex flex-row p-24 gap-5">
                <ButtonCustomizado
                title="+"
                onPress={() => setContador(contador + 1)}
                />
                 <ButtonCustomizado
                title="-"
                onPress={() => setContador(contador - 1)}
                />
            </View>
        </View>

    )
}