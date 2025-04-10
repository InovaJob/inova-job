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

export default function RegisterStep1() {
    const navigation = useRouter();
    const isKeyboardVisible = IsKeyboardVisible();

    const [cep, setCep] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                            <Text style={styles.title}>Sua conta está quase pronta!</Text>
                            <Text style={styles.subtitle}>Preencha mais alguns dados</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <InputGlobalComponent label={"Código postal"} placeholder={"62***-***"} value={cep} onChangeText={setCep} />
                            <InputGlobalComponent label={"Endereço"} placeholder={"R. Descrição"} value={localidade} onChangeText={setLocalidade} />
                            <InputGlobalComponent label={"Password"} placeholder={"********"} value={password} onChangeText={setPassword} />
                            <InputGlobalComponent label={"Confirm password"} placeholder={"********"} value={confirmPassword} onChangeText={setConfirmPassword} />

                            <View style={styles.button}>
                                <GlobalButtonLogin widthProp={"70%"} fontWeightProp={700} background={"#3c5a73"} children={"Próximo"} fontColor={"#ffff"} route={"/register/register_step2"} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

