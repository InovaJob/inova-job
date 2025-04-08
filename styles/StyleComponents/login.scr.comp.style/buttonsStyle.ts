import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: "100%",
        backgroundColor:"red",
        paddingHorizontal: width * 0.08
    },
    content: {
        width: "100%",
    },
    buttons:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    groupLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: width * 0.03
    },
    line: {
        width: width * 0.35,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    textBeetwen: {
        fontSize: width * 0.055,
        color: "#ffff",
        fontWeight: 700
    }
})