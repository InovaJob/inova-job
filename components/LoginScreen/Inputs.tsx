import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const InputsComponentLogin = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.textArea}>
                    <Text style={styles.titletxt}>Seja bem vindo(a)!</Text>
                    <Text style={styles.subTitle}>Faça login para continuar</Text>
                </View>
                <View style={styles.inputsArea}>
                    <TextInput aria-label='e-mail' placeholder='Email' />
                    <TextInput placeholder='senha' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: width * 1
    },
    textArea: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    titletxt: {
        color: '#fff',
        fontSize: width * 0.07,
        fontWeight: 700,
        letterSpacing: 0.8
    },
    subTitle: {
        color: '#fff',
        fontSize: width * 0.05
    },

    inputsArea: {
        flex: 0.5,
        backgroundColor: 'blue',
        width: '100%'
    }
})