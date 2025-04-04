import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    entrar: {
        backgroundColor: '#3E5C76',
        borderRadius: 8,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#fff',
        textAlign: 'center',
    },
});
