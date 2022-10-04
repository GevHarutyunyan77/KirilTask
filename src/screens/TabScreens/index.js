import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import myStyle from './style';
import Home from '../Home';
import HomeSVG from '../../assets/svg/HomeSVG';
import Search from '../Search/Search';
import SearchSVG from '../../assets/svg/SearchSVG';
import Favorite from '../Favorite/Favorite';
import FavoriteSVG from '../../assets/svg/FavoritesSVG';
import User from '../User/User';
import UserIconSVG from '../../assets/svg/UserIconSVG';
import BurgerSVG from '../../assets/svg/BurgerSVG';
import ShopSVG from '../../assets/svg/ShopSVG';
import MyModal from '../../components/Modal';
import {useSelector} from 'react-redux';

function TabScreens() {
  const screenOptionStyle = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: '#FFF',
      height: 70,
      shadowOffset: {
        width: 1,
        height: 1,
        shadowColor: 'red',
      },
      shadowRadius: 1,
    },
  };
  const {showModal} = useSelector(state => state.app);

  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <View style={myStyle.header}>
        <BurgerSVG />
        <Image
          source={require('../../assets/images/AldoLogo.png')}
          style={myStyle.headerLogo}
        />
        <ShopSVG />
      </View>


        <Tab.Navigator screenOptions={screenOptionStyle}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <HomeSVG color={'black'} /> : <HomeSVG />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <SearchSVG color={'black'} /> : <SearchSVG />,
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={Favorite}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <FavoriteSVG color={'black'} /> : <FavoriteSVG />,
            }}
          />
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? <UserIconSVG color={'black'} /> : <UserIconSVG />,
            }}
          />
        </Tab.Navigator>


      {showModal && <MyModal />}
    </View>
  );
}

export default TabScreens;
