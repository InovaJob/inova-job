import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { InputsComponentLogin } from '../components/LoginScreen/top/Inputs';
import { InforComponentLogin } from '../components/LoginScreen/top/Infor';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useRouter();

    const [isKeyboardVisible, setIskeyboardVisible] = useState(false);

    //hooksFor conditional rendering of InforComponentLogin
    useEffect(() => {
        const showContent = Keyboard.addListener('keyboardDidShow', () => {
            setIskeyboardVisible(true)
        });
        const hideContent = Keyboard.addListener('keyboardDidHide', () => {
            setIskeyboardVisible(false)
        });
        return () => {
            showContent.remove();
            hideContent.remove();
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Ionicons name='arrow-back' style={styles.backButton} onPress={() => navigation.back()} />
            </View>
            <InputsComponentLogin />
            {isKeyboardVisible ? null : <InforComponentLogin />}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#223A5C'
    },
    topContainer: {
        flex: 0.1,
        justifyContent: 'center',
        width: width * 1,
        marginTop: height * 0.05,
        paddingHorizontal: width * 0.05,
    },
    backButton: {
        color: '#fff',
        fontSize: width * 0.08,
        justifyContent: 'center',
        alignItems: 'center'
    }
})