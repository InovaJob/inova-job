import { View, Text, TextInput, StyleSheet } from "react-native";

interface inputProps {
    label?: any;
    placeholder?: any;
    onChangeText?: any;
    value?: any
}

export const InputCNPJScreen: React.FC<inputProps> = ({ label, placeholder, onChangeText, value }) => {
    return (
        <View>
            <Text style={style.label}>{label}</Text>
            <TextInput
                style={style.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
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
    },
    label: {
        fontSize: 15,
        marginBottom: 8,
        color: "#fff",
    },
})