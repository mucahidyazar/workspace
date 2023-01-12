import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../../constants/Colors';
import {
  addToCart
} from '../../../store/actions/cartAction';

const ProductDetailScreen = props => {

  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(
    state => state.products.avaiableProducts
      .find(prod => prod.id === productId)
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image
        source={{ uri: selectedProduct.imageUrl }}
        style={styles.image} />
      <View style={styles.action}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => { dispatch(addToCart(selectedProduct)) }} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  )
}

ProductDetailScreen.navigationOptions = (navData) => {

  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  action: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.grey,
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailScreen;