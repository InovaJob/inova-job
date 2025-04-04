import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const style = StyleSheet.create({
    input: {
        backgroundColor: "transparent",
        padding: 8,
        marginBottom: 30,
        borderBottomColor: "#fff",
        borderBottomWidth: 0.8,
        fontSize: width * 0.045
    },
    label: {
        fontSize: width * 0.04,
        marginBottom: 8,
        color: "#A3B5C1",
    },
})