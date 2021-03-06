export default {
  modal: {  
    flex: 1,    
    alignItems: 'center',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  coloredView: {
    height: 500,
    width: 500,
    marginVertical: 20,
    backgroundColor: '#029DAD',
    alignItems: 'center'
  },
  text: {
    marginTop: 120,
    marginHorizontal: 30,
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button: (isCancel) => {
    return {
      backgroundColor: isCancel ? '#029DAD' : '#F7F7F7',
      marginTop: 120,
      padding: 20,
      width: 200,
      height: 90,
      alignItems: 'center',
      borderRadius: 10
    }
  },
  textButton:(isCancel) => {
    return {
      fontSize: 40,
      color: isCancel ? '#FFFFFF' : '#029DAD',
    }
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}