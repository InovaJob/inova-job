import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView } from "react-native";

//Styles
import { styles } from "./styles"
//Components
import { GlobalButtonLogin } from "@/globalComponents/ButtonLogin";
import { InputGlobalComponent } from "@/globalComponents/Inputs";
//Hooks
import { IsKeyboardVisible } from "@/hooks/KeyboardVisible";
import { style } from "@/styles/StyleComponents/inputs.component";

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
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <InputGlobalComponent label={"Nome da empresa"} placeholder={"Inovajob"} onChangeText={setNomeEmpresa} value={nomeEmpresa} />
                            <InputGlobalComponent label={"CNPJ"} placeholder={"xx.xxx.xxx/0001-xx"} onChangeText={setCnpj} value={cnpj} />
                            <InputGlobalComponent label={"Email corporativo"} placeholder={"inovajobstartup@gmail.com"} onChangeText={setEmailcoporativo} value={emailCorporativo} />
                            <InputGlobalComponent label={"Telefone"} placeholder={"859****-****"} onChangeText={setTelefone} value={telefone} />

                            <View style={styles.button}>
                                <GlobalButtonLogin widthProp={"70%"} fontWeightProp={700} background={"#3c5a73"} children={"Próximo"} fontColor={"#ffff"} route={"/register/register_step2/register_step2"} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

