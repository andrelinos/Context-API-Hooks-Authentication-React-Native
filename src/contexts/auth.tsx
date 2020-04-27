import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadStoragedData() {
        const [name, token] = await AsyncStorage.multiGet([
          '@RNAuth:user',
          '@RNAuth:token',
        ]);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (name && token) {
          // Set toke for all request
          api.defaults.headers.Authorization = `Bearer ${token[1]}`;

          setUser(JSON.parse(name[1]));
          setLoading(false);
        }
      }
      loadStoragedData();
    } catch (err) {
      return;
    }
  });

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    // Set toke for all request
    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook próprio
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
