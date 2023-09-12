import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Users = ({ data }) => {

    const navigation = useNavigation();

    const handleDetailsPress = () => {
        // Navegar para a tela "Details" e passar os dados do usuário como parâmetro
        navigation.navigate("Details", { user: data });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.userInfo}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: data.image }} // Certifique-se de que a sua API fornece a URL correta para o avatar
                    />
                    <Text style={styles.name}>{data.name}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleDetailsPress} >
                        <LinearGradient
                            colors={["#179AC3", "#4A4A4A"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ flex: 1, width: '100%', borderRadius: 12, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Users;