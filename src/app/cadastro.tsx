import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function Home() {
  return (
    // div principal
    <View style={styles.imagemBody}>
      {/* imagem logo senai */}
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

      {/* inicio do formulario */}
      <View style={styles.form}>

      <View style={styles.subBtnInicial}>
          <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn2}>Pagina Inicial</Link></TouchableOpacity>
        </View>

        <Text style={styles.text}>EMAIL:</Text>
        <TextInput placeholder="Insira seu Email" style={styles.input} />


        <Text style={styles.text}>CONFIRMAR EMAIL:</Text>
        <TextInput secureTextEntry placeholder="Confirmar Email" style={styles.input} />

        <Text style={styles.text}>SENHA:</Text>
        <TextInput secureTextEntry placeholder="Crie sua Senha" style={styles.input} />

        <Text style={styles.text}>CONFIRMAR SENHA:</Text>
        <TextInput secureTextEntry placeholder="Confirme sua senha" style={styles.input} />
       
      

      <View style={styles.formbtn}>
        <Link href={'home'} style={styles.btn}>CADASTRAR</Link>
      </View>
    </View></View>
  )
}

