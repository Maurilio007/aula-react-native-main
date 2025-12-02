import { Button, ButtonProps, View } from 'react-native';

export function ButtonCustomizado({ ...rest }: ButtonProps) {
  return (
    <View className="w-full">
      <Button {...rest}  />
    </View>
  );
}
