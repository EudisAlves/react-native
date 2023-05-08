import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc: {
        flex: 1,
        marginTop: 2,
        paddingTop: 5,
        alignItems: "center",
        width: "100%",
    },  

    resultImc: {
        flex:1,
        marginTop: -45,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        
    },

    numberImc: { 
        fontSize: 48,
        color: "#020024",
        fontWeight: "bold", 
    },

    information: {
        fontSize: 18,
        color: "#020024",
        fontWeight: "bold",
    },

    boxShareButton: {
        alignItems: "center",
        marginBottom: 500,    
    },

    shared: {
        backgroundColor: "#1817f2",
        borderRadius: 50,
        padding: 15,
        width: 150,
        textAlign: "center",
        alignItems: "center",
        borderColor: "#333",
    },

    sharedText: {
        color: "#fff",
        fontSize: 18,
    }
});

export default styles