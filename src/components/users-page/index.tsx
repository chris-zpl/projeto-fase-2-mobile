import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import Header from "@/components/header";
import UserCard from "@/components/user-card";
import LoadingIndicator from "@/components/loading";
import { getUsers, getAlbumsByUser } from "@/services/api";
import { User } from "@/services/types";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadedContent = async () => {
      const allUsers = await getUsers();
      const usersWithAlbumCount = await Promise.all(
        allUsers.map(async (user) => {
          const albums = await getAlbumsByUser(user.id);
          return {
            ...user,
            albumCount: albums.length,
          };
        })
      );
      setUsers(usersWithAlbumCount);
      setFiltered(usersWithAlbumCount);
      setLoading(false);
    };
    loadedContent();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFiltered(filteredData);
  };

  if (loading) {
    return <LoadingIndicator />;
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
        renderItem={({ item }) => <UserCard id={item.id} name={item.name} albumCount={item.albumCount} />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyResult()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
