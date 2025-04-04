import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

//Styles
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
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder='example@gmail.com'
                            style={styles.input}
                            placeholderTextColor={styles.input.color}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            placeholderTextColor={styles.input.color}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

