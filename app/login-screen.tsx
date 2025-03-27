import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { InputsComponentLogin } from '../components/LoginScreen/Inputs';
import { InforComponentLogin } from '@/components/LoginScreen/Infor';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Ionicons name='arrow-back' style={styles.backButton} onPress={() => navigation.back()} />
            </View>
            <InputsComponentLogin />
            <InforComponentLogin />
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
        marginTop: height * 0.04,
        paddingHorizontal: width * 0.06,
    },
    backButton: {
        color: '#fff',
        fontSize: width * 0.08,
        justifyContent: 'center',
        alignItems: 'center'
    },


})