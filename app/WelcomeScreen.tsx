import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

//import { LogoComponent } from '../../components/initialScreen/LogoImages';
//import { ButtonsInitialScreen } from '../../components/initialScreen/Buttons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
    return (
        <View style={styles.globalContainer}>
            <Text>afsdfsd</Text>
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
        width:  '100%',
        height: '100%'        
    },

})
