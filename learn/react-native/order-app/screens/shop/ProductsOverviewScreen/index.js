import React from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../../components/shop/ProductItem';
import {
  addToCart
} from '../../../store/actions/cartAction';
import {
  HeaderButtons, Item
} from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import Colors from '../../../constants/Colors';

const ProductsOverviewScreen = props => {

  const products = useSelector(state => state.products.avaiableProducts);

  const dispatch = useDispatch();


  const onViewDetail = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      //Uzun yontemli route tanimlamasinda asagidaki setparams yontemi olmuyor.
      //SetParamsin bir diger yontemi
      productId: id,
      productTitle: title
    })
  }

  const onAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  return <FlatList
    data={products}
    keyExtractor={item => item.id}
    renderItem={itemData => <ProductItem
      image={itemData.item.imageUrl}
      title={itemData.item.title}
      price={itemData.item.price} >
      <Button
        color={Colors.primary}
        title="View Details"
        onPress={() => onViewDetail(itemData.item.id, itemData.item.title)} />
      <Button
        color={Colors.primary}
        title="To Cart"
        onPress={() => onAddToCart(itemData.item)} />
    </ProductItem>}
  />
}

ProductsOverviewScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'All Products',
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
          title='Cart'
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart')
          }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;