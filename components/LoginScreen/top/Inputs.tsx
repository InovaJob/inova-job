import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { InputGlobalComponent } from '@/globalComponents/Inputs';
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/inputsStyle';

export const InputsComponentLogin = () => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <View style={styles.content}>
                <View style={styles.textArea}>
                    <Text style={styles.titletxt}>Seja bem vindo(a)!</Text>
                    <Text style={styles.subTitle}>Faça login para continuar</Text>
                </View>

                <View style={styles.inputsArea}>
                    <View style={styles.inputContainer}>
                        <InputGlobalComponent label={"Email"} placeholder={"email"} />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputGlobalComponent label={"Password"} placeholder={"********"} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

