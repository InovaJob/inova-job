import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { styles } from "@/styles/StyleComponents/global.comp.styles/button.login.comp"

import { buttonProps } from '@/interfaces/componentInterfaces/ButtonProps';

export const GlobalButtonLogin: React.FC<buttonProps> = ({ widthProp, fontWeightProp, children, navigationProp}) => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.entrar, { width: widthProp }]}
                activeOpacity={0.7}
                onPress={() => navigation.push(navigationProp)}
            >
                <Text style={[styles.textButton, { fontWeight: fontWeightProp }]}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};


