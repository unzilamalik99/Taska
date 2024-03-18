import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

interface CommonButtonProps {
  onPress: () => void;
  bgColor: string;
  title: string;
  textColor: string;
  style?: StyleProp<ViewStyle>;
}

const CommonButton: React.FC<CommonButtonProps> = ({ onPress, bgColor, title, textColor, style }) => {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{ backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center' }, style]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
