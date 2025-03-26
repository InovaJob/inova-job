import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
const navigation = useRouter();

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {/*Adicionar icones*/}
                <Text style={styles.backButton} onPress={() => navigation.push('/index')}>Voltar</Text>
            </View>
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
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    }
})