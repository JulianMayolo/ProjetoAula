import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: "center",
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        margin: 12,
        width: 385,
        maxHeight: 251,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        borderRadius: 112,
        backgroundColor: '#C4C4C4',
        alignSelf: 'center',
        width: 112,
        height: 110,
        marginTop: 1,
    },
    userInfo: {
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center',
    },
    email: {
        fontSize: 16,
        color: '#777',
        alignSelf: 'center',
    },
    button: {
        width: 116,
        height: 42,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },

});
export default styles;