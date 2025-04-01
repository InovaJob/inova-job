import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [EmailCorporativo, setEmailcoporativo] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");
  const [Cnpj, setCnpj] = useState("");

  return (
    <View style={style.container}>
      <Text style={style.title}>Vamos começar!</Text>
      <Text style={style.subtitle}>Criar uma conta para sua Empresa</Text>

      <Text style={style.label}>E-mail corporativo</Text>
      <TextInput
        style={style.input}
        label="E-mail corporativo"
        placeholder="E-mail corporativo"
        value={setEmailcoporativo}
        onChangeText={setEmailcoporativo}
      />

      <Text style={style.label}>Senha</Text>
      <TextInput
        style={style.input}
        label="Senha"
        placeholder="Senha"
        value={Senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Text style={style.label}>Confirmar senha</Text>
      <TextInput
        style={style.input}
        label="confirmar senha"
        placeholder="Confirmar senha"
        value={ConfirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <Text style={style.label}>CNPJ</Text>
      <TextInput
        style={style.input}
        label="CNPJ"
        placeholder="CNPJ"
        value={Cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />

      <TouchableOpacity style={style.button}>
        <Text style={style.textbutton}>INSCREVA-SE</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2b44",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    marginBottom: 8,
    color: "#fff",
  },

  input: {
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },

  button: {
    backgroundColor: "#556B8E",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "30%",
    alignSelf: "center",
  },

  textbutton: {
    color: "#fff",
    fontWeight: "bold",
  },
});
