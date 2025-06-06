import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.subtitle}>
        Clique no começar para explorar todas as fotos e usuários disponíveis.
      </Text>

      <Link href="/users" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
