import React, { useState, useEffect } from 'react';
import { IsKeyboardVisible } from '@/hooks/KeyboardVisible';
import { View, Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

//Styles
import { styles } from './styles';
//Components
import { InputsComponentLogin } from '../../components/LoginScreen/top/Inputs';
import { InforComponentLogin } from '../../components/LoginScreen/bottom/Infor';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useRouter();
    const isVisible = IsKeyboardVisible();

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Ionicons name='arrow-back' style={styles.backButton} onPress={() => navigation.back()} />
            </View>
            <InputsComponentLogin />
            {isVisible ? null : <InforComponentLogin />}
        </View>
    )
};
