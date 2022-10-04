import resho from "../../constants/resho";

const style = {
  modalView: {
    width:'100%',
    height: '100%',
    backgroundColor:'#676767',
    margin: 0,
    justifyContent:'flex-start',
    position: 'absolute',
    paddingBottom: 50

  },

  modal:{
    width:'100%',
    height:'100%',
    backgroundColor: 'white',
    borderRadius:15,
    alignItems:'center'
  },
  modalContainer:{
    width: 335*resho,
  },

  titleLine:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:23*resho
  },
  closeView:{
    padding:15
  },

  priceText:{
    marginLeft:10*resho
  },

  mediumText:{
    fontWeight: '500',
    fontSize:16*resho,
    lineHeight:20*resho,
    fontStyle:'normal',
    marginTop: 30*resho,
    marginBottom:17*resho,
    color:'#333',
    letterSpacing:0.75*resho,
  },

  titleText:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:22*resho,
    lineHeight:27*resho,
    letterSpacing:0.75*resho,
    color:'#333'
  },
  sizeText:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:16*resho,
    lineHeight:20*resho,
    marginTop:15*resho,
    color:'#333',
    letterSpacing:0.75*resho,
  },
  size:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:16*resho,
    lineHeight:20*resho,
    color:'#333',
  },

  checkedSize:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:16*resho,
    lineHeight:20*resho,
    color:'white',
  },


  checkLine:{
marginTop:5*resho,
    flexDirection: 'row',
    alignItems:'center'
  },

  radioButtonsView:{
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor:'#E5E5E5'
  },

  sizeBoxes:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:16*resho,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor:'#E5E5E5'
  },

  box:{
    width:57*resho,
    height: 32*resho,
    borderWidth:2,
    borderColor: 'black',
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    marginRight:9*resho,
    marginBottom: 10*resho
  },
  checkedBox:{
    width:57*resho,
    height: 32*resho,
    borderWidth:2,
    borderColor: 'black',
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    marginRight:9*resho,
    marginBottom: 10*resho,
    backgroundColor:'black'
  },

  colorView:{
    flexDirection:'row',
    marginTop:16*resho,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor:'#E5E5E5'
  },
  priceImageview:{
    width:226*resho,
    height:63*resho,
    backgroundColor:'blue',
    marginLeft: 'auto',
    marginRight:'auto'
  },

  priceView:{
    position: 'relative',
    alignItems:'center'
  },
  applyView:{

    height:40*resho,
    marginBottom:20*resho,
    marginTop:80*resho,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
   clearText:{
     fontWeight:'500',
     fontStyle:'normal',
     fontSize:16*resho,
     lineHeight:20*resho,
     letterSpacing:0.75*resho
   },
  apply:{
    borderColor:'black',
    borderWidth:1,
    width:100*resho,
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  }


};

export default style;
