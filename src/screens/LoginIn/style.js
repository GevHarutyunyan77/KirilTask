import resho from '../../constants/resho';

const styles = {
  container: {
    width: 335 * resho,
    height: '100%',
  },

  logo: {
    width: 182 * resho,
    height: 33.23 * resho,
    marginTop: 116 * resho,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 102 * resho,
  },

  inputView: {
    width: '100%',
    height: 48 * resho,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20 * resho,
  },

  iconView: {
    marginLeft: 25 * resho,
    justifyContent: 'center',
  },

  forgotText: {
    fontWeight: '400',
    fontSize: 11 * resho,
    fontStyle: 'normal',
    letterSpacing: 0.75 * resho,
    color: '#333333',
    marginLeft: 'auto',
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 17 * resho,
  },

  signInButton: {
    width: 190 * resho,
    height: 54 * resho,
    marginTop: 41 * resho,
    marginBottom: 63 * resho,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16 * resho,
    lineHeight: 20 * resho,
    letterSpacing: 0.75 * resho,
    fontStyle: 'normal',
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 11 * resho,
    lineHeight: 14 * resho,
    fontStyle: 'normal',
    letterSpacing: 0.75 * resho,
    color: '#333333',
  },

  logosContainer: {
    flexDirection: 'row',
    width: 182 * resho,
    height: 38 * resho,
    marginTop: 36 * resho,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
  },

  cube: {
    backgroundColor: 'black',
    height: '100%',
    width: 38 * resho,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
