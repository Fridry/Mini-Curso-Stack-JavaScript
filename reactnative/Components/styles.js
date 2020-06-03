import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff', //#fff
    width: '80%',
    minHeight: '80%',

    borderRadius: 6,

    shadowOpacity: 0.75,
    elevation: 7,
  },

  upperContainer: {
    height: 80,
    backgroundColor: '#0366d6',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },

  imageContainer: {
    backgroundColor: '#fff',
    width: 84,
    height: 84,
    borderRadius: 50,
    padding: 2,
    marginHorizontal: 110,
    marginVertical: 40,
  },

  imageContent: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  lowerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 25,
  },

  user: {
    fontSize: 18,
    textAlign: 'center',
  },

  name: {
    textAlign: 'center',
    fontSize: 16,
    color: '#0366d6',
    opacity: 0.6,
    fontWeight: 'bold',
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },

  buttonContainer: {
    borderTopColor: '#999',
    borderTopWidth: 1,
    width: '100%',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#0366d6',
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    width: 150,
    margin: 5,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },

  submit: {
    alignSelf: 'center',
    backgroundColor: '#0366d6',
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    width: 100,
    margin: 5,
  },

  inputContainer: {
    flexDirection: 'row',
  },

  input: {
    padding: 2,
    borderColor: '#0366d6',
    borderWidth: 1,
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
  },
});

export default styles;
