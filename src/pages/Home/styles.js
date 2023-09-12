import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        paddingTop: "8%",
        zIndex: 1,
    },
    image: {
        flex: 3,
        zIndex: 1,
        width: 327,
        height: 290,
        marginBottom: 80,
        resizeMode: 'contain',
        alignItems: "center",
    },

    containerTitle: {
        flex: 1,
        zIndex: 1,
        width: 250,
        height: 126,
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
    },
    description: {
        alignItems: "center",
        fontSize: 14,
        marginTop: 60,
        textAlign: "center",
        color: "#ffffff",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        height: 60,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 15,
    },
});

export default styles;