import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {Title, Caption, Divider, Drawer} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const focused = '#fff';
const unfocused = '#A2BDD0';

function CustomDrawer({props, navigation}) {
  const [active, setActive] = useState('');
  const [active2, setActive2] = useState('');
  const [active3, setActive3] = useState('');
  const [active4, setActive4] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#012F56'}}>
      <Image
        source={{
          uri: 'https://www.ariba.com/-/media/aribacom/page-images/02-solutions/022000_solutions-overview/0222000_strategic-sourcing/0222200_contractmanagementsoftware/hero_contractmanagementsoftware.jpg?h=650&la=en-US&w=1600&hash=F8BCE4588611852DB45D3B583C6857662C6FBB92',
        }}
        style={{width: windowWidth - 89, height: '100%', opacity: 0.5}}
      />
      <DrawerContentScrollView
        {...props}
        style={{position: 'absolute', flex: 1, width: '100%'}}>
        <View style={{flex: 1, marginTop: 0}}>
          <Drawer.Section style={{margin: -12, marginTop: 0}}>
            <DrawerItem
              active={active === 'first'}
              style={[
                styles.label_container,
                active ? styles.active : styles.inactive,
              ]}
              icon={({focused, color, size}) => (
                <Entypo
                  name="text-document"
                  color={active ? focused : unfocused}
                  size={22}
                />
              )}
              label="View Timesheets"
              labelStyle={styles.label_style}
              onPress={() => {
                navigation.navigate('ViewTimeSheets');
                setActive('first');
              }}
            />
            <Divider />

            <DrawerItem
              active={active === 'second'}
              style={[
                styles.label_container,
                active2 ? styles.active : styles.inactive,
              ]}
              icon={({focused, color, size}) => (
                <MaterialIcons
                  name="post-add"
                  color={active2 ? focused : unfocused}
                  size={22}
                />
              )}
              label="Enter Timesheet"
              labelStyle={styles.label_style}
              onPress={() => {
                console.log('Enter TimeSheet');
              }}
            />

            <Divider />
            <DrawerItem
              active={active === 'third'}
              style={[
                styles.label_container,
                active3 ? styles.active : styles.inactive,
              ]}
              icon={({focused, color, size}) => (
                <Feather
                  name="lock"
                  color={active3 ? focused : unfocused}
                  size={22}
                />
              )}
              label="Change Password"
              labelStyle={styles.label_style}
              onPress={() => {
                console.log('Change Password');
              }}
            />
            <Divider />

            <DrawerItem
              active={active === 'foutrh'}
              style={[
                styles.label_container,
                active4 ? styles.active : styles.inactive,
              ]}
              icon={({focused, color, size}) => (
                <MaterialIcons
                  name="power-settings-new"
                  color={active4 ? focused : unfocused}
                  size={22}
                />
              )}
              label="Logout"
              labelStyle={styles.label_style}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  main_block: {
    height: 100,
    // marginTop: 10,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label_style: {
    color: '#fff',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    marginLeft: -20,
  },
  label_container: {
    borderRadius: null,
    marginTop: -2,
    paddingLeft: 10,
  },
  active: {
    backgroundColor: '#1A99CE',
  },
  inactive: {
    //backgroundColor:'red'
  },
});
