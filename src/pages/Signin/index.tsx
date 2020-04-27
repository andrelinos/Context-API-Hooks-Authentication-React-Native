import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';

import { styles } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login</Text>
      <TextInput placeholder="Insert e-mail..." style={styles.input} />
      <TextInput placeholder="Insert password..." style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
