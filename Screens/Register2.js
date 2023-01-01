import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    stackLayout,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Register2(props) {
    const [form, setForm] = useState({
        nom: '',
        prenom: '',
        username: '',
        matricule: '',
        specialite: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>


                       

                        
                    </View>

                    <View style={styles.form}>
                        <View>
                            <ScrollView>
                                

                           


                              

                                <View style={styles.input}>
                                    <Text style={styles.inputLabel}>Specialty </Text>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="specialite"
                                        onChangeText={specialite => setForm({ ...form, specialite })}
                                        placeholder="Specialty"
                                        placeholderTextColor="#6b7280"
                                        style={styles.inputControl}
                                        value={form.specialite}
                                    />
                                </View>


                                <View style={styles.input}>
                                    <Text style={styles.inputLabel}>Email </Text>
                                    <TextInput
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="email-adress"
                                        onChangeText={email => setForm({ ...form, email })}
                                        placeholder="Example.example@student.emi.ac.ma"
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

                                <View style={styles.input}>
                                    <Text style={styles.inputLabel}>Confirm Password</Text>

                                    <TextInput
                                        autoCorrect={false}
                                        onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
                                        placeholder="********"
                                        placeholderTextColor="#6b7280"
                                        style={styles.inputControl}
                                        secureTextEntry={true}
                                        value={form.confirmPassword}
                                    />
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.formAction}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.setScreen('HomeScreen')
                                }}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity

                            onPress={() => props.setScreen('Login')
                            }
                            style={{ marginTop: 'auto' }}>
                            <Text style={styles.formFooter}>
                                Already have an account?{' '}
                                <Text style={{ textDecorationLine: 'underline' }}>Log In</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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