import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { getUsers } from "@/services/api";
import { User } from "@/services/types";
import { styles } from "./styles";
import Header from "../header";
import Users from "../users";
import { colors } from "@/styles/colors";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const data = await getUsers();
      setUsers(data);
      setFiltered(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFiltered(filteredData);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.blue[600]} />
        <Text>Carregando...</Text>
      </View>
    );
  }

  const renderEmptyResult = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum resultado encontrado.</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title="Usuários"
          subtitle="Selecione um usuário abaixo e visualize seus álbuns."
        />
        <TextInput
          placeholder="Pesquisar..."
          placeholderTextColor={colors.gray[100]}
          style={styles.input}
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Users data={item} />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyResult()}
      />
    </View>
  );
}
