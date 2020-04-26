import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textLogin: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 8,
    padding: 10,
  },

  button: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
