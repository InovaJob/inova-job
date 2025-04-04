import { View, StatusBar } from 'react-native';
import { LogoComponent } from '../components/WelcomeScreen/LogoImages'
import { ButtonsInitialScreen } from '../components/WelcomeScreen/Buttons';

import { styles } from '@/styles/StyleScreens/welcomeScr';

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