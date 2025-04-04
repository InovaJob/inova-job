import { View, Image, Dimensions } from 'react-native';

//Styles
import { styles } from "@/styles/StyleComponents/welcome.scr.style/logoImagesStyle"

export const LogoComponent = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.logoImg}
                source={require('../../assets/images/logoLogin.png')}
            />
            <Image
                resizeMode='contain'
                source={require('../../assets/images/businessman.png')}
                style={styles.image}
            />
        </View>
    )
}

