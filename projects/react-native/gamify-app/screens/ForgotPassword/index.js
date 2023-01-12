import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Container from '../../components/Container';
import Colors from '../../constants/Colors';
import TextS from '../../components/Textes/TextS';
import TextXLLLL from '../../components/Textes/TextXLLLL';



const ForgotPassword = props => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [email, setEmail] = useState();
  const [done, setDone] = useState(false);

  const setUserEmailHandler = (text) => {
    setEmail(text);
  }

  const setUserPasswordHandler = (text) => {
    setPassword(text);
  }

  const setUserRepasswordHandler = (text) => {
    setRepassword(text);
  }


  const setUserHandler = () => {
    setEmail('');
    setUser(prevState => ({
      ...prevState,
      email: email,
    }));
  }

  const setPasswordHandler = () => {
    if (password === repassword) {
      setPassword('');
      setRepassword('');
      setDone('true');
      setUser(prevState => ({
        ...prevState,
        password: password,
      }));
    }
  }

  useEffect(() => {
    if (done) {
      setUser(null);
      setTimeout(() => {
        setDone(false);
        props.navigation.navigate('Login');
      }, 3000)
    }
  }, [done])


  const rePasswordForm = (
    <View style={styles.rePasswordForm}>
      <View style={styles.formGroup}>
        <TextS style={styles.label}>Password</TextS>
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={setUserPasswordHandler} />
      </View>
      <View style={styles.formGroup}>
        <TextS style={styles.label}>Re-password</TextS>
        <TextInput
          placeholder="Re-password"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={setUserRepasswordHandler} />
      </View>
      <TouchableOpacity>
        <Button onPress={setPasswordHandler} style={styles.button} color={Colors.colorGreen} title='Submit' />
      </TouchableOpacity>
    </View>
  )

  const successfull = (
    <View style={styles.successfullContainer}>
      <Ionicons style={{ marginBottom: 20 }} name="ios-checkmark-circle" size={30} color={Colors.colorGreen} />
      <TextS>Your password changed seccuessfully.</TextS>
    </View>
  )

  // const unsuccessfull = ()

  const form = (
    <View style={styles.form}>
      <View style={styles.formGroup}>
        <TextS style={styles.label}>Email adress</TextS>
        <TextInput
          placeholder="Your email"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={setUserEmailHandler} />
      </View>
      <TouchableOpacity>
        <Button onPress={setUserHandler} style={styles.button} color={Colors.colorGreen} title='Submit' />
      </TouchableOpacity>
    </View>
  )

  return (
    <Container style={{
      paddingHorizontal: 20,
      justifyContent: 'space-evenly'
    }}>
      {
        done
          ? successfull
          : <>
            <View style={styles.header}>
              <TextXLLLL style={{ color: Colors.colorGreen, textAlign: 'center' }}>Forgot Password</TextXLLLL>
              <TextS style={{ textAlign: 'center' }}>Enter the email address you used to create your account and we will email you a link to reset your password</TextS>
            </View>

            {
              user && user.email
                ? rePasswordForm
                : form
            }
          </>
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    flex: 1,
    position: 'relative'
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.colorBlue,
    zIndex: -1,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.05
  },
  header: {
    height: '40%',
    justifyContent: 'space-evenly',
    marginTop: '15%'
  },
  form: {
    width: '100%',
    height: '70%'
  },
  label: {
    color: Colors.colorGreen
  },
  input: {
    color: Colors.colorRed,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorGreen,
    marginBottom: '5%'
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },


  rePasswordForm: {
    height: '60%',
    justifyContent: 'flex-start'
  },



  successfullContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ForgotPassword;