import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Wand',
    image:
      'https://i.pinimg.com/564x/8e/c3/05/8ec305a510ceb50ea9e45593820a522f.jpg',
  },
  {
    id: '2',
    name: 'Glasses',
    image:
      'https://i.pinimg.com/1200x/8e/8a/b1/8e8ab17001345c60f5d5d1cbdaf70bc3.jpg',
  },
  {
    id: '3',
    name: 'Mug',
    image:
      'https://www.tinyminymo.com/cdn/shop/products/Hogwarts-3D-Mug_1200x1200.jpg?v=1657787012',
  },
  {
    id: '4',
    name: 'Broomstick',
    image:
      'https://potterheadonline.wordpress.com/wp-content/uploads/2015/06/623941_1295507289267_full.jpg?w=540',
  },
  {
    id: '5',
    name: 'Potion',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReL0QiQ0pXpPM_38RTDrAj2QKu_JAEivC4mQ&s',
  },
  {
    id: '6',
    name: 'Time Turner',
    image:
      'https://i.pinimg.com/564x/e7/e1/01/e7e10137c3a07bf1ffda676acac588c1.jpg',
  },
  {
    id: '7',
    name: 'Sorting Hat',
    image:
      'https://toykingdom.co.za/cdn/shop/files/SM-6061830_2.jpg?v=1730971448',
  },
  {
    id: '8',
    name: 'Quill and Ink',
    image:
      'https://img.freepik.com/free-vector/hand-drawn-quill-pen-with-inkwell_53876-99221.jpg',
  },
  {
    id: '9',
    name: 'Spell Book',
    image:
      'https://i.ebayimg.com/images/g/QzIAAOSwECJkRVpV/s-l1200.jpg',
  },
  {
    id: '10',
    name: 'Golden Snitch',
    image:
      'https://cdncoin.com/cdn/shop/products/712818-3.jpg?v=1678727884&width=1200',
  },
];

const ProductsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.header}>Magical Artifacts</Text>
      <View style={styles.grid}>
        {PRODUCTS.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetails', { product })}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.productName}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  scrollView: { padding: 10, 
  backgroundColor: '#f4f4f4' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#e6d3a7',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 165,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
