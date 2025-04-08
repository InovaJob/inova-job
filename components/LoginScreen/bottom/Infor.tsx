import { View } from 'react-native';
import { ButtonsLoginComponent } from './sub_components/Buttons';

//Styles
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/inforStyle';

export const InforComponentLogin = () => {
    return (
        <View style={styles.container}>
            <ButtonsLoginComponent />
        </View>
    )
}

