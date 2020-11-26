import { ROOT_URL } from '@env';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone,
        code,
      });

      firebase.auth().signInWithCustomToken(data.token);
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
      <View>
        <Input
          label='Enter code'
          value={code}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
};

export default SignInForm;
