import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Example(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/login.png')}
          />
          <Text style={styles.title}>
            Enter your details
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                  props.setScreen('Home')
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
           
              onPress = {() => props.setScreen('Register')
            }
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 500,
    height: 300,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 27,
    fontWeight: '500',
    color: '#23297a',
    marginBottom: 6,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#929292',
    textAlign: 'left',
    marginBottom: -6,
  },
  form: {
    marginBottom: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#23297a',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '10',
    color: '#23297a',
    marginBottom: 3,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '360',
    color: '#222',
    borderColor: '#23297a',
    borderWidth: 1,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#23297a',
    borderColor: '#23297a',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400',
    color: '#fff',
  },
});