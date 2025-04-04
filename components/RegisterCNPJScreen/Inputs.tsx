import { View, Text, TextInput } from "react-native";

import { style } from "@/styles/StyleComponents/register.cnpj.style";

import { inputProps } from "@/interfaces/componentInterfaces/InputProps";

export const InputCNPJScreen: React.FC<inputProps> = ({ label, placeholder, onChangeText, value }) => {
    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <TextInput
                style={style.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={"#A3B5C1"}
            />
        </View>
    )
}