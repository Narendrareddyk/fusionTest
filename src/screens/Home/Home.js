import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import HomeHeader from '../../components/HeaderComponents/HomeHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import {Picker} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const employeeData = [
  {
    companyName: 'HCL',
    startDate: '05-29-2021',
    endDate: '06-04-2021',
    regHours: '43:00',
    totalHrs: '43:00',
    submitDate: '06-01-2021',
    status: 'open',
    statusColor: '#4379F9',
  },
  {
    companyName: 'HCL',
    startDate: '05-22-2021',
    endDate: '05-28-2021',
    regHours: '43:00',
    totalHrs: '43:00',
    submitDate: '06-01-2021',
    status: 'submitted',
    statusColor: '#54576D',
  },
  {
    companyName: 'HCL',
    startDate: '05-01-2021',
    endDate: '05-07-2021',
    regHours: '43:00',
    totalHrs: '43:00',
    submitDate: '06-01-2021',
    status: 'Rejected',
    statusColor: '#950304',
  }, 
  {
    companyName: 'HCL',
    startDate: '04-19-2021',
    endDate: '04-25-2021',
    regHours: '43:00',
    totalHrs: '43:00',
    submitDate: '06-01-2021',
    status: 'Rejected',
    statusColor: '#950304',
  },
  {
    companyName: 'HCL',
    startDate: '04-03-2021',
    endDate: '04-09-2021',
    regHours: '43:00',
    totalHrs: '43:00',
    submitDate: '06-01-2021',
    status: 'Approved',
    statusColor: '#009A21',
  },
];

const renderHeader = (section, _, isActive) => {
  return (
    <Animatable.View
      duration={400}
      style={[styles.header, isActive ? styles.active : styles.inactive]}
      transition="backgroundColor">
      <View style={styles.mainContainer}>
        <View style={{
          backgroundColor: section.statusColor,
          justifyContent: 'center',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          flex: 0.13,
        }}>
          <Text style={{
            transform: [{rotate: '90deg'}],
            color: '#fff',
            fontSize: 8,
          }} numberOfLines={1}>
            {section.status}
          </Text>
        </View>
        <View style={{flex: 1, marginLeft: 20, justifyContent: 'center'}}>
          <Text style={isActive ? styles.active : styles.inactive}>
            {section.companyName}
          </Text>
          <Text
            style={[
              styles.dateStyles,
              isActive ? styles.active : styles.inactive,
            ]}>
            {section.startDate} - {section.endDate}
          </Text>
        </View>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          {isActive ? (
            <Entypo
              style={styles.iconStyles}
              name="chevron-down"
              size={20}
              color="#fff"
            />
          ) : (
            <Entypo
              style={styles.iconStyles}
              name="chevron-right"
              size={20}
              color="#000"
            />
          )}
        </View>
      </View>
    </Animatable.View>
  );
};

const renderContent = (section, _, isActive) => {
  return (
    <View style={styles.content}>
      <Animatable.View animation={isActive ? 'bounceIn' : undefined}>
        <View style={styles.contentStyles}>
          <View style={{flex: 1}}>
            <Text style={styles.hrsStyles}>Regular Hours</Text>
            <Text>43:00</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.hrsStyles2}>Total Hours</Text>
            <Text style={{textAlign: 'right'}}>43:00</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '95%',
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.hrsStyles}>Employee Remarks</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.hrsStyles2}>Submitted Date</Text>
            <Text style={{textAlign: 'right'}}>05-28-2021</Text>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Text style={{textAlign: 'right', color: '#898989'}}>open</Text>
              <EvilIcons
                name="external-link"
                color="#898989"
                size={20}
                style={{marginTop: 2}}
              />
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default function Home() {
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [selectedValue, setSelectedValue] = useState('key0');

  const onValueChange = value => {
    setSelectedValue(value);
  };

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const actions = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  return (
    <View style={{flex: 1}}>
      <HomeHeader />

      <ScrollView>
        <View style={styles.ContainerStyles}>
          <Picker
            note
            mode="dropdown"
            style={{width: 150, color: '#000'}}
            selectedValue={selectedValue}
            onValueChange={onValueChange}>
            <Picker.Item label="Status" value="key0" />
            <Picker.Item label="Open" value="key1" />
            <Picker.Item label="Submitted" value="key2" />
            <Picker.Item label="Rejected" value="key3" />
            <Picker.Item label="Approved" value="key4" />
          </Picker>
          <View style={styles.lineStyles} />
        </View>
        <Accordion
          activeSections={activeSections}
          sections={employeeData}
          touchableComponent={TouchableRipple}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={actions}
          sectionContainerStyle={{backgroundColor: '#fff'}}
          containerStyle={{backgroundColor: '#fff'}}
        />
      </ScrollView>
    </View>
  );
}
