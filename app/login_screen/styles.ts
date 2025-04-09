import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#223A5C'
    },
    topContainer: {
        flex: 0.1,
        justifyContent: 'center',
        width: width * 1,
        marginTop: height * 0.05,
        paddingHorizontal: width * 0.05
    },
    backButton: {
        color: '#fff',
        fontSize: width * 0.08,
        justifyContent: 'center',
        alignItems: 'center'
    }
})