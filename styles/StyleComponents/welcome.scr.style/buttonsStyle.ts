import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        gap: height * 0.01
    },
    breakText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsArea: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 16,
        gap: '5%',
        marginTop: '-20%'
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: width * 0.06,
    },
    text2: {
        color: '#A3B5C1',
        fontWeight: '500',
        fontSize: width * 0.05,
        textAlign: 'center',
    },



    textButtonCPF: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#3E5C76',
        width: '100%'
    },
    textButtonCNPJ: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#3E5C76',
        width: '100%'
    },




    criarConta: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: height * 0.05,
        width: '100%',
    },
    cadastroCNPJ: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: height * 0.05,
        width: '100%'
    }
});