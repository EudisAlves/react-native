import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 11,
    paddingHorizontal: 10,
  },
  
  productContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productNameContainer: {
    flex: 1,
  },
  productName: {
    marginLeft: 10,
    color:'#424141'
  },
  inputsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: 90,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
    marginLeft: 10,
    paddingHorizontal: 9,
    backgroundColor: '#ffffff'
  },
  totalText: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,

  },
  scrollView: {
    flex: 1,
    marginBottom: 5, // opcional, se desejar adicionar uma margem inferior ao ScrollView
  },
});

export default styles;