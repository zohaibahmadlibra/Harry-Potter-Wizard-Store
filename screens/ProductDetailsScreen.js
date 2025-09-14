import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setCart([...cart, product]); // Add the product to the cart
    navigation.navigate('Cart'); // Navigate to the Cart screen
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Price: ${product.id * 10}</Text>
      <Text style={styles.details}>
        {product.name} is a magical artifact from the Harry Potter universe. It
        possesses unique powers and is a must-have for every wizard or witch.
      </Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 18, color: 'gray', marginBottom: 20 },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  addToCartButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
