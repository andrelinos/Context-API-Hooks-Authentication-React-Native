import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useAuth } from '../../contexts/auth';

import { styles } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <>
      <StatusBar translucent backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.name}>Olá, {user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Dashboard;
