
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CustomFormProps {
  // Add your props here
}

const CustomForm: React.FC<CustomFormProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Reusable form component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CustomForm;
