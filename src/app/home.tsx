import { View, Image, Text } from "react-native";
import { styles } from "../css/style";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";




export default function inicio() {
    return (
        <View style={styles.imagemBody}>
            <Image style={styles.imagemss}
                source={require('../../assets/sesi-senai.webp')}
            />
            <View style={styles.form}>
                <Text style={styles.text}>Você está Conectado</Text>
            </View>
            <View style={styles.subBtnInicial}>
          <TouchableOpacity><Link href={'login'} style={styles.subBtn2}>Pagina Inicial</Link></TouchableOpacity>
        </View>
        </View>
    )
}


