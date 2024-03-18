import React from 'react';
import { View, TextInput, Image, ImageSourcePropType, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  value?: string;
  onChange?: (text: string) => void;
  placeholder: string;
  icon: ImageSourcePropType;
  type?: 'password' | undefined;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ value, onChange, placeholder, icon, type }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={(text) => {
          onChange && onChange(text);
        }}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

export default CustomTextInput;

