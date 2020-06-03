import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

const Form = ({search}) => {
  const [user, setUser] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Insira o usuário"
        onChangeText={(user) => setUser(user)}
        defaultValue={user}
      />

      <TouchableOpacity style={styles.submit} onPress={() => search(user)}>
        <Text style={styles.buttonText}>Procurar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
