import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignUpForm = () => {
  return (
    <View>
      <View>
        <Input label='Enter Phone Number' />
      </View>
      <Button title='Submit' />
    </View>
  );
};

export default SignUpForm;
