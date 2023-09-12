import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Users from '../../components/Users';

function Employees() {
    const [filterText, setFilterText] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // FAZ O FILTRO DE BUSCA DE
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    // FAZ A CARGA DOS DADOS A API NA TELA
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('users');
            // console.log(response.data);
            setUsers(response.data);
            setLoading(false);
        }
        loadUsers();
    }, []);

    if (loading) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator color="#121212" size={45} />
            </View>
        )
    } else {
        return (
            <LinearGradient
                colors={["#111017", "#090320"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}>

                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search here"
                            value={filterText}
                            onChangeText={(text) => setFilterText(text)}
                        />
                        <Image style={styles.image} source={require("./assets/ImageSearch.png")} />
                    </View>
                    <Text style={styles.title}>Your Employees</Text>
                    <FlatList
                        data={filteredUsers}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <Users data={item} />}
                    />
                </View>
            </LinearGradient>
        );
    }
}
export default Employees;
