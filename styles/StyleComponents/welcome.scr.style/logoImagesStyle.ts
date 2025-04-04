import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        flex: 1,
        width: width * 0.5,
    },
    image: {
        flex: 1,
        width: width * 1,
        marginTop: '-20%'
    }
})