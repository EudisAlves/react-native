import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    informacion: {
      flexDirection: 'row',
      alignContent: 'center',
      backgroundColor: '#000',
      margin: 20,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#fd0606',
      height: 100,
      padding: 10
    },
    text: {
        fontSize: 14,
        color:'#fff',
        marginLeft: 80,
    },
    label: {
        marginRight: 10,
        marginTop: 15,
        color:'#fff',
    },
    input: {
        color: '#fff',
        margin: 7,
        borderWidth: 2,
        backgroundColor: '#c1c1c1',
        borderRadius: 15,
        padding: 6,
        width: 130,
        height: 40,
        flex: 1,
    },
    buttonContainer: {
        width: 190,
        marginTop: 15, 
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#ff3555', 
        overflow: 'hidden',
        marginLeft: 100,
        shadowColor:'#fff'
      },


  });
  
  export default styles;