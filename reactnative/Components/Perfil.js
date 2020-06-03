import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import styles from './styles';

const Perfil = ({dados}) => {
  const {
    login,
    name,
    location,
    bio,
    html_url,
    avatar_url,
    public_repos,
    following,
    followers,
  } = dados;

  const onButtonPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: `${avatar_url}`}} style={styles.imageContent} />
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.user}>{login}</Text>
          <Text style={styles.name}>Nome: {name}</Text>
          <Text style={styles.paragraph}>Localização: {location}</Text>
          <Text style={styles.paragraph}>Bio: {bio}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onButtonPress(`${html_url}/repositories`)}>
          <Text style={styles.buttonText}>{public_repos} Repositórios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onButtonPress(`${html_url}/followers`)}>
          <Text style={styles.buttonText}>{followers} Seguidores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onButtonPress(`${html_url}/following`)}>
          <Text style={styles.buttonText}>{following} Seguindo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onButtonPress(html_url)}>
          <Text style={styles.buttonText}>Ver Perfil Completo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Perfil;
