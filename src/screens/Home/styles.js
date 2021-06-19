import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 70,
    marginBottom: 5,
    marginTop: 5,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 10,
  },
  content: {
    padding: 10,
    flex: 1,
    marginBottom: 5,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 6,
  },
  dateStyles: {
    marginTop: 8,
  },
  active: {
    backgroundColor: '#1F4C6D',
    color: '#fff',
  },
  inactive: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dataContainer: {
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 0.13,
  },
  statusStyles: {
    transform: [{rotate: '90deg'}],
    color: '#fff',
    fontSize: 8,
  },
  iconStyles: {
    alignSelf: 'center',
    marginRight: 15,
  },
  contentStyles: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
  },
  hrsStyles: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  hrsStyles2: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  ContainerStles: {
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    width: '95%',
    alignSelf: 'center',
    elevation: 5,
  },
  lineStyles: {
    backgroundColor: '#000',
    width: '35%',
    height: 1,
    marginLeft: 15,
    marginTop: -8,
    marginBottom: 10,
  },
});

export default styles;
