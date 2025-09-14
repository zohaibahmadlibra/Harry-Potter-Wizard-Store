import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email === '') {
      Alert.alert('Login Error', 'Email is required');
    } else if (password === '') {
      Alert.alert('Login Error', 'Password is required');
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Products'); // Navigate to Products page
      }, 2000);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov7MQ3gTMBjY4ZHkf5LtoBiMM_sG4pF1A4w&s',
      }}
      style={styles.background}
      blurRadius={5}>
      <View style={styles.overlay}>
        <Text style={styles.maintitle}> Welcome</Text>
        <Text style={styles.title}> to "Harry Potter Wizard's Emporium"</Text>
        <Text style={styles.description}>
          Explore the magical world of Hogwarts with exclusive merchandise,
          potions, and more!
        </Text>

        <View style={styles.loginScreen}>
          <View style={[styles.inputField, { marginBottom: 32 }]}>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor="#888"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter password"
              placeholderTextColor="#888"
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              {loading ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <Text style={styles.loginText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adds a semi-transparent overlay for better readability
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  maintitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00FFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00FFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 32,
  },
  loginScreen: {
    width: '100%',
  },
  inputField: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ddd',
    flex: 1,
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 24,
    fontSize: 18,
  },
  actions: {
    // flexDirection: "row",
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#00FFFF',
    // flex: 1,
    width: 125,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
