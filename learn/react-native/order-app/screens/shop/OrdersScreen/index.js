import React from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from '../../../components/shop/OrderItem';

const OrdersScreen = props => {

  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          items={itemData.item.items}
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate} />
      )} />
  )
}

OrdersScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Your Orders',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Cart'
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            //Yonlendirme yapar eger boyle olsaydi
            //navData.navigation.navigate('Cart')

            //Acilir menu olusmasini saglar
            navData.navigation.toggleDrawer();
          }} />
      </HeaderButtons>
    ),
  }

}

export default OrdersScreen;