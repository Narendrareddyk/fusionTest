import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function HomeHeader(props) {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        barStyle="light-content"
        placement="center"
        leftComponent={() => (
          <TouchableNativeFeedback
            useForeground={true}
            background={TouchableNativeFeedback.Ripple('#ccc', true)}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="menu" color="#000" size={27} />
            </View>
          </TouchableNativeFeedback>
        )}
        containerStyle={{backgroundColor: '#fff', height: 80}}
        centerComponent={() => (
          <View
            style={{
              flex: 1.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../../assets/logo.png')}
              style={{width: 90, height: 70}}
            />
          </View>
        )}
        rightComponent={() => (
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo name="plus" size={27} />
          </View>
        )}
      />
    </View>
  );
}

export default HomeHeader;
