import resho from "../../constants/resho";

const style = {

  header: {
    width: "100%",
    height: 105 * resho,
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent:'space-between',

  },
  title: {
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14 * resho,
    color: "#333A3A",
    letterSpacing:0.75*resho,
    marginTop:30*resho,
    // marginLeft:20*resho
  },
  filterView:{
    width: 90*resho,
    height: 32*resho,
    borderWidth:1*resho,
    borderColor:'black',
    // marginLeft:20*resho,
    marginTop:15*resho,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:8*resho,


  },

  filterText:{
    fontWeight: "500",
    fontSize: 16 * resho,
    color:'#000',
    lineHeight:20*resho,
    fontStyle: "normal",
    marginLeft:10*resho
  },

  listView:{
    flexDirection:'row',

    alignItems: 'flex-end',
    marginBottom:12*resho,
    marginRight:20*resho,
    width:50*resho,
    justifyContent: 'space-between'
  },

  content:{
  backgroundColor: 'white',
   flex:1,
  },

  bigView:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap'
  }


};

export default style;
