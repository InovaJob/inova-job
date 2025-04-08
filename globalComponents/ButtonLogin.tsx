import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { styles } from "@/styles/StyleComponents/global.comp.styles/button.login.comp"

import { buttonProps } from '@/interfaces/componentInterfaces/ButtonProps';

export const GlobalButtonLogin: React.FC<buttonProps> = ({ widthProp, fontWeightProp, children, route, fontColor, background }) => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.entrar, { width: widthProp, backgroundColor: background }]}
                activeOpacity={0.7}
                onPress={() => navigation.push(route)}
            >
                <Text style={[styles.textButton, { fontWeight: fontWeightProp, color: fontColor }]}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};


