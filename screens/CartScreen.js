import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cart } = useContext(CartContext);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: ${item.id * 10}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e6d3a7',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'gray' },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
});
