import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, differenceInYears } from 'date-fns';

function Details() {

    const navigation = useNavigation();
    const dataUser = useRoute();
    const { user } = dataUser.params;

    const userBirthDate = new Date(user.birth_date);
    const currentDate = new Date();
    const userYears = differenceInYears(currentDate, userBirthDate)

    return (
        <LinearGradient
            colors={["#111017", "#090320"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: user.image }}
                    />
                </View>
                <View style={styles.infoContainer}>

                    <Text style={styles.labelName}>Name</Text>
                    <Text style={styles.infoUser}>{user.name}</Text>

                    <Text style={styles.labels}>Email</Text>
                    <Text style={styles.infoUser}>{user.email}</Text>

                    <Text style={styles.labels}>CPF</Text>
                    <Text style={styles.infoUser}>{user.cpf}</Text>

                    <Text style={styles.labels}>Data de nascimento</Text>
                    <Text style={styles.infoUser}>{format(userBirthDate, 'dd/MM/yyyy')} - {userYears} anos</Text>

                    <Text style={styles.labels}>Salário</Text>
                    <Text style={styles.infoUser}>R$ {user.salary}</Text>

                    <Text style={styles.labels}>Cidade</Text>
                    <Text style={styles.infoUser}>{user.city}</Text>

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Employees")} >
                        <LinearGradient
                            colors={["#179AC3", "#4A4A4A"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ flex: 1, width: '100%', borderRadius: 20, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Return</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

export default Details;
