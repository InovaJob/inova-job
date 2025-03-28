import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

export const ButtionsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <GlobalButtonLogin widthProp='70%' />
            <Text style={styles.link}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    link: {

    }
})