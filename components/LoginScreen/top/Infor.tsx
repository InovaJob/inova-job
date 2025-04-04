import { View } from 'react-native';
import { ButtionsLoginComponent } from '../bottom/Buttons';

//Styles
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/inforStyle'; 

export const InforComponentLogin = () => {
    return (
        <View style={styles.container}>
            <ButtionsLoginComponent />
        </View>
    )
}

