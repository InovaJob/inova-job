import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

const Br = () => <Text>{'\n'}</Text>;

//Styles
import { styles } from "@/styles/StyleComponents/welcome.scr.style/buttonsStyle"
//Components
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

export const ButtonsInitialScreen = () => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textArea}>
                    <Text style={styles.text1}> Olá! Seja bem vindo(a)!</Text>
                    <View style={styles.breakText}>
                        <Text style={styles.text2}>A melhor plataforma virtual</Text>
                        <Text style={styles.text2}>para vagas de emprego</Text>
                    </View>
                </View>
                <View style={styles.buttonsArea}>
                    <GlobalButtonLogin widthProp={'100%'} children={"entrar"} route={"/login_screen/login-screen"} fontColor={"#fff"} background={"#3E5C76"} />
                    <GlobalButtonLogin widthProp={"100%"} children={"cadastre-se"} fontColor={"#3E5C76"} background={"#ffff"} />
                    <GlobalButtonLogin widthProp={"100%"} children={"cadastrar empresa"} route={"/register/register_step1/register_step1"} fontColor={"#3E5C76"} background={"#ffff"} />
                </View>
            </View>
        </View>
    );
};



