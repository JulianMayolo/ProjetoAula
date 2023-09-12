import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        paddingTop: "8%",
        zIndex: 1,
    },
    searchContainer: {
        width: 380,
        height: 60,
        marginTop: 30,
        backgroundColor: '#F1F3F9',
        borderRadius: 8,
        alignContent: "center",
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    input: {
        backgroundColor: "#FEFDFE",
        marginTop: 2,
        width: "80%",
        padding: 4,
        borderWidth: 4,
        borderColor: "#C5C5C7",
        borderRadius: 8,
        alignSelf: 'center',
    },
    image: {
        width: 27.238,
        height: 26.538,
        flexShrink: 0,
        alignSelf: 'center',
        marginEnd: 10,
    },
    titleContainer: {
        width: 480,
        height: 120,
        marginTop: 30,
        borderRadius: 8,
        alignContent: "center",
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    title: {
        alignSelf: "flex-start",
        fontSize: 24,
        marginTop: 20,
        marginBottom: 10,
        letterSpacing: 0.5,
        left: 10,
        color: '#FFF'
    },
});
export default styles;
