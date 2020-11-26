import { ROOT_URL } from '@env';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const SignUpForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone });
      console.log(response);

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <View>
        <Input
          label='Enter Phone Number'
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
};

export default SignUpForm;
