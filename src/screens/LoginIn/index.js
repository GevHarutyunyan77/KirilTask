import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import myStyle from './style';
import UserSVG from '../../assets/svg/UserSVG';
import PasswordSVG from '../../assets/svg/PasswordSVG';
import FacebookSVG from '../../assets/svg/FacebookSVG';
import TwitterSVG from '../../assets/svg/TwitterSVG';
import GmailSVG from '../../assets/svg/GmailSVG';
import AppleSVG from '../../assets/svg/AppleSVG';

function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={myStyle.container}>
        <Image
          style={myStyle.logo}
          source={require('../../assets/images/AldoLogo.png')}
        />

        <View style={myStyle.inputView}>
          <View style={myStyle.iconView}>
            <UserSVG />
          </View>
          <TextInput
            style={myStyle.textInputStyle}
            placeholder={'Email or Phone Number'}
          />
        </View>

        <View style={myStyle.inputView}>
          <View style={myStyle.iconView}>
            <PasswordSVG />
          </View>
          <TextInput
            style={myStyle.textInputStyle}
            secureTextEntry={true}
            placeholder={'Password'}
          />
        </View>

        <Text style={myStyle.forgotText}>FORGOT PASSWORD?</Text>
        <Pressable style={myStyle.signInButton} onPress={()=>navigation.navigate('tabScreens')}>
          <Text style={myStyle.signInText}>SIGN IN</Text>
        </Pressable>

        <Text style={myStyle.text}> Don’t have an account? </Text>
        <Text style={myStyle.text}>
          {' '}
          <Text style={{...myStyle.text, fontWeight: '700'}}>SIGN UP</Text>{' '}
          using your email address or social media{' '}
        </Text>
        <Text style={myStyle.text}> below </Text>
        <View style={myStyle.logosContainer}>
          <View style={myStyle.cube}>
            <FacebookSVG />
          </View>
          <View style={myStyle.cube}>
            <TwitterSVG />
          </View>
          <View style={myStyle.cube}>
            <GmailSVG />
          </View>
          <View style={myStyle.cube}>
            <AppleSVG />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
