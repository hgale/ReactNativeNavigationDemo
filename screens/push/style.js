import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  name: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center'
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorView: {
    width: 80,
    height: 80,
    margin: 10
  },
  imageContainer: {
    height: 200,
    width: 200,
    margin: 15,
    resizeMode: 'cover',
    justifyContent:'flex-end'
  },
  button: {
    height: 46,
    width: 150,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    backgroundColor: 'grey',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  buttonTextLight: {
    color: 'black',
    fontSize: 14,
  }
})
