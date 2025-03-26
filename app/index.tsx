import { View, Text, StyleSheet, Image } from 'react-native';
import { LogoComponent } from '../components/InitialScreen/LogoImages'
import { ButtonsInitialScreen } from '../components/InitialScreen/Buttons';


export default function WelcomeScreen(){
    return (
        <View style={styles.globalContainer}>
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