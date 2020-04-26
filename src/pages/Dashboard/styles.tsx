import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 10,
    color: '#999',
    marginBottom: 20,
  },

  button: {
    width: 250,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
