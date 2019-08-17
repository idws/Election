export default {
  name: {
    marginVertical: 10,
    fontSize: 20,
    fontFamily: 'Georgia, serif'
  },
  button: (disabled) => {
    return {
      backgroundColor: disabled ? '#F7F7F7' : '#029DAD',
      width: 180,
      alignItems: 'center',
      padding: 10,
      borderRadius: 10
    }
  },
  buttonCancel: {
    backgroundColor: '#777878',
    width: 180,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Georgia, serif',
    color: '#FFFFFF'
  },
  imageView: {
    alignItems: 'center',
    padding: 20
  },
  image: {
    height: 200,
    width: 180
  }
}