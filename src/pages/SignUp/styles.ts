import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    width: metrics.width * 0.8,
    borderColor: colors.champagne,
    paddingTop: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.white,
    height: 44,
    marginTop: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 16,
  },
  signInButton: {
    height: 44,
    width: metrics.width * 0.8,
    backgroundColor: colors.red,
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 8,
  },
  signUpButton: {
    marginTop: 8,
    justifyContent: 'center',
  },
  signInTextButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpTextButton: {
    color: colors.blueDark,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles;
