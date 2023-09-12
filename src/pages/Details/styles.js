import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        zIndex: 1,
    },
    infoContainer: {
        width: 380,
        height: 480,
        marginHorizontal: 40,
        marginTop: 160,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        borderWidth: 0.9,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        display: "flex",
        flex: 4,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    avatarContainer: {
        width: 163,
        height: 163,
        borderRadius: 15,
        position: 'absolute',
        top: 70,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 220,
        backgroundColor: '#000',
    },
    avatar: {
        borderRadius: 112,
        backgroundColor: '#C4C4C4',
        alignSelf: 'center',
        width: 164,
        height: 164,
        alignSelf: 'center',
    },
    labelName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 80,
        marginStart: 30,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    labels: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginStart: 30,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    infoUser: {
        fontSize: 16,
        color: '#FFF',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginStart: 30,
        backgroundColor: 'transparent'
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        height: 60,
        marginBottom: 50,
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

    },
});
export default styles;
