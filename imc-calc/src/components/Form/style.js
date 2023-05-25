import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        alignItems: "center",
        paddingTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 35,
    },
    input: {
        width: "90%",
        height: 40,
        paddingLeft: 35,
        borderRadius: 50,
        backgroundColor: "#f0f0f3",
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 18,
        marginBottom: 15,
    },
    button: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "#ff0044",
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        marginLeft: 75
    },
    textButton: {
        color: "#ffffff",
        fontSize: 20,
    },
    errorMessage: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 32,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        width: 350,
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#9976"
    },
    resultImcItem: {
        fontSize: 30,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList: {
        fontSize: 25,

    }
});

export default styles