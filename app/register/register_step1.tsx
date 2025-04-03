import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useRouter } from "expo-router";

import { GlobalButtonLogin } from "@/globalComponents/ButtonLogin";
import { InputCNPJScreen } from "@/components/RegisterCNPJScreen/Inputs";

const { width, height } = Dimensions.get("window");

export default function RegisterStep1() {
    const navigation = useRouter();

    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cep, setCep] = useState(""); cep
    const [localidade, setLocalidade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [emailCorporativo, setEmailcoporativo] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [cnpj, setCnpj] = useState("");

    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.topContainer}>
                    <Ionicons name='arrow-back' style={style.backButton} onPress={() => navigation.back()} />
                </View>
                <View style={style.inputsContainer}>
                    <Text style={style.title}>Vamos começar!</Text>
                    <Text style={style.subtitle}>Criar uma conta para sua Empresa</Text>

                    <InputCNPJScreen label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />
                    <InputCNPJScreen label={"Nome da empresa"} placeholder={"xxxxx-xxx"} onChangeText={setCep} value={cep} />
                    <InputCNPJScreen label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />
                    <InputCNPJScreen label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />

                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a2b44",
        width: width * 1,
    },
    content: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: height * 0.04,
        position: "fixed",
    },
    topContainer: {
        flex: 0.1,
        width: width * 1,
        marginTop: height * 0.05,
        paddingHorizontal: width * 0.05,
    },

    inputsContainer: {
        width: "100%",
        paddingHorizontal: width * 0.06,
        marginBottom: "-45%"
    },

    backButton: {
        color: '#fff',
        fontSize: width * 0.08,
        justifyContent: 'center',
        alignItems: 'center'
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
