import resho from "../../constants/resho";

const style = {
  content: {
    width: "50%",
    height: 254 * resho,
    borderWidth: 1 * resho,
    borderColor: "#CCC",
  },
  image: {
    width: "100%",
    height: 159 * resho,
    overflow: "hidden"
  },
  brandText:{
    fontWeight:'400',
    fontSize:11*resho,
    lineHeight:13,
    color:'#6F7F8A',
    letterSpacing: 0.75*resho,
    marginLeft:16*resho,
    marginTop:12*resho
  },

  brandName:{
    fontWeight:'400',
    fontSize:13*resho,
    lineHeight:16,
    letterSpacing: 0.75*resho,
    marginLeft:16*resho,
    width:130*resho,
    color:'#333A3A',
    marginTop: 3
  },

  price:{
    fontWeight:'700',
    fontSize:15*resho,
    lineHeight:18,
    letterSpacing: 0.75*resho,
    color:'#333',
    marginTop:'auto',
    marginBottom:9*resho,
    marginLeft:'auto',
    marginRight:5
  }
};

export default style;
