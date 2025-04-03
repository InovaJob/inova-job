import { View, StyleSheet, StatusBar } from 'react-native';
import { LogoComponent } from '../components/WelcomeScreen/LogoImages'
import { ButtonsInitialScreen } from '../components/WelcomeScreen/Buttons';


export default function WelcomeScreen() {
    return (
        <View style={styles.globalContainer}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={'light-content'}
            />
            <LogoComponent />
            <ButtonsInitialScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#223A5C',
        width: '100%',
        height: '100%',
    },

})