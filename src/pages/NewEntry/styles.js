import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },
  label: {
    fontSize: 18
  },
  value: {
    fontSize: 22
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    width: width - 20,
  }
})