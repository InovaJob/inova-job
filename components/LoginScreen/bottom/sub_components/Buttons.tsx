import { View, Text } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';

//Style
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/buttonsStyle';
import { Ionicons } from '@expo/vector-icons';

import { IconsProps } from '@/interfaces/componentInterfaces/IconsProps';

const IconComponent: React.FC<IconsProps> = ({ name, size, color }) => {
    return (
        <View>
            <Ionicons name={name} size={size} color={color} />
        </View>
    )
}

export const ButtonsLoginComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.buttons}>
                    <GlobalButtonLogin widthProp="70%" fontWeightProp="bold" children={"fazer login"} route={""} background={"#3C5A73"} fontColor={"#ffff"} />
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </View>
                <View style={styles.groupLine}>
                    <View style={styles.line}></View>
                    <Text style={styles.textBeetwen}>ou</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.socialArea}>
                    <View style={styles.socialContent}>
                        <Text style={styles.text}>Fazer login com as redes sociais</Text>
                        <View style={styles.iconsContent}>
                            <IconComponent name={"logo-google"} size={20} color={"#fff"} />
                            <IconComponent name={"logo-instagram"} size={20} color={"#fff"} />
                            <IconComponent />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

