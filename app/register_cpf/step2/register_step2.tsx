import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function Tela2() {
  const router = useRouter();

  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={style.container}>
      <Ionicons name="arrow-back" size={20} color="#fff" onPress={() => router.navigate("/register_cpf/step1/register_step1")} />
      <Text style={style.title}>Vamos continua!</Text>
      <Text style={style.subTitle}>Criar uma nova conta</Text>

      <Text style={style.label}>E-mail</Text>
      <TextInput
        style={style.input}
        placeholder="E-mail"
        value={Email}
        onChangeText={setEmail}
      />
      <Text style={style.label}>Senha</Text>
      <TextInput
        style={style.input}
        placeholder="Senha"
        value={Senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Text style={style.label}>Confirmar senha</Text>
      <TextInput
        style={style.input}
        placeholder="Confirmar senha"
        value={ConfirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.Textbutton}>INSCREVA-SE</Text>
      </TouchableOpacity>

      <View style={style.dividerContainer}>
        <View style={style.line} />
        <Text style={style.orText}>OU</Text>
        <View style={style.line} />
      </View>

      <Text style={style.textLogin}>Fazer login com as redes sociais</Text>

      <View style={style.image}>
        <TouchableOpacity>

        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2b44",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: 'center',
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 20,
    alignSelf: 'center',
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },

  input: {
    width: '100%',
    height: 50,
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderBottomWidth: 1,
  },

  button: {
    width: '30%',
    height: 50,
    borderRadius: 5,
    backgroundColor: "#3E5C76",
    alignSelf: 'center',
  },

  Textbutton: {
    color: "#fff",
    padding: 15,
    alignSelf: 'center',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },

  orText: {
    marginHorizontal: 10,
    color: '#ccc',
    fontWeight: 'bold',
  },

  textLogin: {
    color: '#ccc',
    alignSelf: 'center',
    fontWeight: 'bold'
  },

  image: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },

  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  }
});