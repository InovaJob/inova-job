import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    entrar: {
        borderRadius: 8,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        textAlign: 'center',
    },
});
