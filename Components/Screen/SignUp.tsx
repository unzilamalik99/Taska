import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamsList = {
  SignUp: undefined;
  Home: undefined;
  Login:undefined;
};

interface SignUpProps {
  navigation: StackNavigationProp<RootStackParamsList, 'SignUp'>;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
 const [badPassword,setBadPassword]=useState(false);
  const [selectRoll, setSelectRoll] = useState('');
  const [badSelectRoll,setBadSelectRoll]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badFullName,setBadFullName]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
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
    if (fullName === '') {
      setBadFullName(true);
    } else {
      setBadFullName(false);
    }
    if (selectRoll === '') {
      setBadSelectRoll(true);
    } else {
      setBadSelectRoll(false);
    }
  
  };

  const handleSignUpPress = () => {
    validate();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('../Images/Logo.png')} />
      <Text style={styles.text1}>Taska</Text>
      <Text style={styles.text2}>Create New Account</Text>

      <View style={styles.inputContainer}>
        <Image source={require('../Images/user.png')} style={styles.icon} />
        <TextInput
          placeholder='Full Name'
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>
      {badFullName && (
        <Text style={styles.errorText}>
          Please Enter a valid FullName
        </Text>
      )}

<View style={styles.inputContainer}>
        <Image source={require('../Images/user (1).png')} style={styles.icon} />
        <Picker
          style={styles.input}
          selectedValue={selectRoll}
          onValueChange={(itemValue) => setSelectRoll(itemValue)}
          placeholder='Select Roll'
        >
          <Picker.Item label="Select Roll" value="" />
          <Picker.Item label="jhon" value=" jhon" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </View>
      {badSelectRoll && (
        <Text style={styles.errorText}>
          Please Enter a valid Roll
        </Text>
      )}

      <View style={styles.inputContainer}>
        <Image source={require('../Images/mail.png')} style={styles.icon} />
        <TextInput
          placeholder='Email'
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      {badEmail && (
        <Text style={styles.errorText}>
          Please Enter a valid Email
        </Text>
      )}

      <View style={styles.inputContainer}>
        <Image source={require('../Images/lock (1).png')} style={styles.icon} />
        <TextInput
          placeholder='Password'
          style={styles.input}
          secureTextEntry
          value={password}
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

      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInLink}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height:650,
      },      
      
  logo: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: 60
  },
  text1: {
    marginTop: 5,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  text2: {
    fontSize: 25,
    fontWeight: '600',
  },
  inputContainer: {
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
    marginRight:20
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    paddingHorizontal:70
  },
  button: {
    width: '80%',
    backgroundColor: '#0000FF',
    color: 'white',
    height: 53,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 25,
    color: '#0000FF',
  },
  signInText: {
    fontSize: 15,
  },
  signInLink: {
    color: '#0000FF',
  },
});
