import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    constextImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",
    },
    resultImc: {
        borderRadius: 50,
    },
    numberImc: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxSharebutton:{
        width:"100%",
        alignItems:"center",
        marginBottom: 10,
      },
      shared:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom: 15,
        paddingTop:15,
        borderWidth: 1,
      },
      sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
      },
});

export default styles