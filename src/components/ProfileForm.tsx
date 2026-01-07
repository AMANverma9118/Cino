import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ProfileForm = () => (
  <View style={styles.formContainer}>
    <Text style={styles.label}>User_name</Text>
    <TextInput style={styles.input} placeholder="Enter username" placeholderTextColor="#aaa" />

    <Text style={styles.label}>Full name</Text>
    <TextInput style={styles.input} placeholder="Name Surname" placeholderTextColor="#aaa" />

    <Text style={styles.label}>Email</Text>
    <TextInput style={styles.input} placeholder="abc123@gmail.com"  placeholderTextColor="#aaa" />
  </View>
);

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#0a0808ff',
    marginTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    flex: 1,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginTop: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#7a0416ff',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
});

export default ProfileForm;