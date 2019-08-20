export default {
  name: {
    marginTop: 10,
    fontSize: 22,
    fontFamily: 'Arial',
    fontWeight: '700'
  },
  info: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Arial',
    fontStyle: 'italic'
  },
  button: (disabled) => {
    return {
      backgroundColor: disabled ? '#F7F7F7' : '#029DAD',
      width: 200,
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      marginTop: 10
    }
  },
  buttonCancel: {
    backgroundColor: '#777878',
    width: 200,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    // marginBottom: 30
  },
  textButton: {
    fontSize: 30,
    fontFamily: 'Georgia, serif',
    color: '#FFFFFF'
  },
  imageView: {
    // flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 50,
    width: 350,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#029DAD',
    marginBottom: 40
  },
  image: {
    height: 300,
    width: 230
  }
}