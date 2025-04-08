import { View, Text } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

//Styles
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/buttonsStyle';

export const ButtonsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.buttons}>
                    <GlobalButtonLogin widthProp="100%" fontWeightProp="bold" children={"fazer login"} route={""} background={"#3C5A73"} fontColor={"#ffff"} />
                    <Text >Esqueceu a senha?</Text>
                </View>
                <View style={styles.groupLine}>
                    <View style={styles.line}></View>
                    <Text style={styles.textBeetwen}>ou</Text>
                    <View style={styles.line}></View>
                </View>
            </View>
        </View>
    )
}

