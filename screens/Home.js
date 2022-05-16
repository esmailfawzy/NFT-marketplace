import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, NFTData} from '../constants';
import {FocusedStatusBar, HomeHeader, NFTCard} from '../components';
const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = value => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            keyExtractor={(item, ind) => item.id}
            renderItem={({item, ind}) => {
              return <NFTCard data={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View
            style={{
              height: 300,
              backgroundColor: COLORS.primary,
              // borderBottomStartRadius: 100,
              // borderBottomEndRadius: 100,
            }}
          />
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
