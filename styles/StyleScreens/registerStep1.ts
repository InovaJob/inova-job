import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#223A5C",
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    topContainer: {
        width: "100%",
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.05,
        paddingBottom: 10,
        justifyContent: "center",
    },
    inputsContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: width * 0.06,
        paddingTop: 20,
    },
    backButton: {
        color: "#fff",
        fontSize: width * 0.08,
    },

    areaTitle: {
        gap: height * 0.01,
        marginBottom: height * 0.05
    },
    title: {
        color: "#fff",
        fontSize: width * 0.06,
        fontWeight: 300,
    },
    subtitle: {
        color: "#ccc",
        fontSize: 16,
    },

    button: {
        width: "100%",
        top: height * 0.05,
        marginBottom: height * 0.06
    }
});
