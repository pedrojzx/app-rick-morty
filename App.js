import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const API_URL = "https://rickandmortyapi.com/api/character";

export default function App() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarDados() {
      try {
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        setPersonagens(dados.results);
      } catch (e) {
        setErro("Não foi possível carregar os dados.");
      } finally {
        setCarregando(false);
      }
    }
    buscarDados();
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#6c5ce7" />
        <Text style={styles.textoCarregando}>Carregando...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Personagens de Rick and Morty</Text>
      <FlatList
        data={personagens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.name}</Text>
              <Text style={styles.detalhe}>{item.species}</Text>
              <Text style={styles.detalhe}>Status: {item.status}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", paddingTop: 40 },
  centro: { flex: 1, alignItems: "center", justifyContent: "center" },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  foto: { width: 90, height: 90 },
  info: { padding: 12, justifyContent: "center" },
  nome: { fontSize: 16, fontWeight: "bold" },
  detalhe: { color: "#555", marginTop: 2 },
  textoCarregando: { marginTop: 8 },
  erro: { color: "red", fontSize: 16 },
});