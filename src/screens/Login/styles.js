import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor:'#ECF0F1',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
    width: '100%',
    padding: 10,
  },
  imgContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  fieldsContainer: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  },
  emailStyles: {
    flex: 1,
    marginTop: 10,
  },
  emailContainerStyles: {
    borderColor: '#ccc',
    borderRadius: 30,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  emailInput: {
    marginLeft: 15,
  },
  errorStyles: {
    marginLeft: 25,
    marginTop: -15,
    color: '#ff0000',
  },
  passwordContainer: {
    borderColor: '#ccc',
    borderRadius: 30,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  forgotContainer: {
    flex: 1,
    width: '75%',
    alignSelf: 'center',
    marginTop: 10,
  },
  forgotText: {
    color: '#4240A0',
    textAlign: 'right',
    fontSize: 16,
  },
  btnContainer: {
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#003271',
    borderRadius: 20,
    padding: 10,
    marginTop:30
  },
  versionStyles: {
    alignSelf: 'center',
    color: '#828687',
  },
  activityIndicator:{
      alignSelf:'center',
      justifyContent:'center'
  }
});

export default styles;
