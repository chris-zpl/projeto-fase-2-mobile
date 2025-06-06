import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import UsersList from '@/components/users-list';

export default function AllUsers(){
    return (
        <View style={{ flex: 1}}>
            <UsersList />
        </View>
    )
}