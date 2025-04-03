import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function App() {
    const [NomeEmpresa, setNomeEmprea] = useState("");
    const [Cep, setCep] = useState("");
    const [Localidade, setLocalidade] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [EmailCorporativo, setEmailcoporativo] = useState("");
    const [Senha, setSenha] = useState("");
    const [ConfirmarSenha, setConfirmarSenha] = useState("");
    const [Cnpj, setCnpj] = useState("");

    return (
        <View style={style.container}>
            <Text style={style.title}>Vamos começar!</Text>
            <Text style={style.subtitle}>Criar uma conta para sua Empresa</Text>

            <Text style={style.label}>Nome da Empresa</Text>
            <TextInput
                style={style.input}
                placeholder="Nome Empresa"
                value={NomeEmpresa}
                onChangeText={setNomeEmprea}
            />

            <Text style={style.label}>CEP</Text>
            <TextInput
                style={style.input}
                placeholder="CEP"
                value={Cep}
                onChangeText={setCep}
                keyboardType="numeric"
            />

            <Text style={style.label}>Localidade</Text>
            <TextInput
                style={style.input}
                placeholder="Loclidade"
                value={Localidade}
                onChangeText={setLocalidade}
            />

            <Text style={style.label}>Telefone</Text>
            <TextInput
                style={style.input}
                placeholder="Telefone"
                value={Telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
            />

            <TouchableOpacity style={style.button}>
                <Text style={style.textbutton}>CONTINUA</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a2b44",
        padding: 20,
    },

    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#ccc",
        fontSize: 16,
        marginBottom: 20,
    },

    label: {
        fontSize: 15,
        marginBottom: 8,
        color: "#fff",
    },

    input: {
        backgroundColor: "transparent",
        padding: 8,
        marginBottom: 30,
        borderRadius: 5,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },

    button: {
        backgroundColor: "#556B8E",
        padding: 20,
        borderRadius: 5,
        alignItems: "center",
        width: "50%",
        alignSelf: "center",
    },

    textbutton: {
        color: "#fff",
        fontWeight: "bold",
    },
});
