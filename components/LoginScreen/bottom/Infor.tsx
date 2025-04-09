import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalButtonLogin } from '@/globalComponents/ButtonLogin';
import { Dimensions } from 'react-native';

import { useRouter } from 'expo-router';

//Style
import { styles } from '@/styles/StyleComponents/login.scr.comp.style/buttonsStyle';
import { Ionicons } from '@expo/vector-icons';

import { IconsProps } from '@/interfaces/componentInterfaces/IconsProps';

const { width, height } = Dimensions.get("window");

const IconComponent: React.FC<IconsProps> = ({ name, size, color }) => {
    return (
        <View>
            <Ionicons name={name} size={size} color={color} />
        </View>
    )
}

export const InforComponentLogin = () => {
    const navigation = useRouter();

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
                            <IconComponent name={"logo-google"} size={width * 0.08} color={"#fd3c00"} />
                            <IconComponent name={"logo-github"} size={width * 0.09} color={"#000"} />
                            <IconComponent name={"logo-facebook"} size={width * 0.09} color={"#0866ff"} />
                            <IconComponent name={"logo-apple"} size={width * 0.095} color={"#f2f4f7"} />
                        </View>
                        <View style={styles.registerLink}>
                            <Text style={styles.text}>Não tem uma conta?</Text>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push("/register/register_step1/register_step1")} >
                                <Text style={styles.linkText} >registre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

