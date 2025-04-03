import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import { GlobalButtonLogin } from "@/globalComponents/ButtonLogin";
import { InputCNPJScreen } from "@/components/RegisterCNPJScreen/Inputs";

const { width, height } = Dimensions.get("window");

export default function RegisterStep1() {
    const navigation = useRouter();

    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [emailCorporativo, setEmailcoporativo] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.topContainer}>
                        <Ionicons name="arrow-back" style={styles.backButton} onPress={() => navigation.back()} />
                    </View>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.title}>Vamos começar!</Text>
                        <Text style={styles.subtitle}>Crie uma conta para sua Empresa</Text>
                        <InputCNPJScreen label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />
                        <InputCNPJScreen label={"CNPJ"} placeholder={"xx.xxx.xxx/0001-xx"} onChangeText={setCnpj} value={cnpj} />
                        <InputCNPJScreen label={"Email corporativo"} placeholder={"inovajobstartup@gmail.com"} onChangeText={setEmailcoporativo} value={emailCorporativo} />
                        <InputCNPJScreen label={"Telefone"} placeholder={"859xxxx-xxxx"} onChangeText={setTelefone} value={telefone} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a2b44",
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    topContainer: {
        width: "100%",
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.05,
        paddingBottom: 10,
        justifyContent: "center",
    },
    inputsContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: width * 0.06,
        paddingTop: 20,
    },
    backButton: {
        color: "#fff",
        fontSize: width * 0.08,
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        color: "#ccc",
        fontSize: 16,
        marginBottom: 20,
    },
});

