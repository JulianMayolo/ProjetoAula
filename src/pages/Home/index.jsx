import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from "expo-linear-gradient";

function Home() {
    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={["#111017", "#090320"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("./assets/ImageHome.png")} />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Manage Your Employees.</Text>
                    <Text style={styles.title}>All in One Place</Text>
                    <Text style={styles.description}>Eliminate physical cards, get virtual data in your hand.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Employees")} >
                        <LinearGradient
                            colors={["#179AC3", "#4A4A4A"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ flex: 1, width: '100%', borderRadius: 20, alignItems: "center", justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View >
        </LinearGradient>

    )
}
export default Home;
