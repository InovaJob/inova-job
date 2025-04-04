import { View, Text } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

//Styles
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/buttonsStyle';

export const ButtionsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <GlobalButtonLogin widthProp="70%" fontWeightProp="bold" children={"fazer login"} navigationProp={null} />
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

