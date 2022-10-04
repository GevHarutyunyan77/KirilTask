import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import FilterSVG from '../../assets/svg/FilterSVG';
import resho from '../../constants/resho';
import ListSVG from '../../assets/svg/ListSVG';
import GridSVG from '../../assets/svg/GridSVG';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {getData, refreshData, setShowModal} from '../../store/actions/app';
import Cube from '../../components/Cube';
import myStyle from './style';

function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();
  const {data, paginationOffset, loadMore} = useSelector(state => state.app);

  const handleOpenModal = useCallback(() => {
    dispatch(setShowModal(true));
  }, []);

  const renderItem = ({item}) => <Cube {...item} />;

  const handleGetData = () => {
    if (loadMore) {
      dispatch(getData(paginationOffset));
    }
  };

  useEffect(() => {
    dispatch(getData(0));
  }, [refreshing]);

  return (
    <View style={{flex: 1}}>
      <View style={myStyle.header}>
        <View style={{marginLeft: 20 * resho}}>
          <Text style={myStyle.title}>All Products</Text>
          <Pressable style={myStyle.filterView} onPress={handleOpenModal}>
            <FilterSVG />
            <Text style={myStyle.filterText}>Filter</Text>
          </Pressable>
        </View>
        <View style={myStyle.listView}>
          <ListSVG />
          <GridSVG />
        </View>
      </View>
      <View style={myStyle.content}>
        <View style={myStyle.bigView}>
          {!_.isEmpty(data) && (
            <SafeAreaView>
              <FlatList
                onEndReached={handleGetData}
                refreshing={refreshing}
                onRefresh={() => dispatch(refreshData())}
                data={data}
                renderItem={renderItem}
                numColumns={4}
                showsVerticalScrollIndicator={false}
                keyExtractor={() => _.uniqueId()}
              />
            </SafeAreaView>
          )}
        </View>
      </View>
    </View>
  );
}

export default Home;
