import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ButtionsLoginComponent } from '../bottomComponents/Buttons';

const { width, height } = Dimensions.get('window');

export const InforComponentLogin = () => {
    return (
        <View style={styles.container}>
            <ButtionsLoginComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: width * 0.05
    }
})