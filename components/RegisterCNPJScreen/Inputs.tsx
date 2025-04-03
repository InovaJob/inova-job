import { View, Text, TextInput, StyleSheet } from "react-native";

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
                placeholderTextColor={"#3E5C76"}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: "transparent",
        padding: 8,
        marginBottom: 30,
        borderBottomColor: "#fff",
        borderBottomWidth: 0.8,
        color: "#3E5C76"
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: "#3E5C76",
        fontWeight: 600
    },
})