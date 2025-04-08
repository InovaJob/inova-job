import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: width * 1,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: height * 0.03,
        paddingHorizontal: width * 0.06
    },
    buttons:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: height * 0.02,
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
    },

    forgotPassword: {
        fontSize: width * 0.04,
        color: "#ffff",
        fontWeight: 500 
    },

    socialArea: {
        width: "100%",
        justifyContent: "center", 
        alignItems: "center"
    },
    socialContent: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        color: "#fff"
    },
    socialIcons: {
        width: "100%",
        flexDirection: "row"
    },
    iconsContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})