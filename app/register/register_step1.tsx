import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text,  TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView } from "react-native";
//Styles
import { styles } from "@/styles/StyleScreens/registerStep1";
//Components
import { GlobalButtonLogin } from "@/globalComponents/ButtonLogin";
import { InputCNPJScreen } from "@/components/RegisterCNPJScreen/Inputs";
//Hooks
import { IsKeyboardVisible } from "@/hooks/KeyboardVisible";

export default function RegisterStep1() {
    const navigation = useRouter();
    const isKeyboardVisible = IsKeyboardVisible();

    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [emailCorporativo, setEmailcoporativo] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <SafeAreaView
            style={styles.container}
        >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.topContainer}>
                        <Ionicons name="arrow-back" style={styles.backButton} onPress={() => navigation.back()} />
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.areaTitle}>
                            <Text style={styles.title}>Vamos começar!</Text>
                            <Text style={styles.subtitle}>Crie uma conta para sua Empresa</Text>
                        </View>
                    <ScrollView>
                        <InputCNPJScreen label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />
                        <InputCNPJScreen label={"CNPJ"} placeholder={"xx.xxx.xxx/0001-xx"} onChangeText={setCnpj} value={cnpj} />
                        <InputCNPJScreen label={"Email corporativo"} placeholder={"inovajobstartup@gmail.com"} onChangeText={setEmailcoporativo} value={emailCorporativo} />
                        <InputCNPJScreen label={"Email corporativo"} placeholder={"inovajobstartup@gmail.com"} onChangeText={setEmailcoporativo} value={emailCorporativo} />
                        <View style={[ styles.button, isKeyboardVisible ? styles.modifyButton : styles.button]}>
                            <GlobalButtonLogin widthProp="60%" fontWeightProp={400} children={"Próximo"} navigationProp={"/register/register_step2"}/>
                        </View>
                    </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

