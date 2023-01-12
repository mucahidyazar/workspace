import React from 'react';
import {
  Text,
  Button,
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';
import ProductItem from '../../../components/shop/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';
import {
  deleteProduct
} from '../../../store/actions/productAction';

const UserProductScreen = props => {

  const userProducts = useSelector(state => state.products.userProducts);

  const dispatch = useDispatch();

  const editProductHandler = id => {
    props.navigation.navigate('EditProduct', { productId: id });
  }

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes', style: 'destructive', onPress: () => {
          dispatch(deleteProduct(id));
        }
      }
    ])
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => { }} >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => editProductHandler(itemData.item.id)} />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => deleteHandler(itemData.item.id)} />
        </ProductItem>
      )} />
  )
}

UserProductScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Your Products',
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add'
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({

});

export default UserProductScreen;