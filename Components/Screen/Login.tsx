import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { auth } from '../Firebase/firebaseConfig';
import 'firebase/auth';

type RootStackParamsList = {
  SignUp: undefined;
  Home: undefined;
};

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, 'SignUp'>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 
  const handleSignIn = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential: { user: any; }) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error: any) => {
        console.error('Error signing in:', error);
      });
  
      validate();
  
      if (email === '' || password === '')
      {
        alert('Please enter both email and password.');
        return;
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
        return;
      }
      const isValidLogin = true;
    
      if (isValidLogin) {
        navigation.navigate('Home');
        // setEmail('');
        // setPassword('');
      } else {
        alert('Invalid login credentials. Please try again.');
      }
  };
  const validate = () => {
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    
    }
    if (password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../Images/Logo.png')} />
        <Text style={styles.Text1}>Taska</Text>
        <Text style={styles.Text2}>Login to your Account</Text>

        <View style={styles.container2}>
          <Image source={require('../Images/mail.png')} style={styles.icon} />
          <TextInput
  placeholder='Enter your Email'
  style={styles.input}
  onChangeText={(text) => setEmail(text)}
  accessibilityLabel="Email Input"
  accessibilityHint="Type your email address"
/>

        </View>

        {badEmail && (
            <Text style={styles.errorText}>
              Please Enter a valid Email
            </Text>
          
        )}

<View style={styles.container2}>
  <Image source={require('../Images/lock (1).png')} style={styles.icon} />
  <TextInput
    placeholder='Enter your Password'
    style={styles.input}
    secureTextEntry={!showPassword}
    onChangeText={(text) => setPassword(text)}
  />
<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
  <Image source={showPassword ? require('../Images/close-eye.png') : require('../Images/view.png')} style={styles.icon} />
</TouchableOpacity>

</View>
{badPassword && (
            <Text style={styles.errorText}>
              Please Enter a valid Password
            </Text>
          
        )}

        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.btn2}>
          <Text style={styles.btnText2}> Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: 'blue',fontWeight:'bold' }}> Create new Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
height:750,
backgroundColor:'white',
alignItems:'center',
  },
    logo: {
      width: 100,
      height: 100,
      marginTop:80,
      alignSelf: 'center',
      borderRadius: 60,
    },
    Text1:{
       marginTop: 10, alignSelf: 'center', fontSize: 40, fontWeight: 'bold', color: '#000',
    },
    Text2:{
      fontSize:25,
      fontWeight:'600',
    },
    container2: {
    marginVertical: 5,
    width: '80%',
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#E5E7E9',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 5,
    },
    icon: {
      width: 22,
      height: 22,
     marginRight:10
    },
    input: {
      marginLeft: 5,
      flex: 1,
    },
    btn:{
      width:'80%',
      backgroundColor:'#0000FF',
      color:'white',
      height:50,
      borderRadius:40,
      alignItems:'center',
      marginTop:20
    },
    btnText:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      marginTop:10,
      flexDirection:'row'

    },
    btnText2:{
      fontSize:15,
      
    },
    btn2:{
      flexDirection:'row',
      marginTop:25,
      color:'#0000FFf'
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      fontWeight: 'bold',
      alignSelf:'flex-start',
      paddingHorizontal:70
    },
  });
  