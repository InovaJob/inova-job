import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

export const ButtionsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <GlobalButtonLogin widthProp="70%" fontWeightProp="bold" />
            <Text style={styles.link}>Esqueceu a senha?</Text>
            <View style={styles.lineContainer}>
                <View></View>
                <Text></Text>
                <View></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: "column",
        
    },
    link: {

    },
    lineContainer: {

    }
})