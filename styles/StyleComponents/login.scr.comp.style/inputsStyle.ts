import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 1,
        position: 'fixed',
    },
    content: {
        flex: 1,
        width: '100%',
        paddingHorizontal: width * 0.07
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
        fontWeight: 600,
        letterSpacing: 0.8
    },
    subTitle: {
        color: '#A3B5C1',
        fontSize: width * 0.05
    },

    inputsArea: {
        flex: 0.4,
        width: '100%',
        gap: height * 0.05
        ,
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#A3B5C1',
        color: '#A3B5C1',
        height: height * 0.06,
        fontSize: width * 0.045,
        paddingHorizontal: width * 0.03
    },
    inputContainer: {
        flex: 1,
        width: '100%',
    },
    label: {
        color: '#A3B5C1',
        fontSize: width * 0.04
    }
})