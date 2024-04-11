import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function Home() {
  return (
    // div principal
    <View style={styles.imagemBody}>
   
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

      <View style={styles.form}>

      <View style={styles.subBtnInicial}>
          <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn2}>Pagina Inicial</Link></TouchableOpacity>
        </View>

        <Text style={styles.text}>NOVA SENHA:</Text>
        <TextInput placeholder="Insira seu Senha" style={styles.input} />

        <Text style={styles.text}>CONFIRMAR SENHA:</Text>
        <TextInput placeholder="confirmar Senha" style={styles.input} />

      <View style={styles.formbtn}>
        <Link href={'login'} style={styles.btn}>CONFIRMAR</Link>
      </View>
    </View></View>
  )
}

