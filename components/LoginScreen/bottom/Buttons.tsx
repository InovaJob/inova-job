import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';
import { SensorType } from 'react-native-reanimated';

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window")

export const ButtionsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <GlobalButtonLogin widthProp="70%" fontWeightProp="bold" children={"fazer login"} />
                <Text >Esqueceu a senha?</Text>
                <View style={styles.content}>
                    <View></View>
                    <Text></Text>
                    <View></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: width * 1
    },
    content: {
        width: "100%",
    }
})