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

export default function Register(props) {
    const [form, setForm] = useState({
        nom: '',
        prenom: '',
        username: '',
        matricule: '',
        specialite: '',
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff',height:"100%" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Sign Up
                    </Text>
                    <Text style={styles.subtitle}>
                        Enter your details
                    </Text>
                </View>
                <View style={styles.form}>
                <View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>First name </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="prenom"
                            onChangeText={prenom => setForm({ ...form, prenom })}
                            placeholder="First Name"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.prenom}
                        />
                        </View>
                    <View style={styles.input}>
                       <Text style={styles.inputLabel}>Last name </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="nom"
                            onChangeText={nom => setForm({ ...form, nom })}
                            placeholder="Last name"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.nom}
                        />
                            </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Username </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="Username"
                            onChangeText={username => setForm({ ...form, username })}
                            placeholder="Username"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.username}
                        />
                            </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Serial number </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="matricule"
                            onChangeText={matricule => setForm({ ...form, matricule })}
                            placeholder="Serial number"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.matricule}
                        />
                    </View>        
                    </View> 
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => props.setScreen('Register2')
                                // handle onPress
                            }>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Next</Text>
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