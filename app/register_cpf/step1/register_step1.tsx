import React, { useState } from "react";
import { View,Text,TextInput,TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { GlobalButtonLogin } from "@/globalComponents/ButtonLogin";

export default function Tela1() {
  const [Nome, setNome] = useState('');
  const [Sobrenome, setSobrenome] = useState('');
  const [Telefone, setTelefone] = useState('');

  return(
  <View style={style.container}>
    <Text style={style.title}>Vamos começar!</Text>
    <Text style={style.subTitle}>Criar uma nova conta</Text>

    <Text style={style.label}>Nome</Text>
    <TextInput
    style={style.input}
    placeholder="Nome"
    value={Nome}
    onChangeText={setNome}
    />


    <Text style={style.label}>Sobrenome</Text>
    <TextInput
    style={style.input}
    placeholder="Sobrenome"
    value={Sobrenome}
    onChangeText={setSobrenome}
    />

    <Text style={style.label}>Telefone</Text>
    <TextInput
    style={style.input}
    placeholder="Telefone"
    value={Telefone}
    onChangeText={setTelefone}
    keyboardType="phone-pad"
    />
    
    <View style={style.button}>
        <GlobalButtonLogin children={"Próximo"} fontColor={"#ffff"} fontWeightProp={"bold"} route={"/register_cpf/step2/register_step2"}/>
    </View>
  </View>
  )
};

  const style = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#1a2b44",
      padding: 20,
      justifyContent: 'center',
    },
    
    title:{
      fontSize: 24,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: 'center',
    },
    
    subTitle:{
      fontSize: 16,
      fontWeight: "bold",
      color: "gray",
      marginBottom: 20,
      alignSelf: 'center',
    },

    label:{
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 5,
      color:"#fff",
    },

    input:{
      width: '100%',
      height: 50,
      padding: 8,
      borderRadius: 5,
      marginBottom: 20,
      backgroundColor: "transparent",
      borderColor: "#fff",
      borderBottomWidth: 1,
    },

    button:{
      width: '30%',
      height: 50,
      borderRadius: 5,
      backgroundColor: "#3E5C76",
      alignSelf: 'center',
    },

    Textbutton:{
      color: "#fff",
      alignSelf: 'center',
      padding: 15,
    }
  });