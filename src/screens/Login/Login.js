import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginValidations = Yup.object().shape({
  email: Yup.string()
    .trim()
    .label('Email')
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .min(6, 'Minimum 6 characters')
    .max(12, 'Maximum 12 characters only'),
});

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={-100}
      enabled
      style={styles.mainContainer}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.imgContainer}
          />
        </View>

        <SafeAreaView
          style={{
            flex: 1
          }}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, actions) => {
              navigation.navigate('Home');
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 1000);
            }}
            validationSchema={loginValidations}>
            {formikProps => (
              <React.Fragment>
                <View style={styles.fieldsContainer}>
                  <View style={styles.emailStyles}>
                    <Input
                      placeholder="Email Address"
                      inputContainerStyle={styles.emailContainerStyles}
                      inputStyle={styles.emailInput}
                      leftIcon={
                        <Icon
                          name="user-circle"
                          size={24}
                          color="#000"
                          style={styles.emailInput}
                        />
                      }
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                    />
                    <Text style={styles.errorStyles}>
                      {formikProps.touched.email && formikProps.errors.email}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Input
                      placeholder="Password"
                      inputContainerStyle={styles.passwordContainer}
                      inputStyle={styles.emailInput}
                      secureTextEntry
                      leftIcon={
                        <MaterialIcons
                          name="vpn-key"
                          size={24}
                          color="#000"
                          style={styles.emailInput}
                        />
                      }
                      onChangeText={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                    />
                    <Text style={styles.errorStyles}>
                      {formikProps.touched.password &&
                        formikProps.errors.password}
                    </Text>
                  </View>
                  <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                  </View>
                  <View style={{flex: 1}}>
                    {formikProps.isSubmitting ? (
                      <ActivityIndicator
                        size="large"
                        style={styles.activityIndicator}
                      />
                    ) : (
                      <Button
                        title="Login"
                        titleStyle={{color: '#fff'}}
                        buttonStyle={styles.btnContainer}
                        onPress={formikProps.handleSubmit}
                      />
                    )}
                    <Text style={styles.versionStyles}>v.0.0.5</Text>
                  </View>
                </View>
              </React.Fragment>
            )}
          </Formik>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
