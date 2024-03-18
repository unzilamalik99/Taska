import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../AppNavigator";


type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timeout); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Images/Logo.png')} />
      <Text style={styles.text1}>Taska</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000FF',
    width: 428,
    height: 726,
    borderRadius: 25,
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: 115,
    height: 116,
    alignSelf: 'center',
    borderRadius: 60,
  }
});
