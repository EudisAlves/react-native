import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    informacion: {
        alignContent: 'center',
        backgroundColor: '#000',
        margin: 8,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fd0606',
        height: 150,
        padding: 20,
    },
    text: {
        fontSize: 14,
        color:'#fff',
        marginLeft: 8,
        margin: 20,
    },
    label: {
        marginRight: 10,
        marginTop: 15,
        color:'#fff',
    },
    inputInfo: {
        flexDirection: 'row',
    },

    input: {
        color: '#fff',
        margin: 7,
        borderWidth: 2,
        backgroundColor: '#c1c1c1',
        borderRadius: 15,
        padding: 6,
        width: 150,
        height: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        width: 120,
        marginTop: 5, 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#ff3555', 
        overflow: 'hidden',
        marginLeft: 130,
        shadowColor:'#fff'
      },


  });
  
  export default styles;