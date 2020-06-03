import React, {useState, useEffect} from 'react';
import Form from './Components/Form';
import Perfil from './Components/Perfil';

import api from './services/api';

import {View, Text, StyleSheet, Alert} from 'react-native';

const App = () => {
  const [dados, setDados] = useState({});

  useEffect(() => {
    api.get('/facebook').then((response) => setDados(response.data));
  }, []);

  const searchUser = (user) => {
    if (user !== '') {
      try {
        api
          .get(`/${user}`)
          .then((response) => setDados(response.data))
          .catch(() => Alert.alert('Usuário não encontrado'));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Form search={searchUser} />
      <Perfil dados={dados} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
