require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const products = [
  { id: 1, name: 'Cotton Shirt', price: 2500, category: 'Shirts' },
  { id: 2, name: 'Denim Jeans', price: 4000, category: 'Jeans' },
  { id: 3, name: 'Polo T-Shirt', price: 1800, category: 'T-Shirts' },
  { id: 4, name: 'Formal Shirt', price: 3200, category: 'Shirts' },
  { id: 5, name: 'Check Casual Shirt', price: 2800, category: 'Shirts' },
  { id: 6, name: 'Slim Fit Jeans', price: 4500, category: 'Jeans' },
  { id: 7, name: 'Black Jeans', price: 4200, category: 'Jeans' },
  { id: 8, name: 'Round Neck T-Shirt', price: 1500, category: 'T-Shirts' },
  { id: 9, name: 'Graphic T-Shirt', price: 1900, category: 'T-Shirts' },
  { id: 10, name: 'Chino Trouser', price: 3500, category: 'Trousers' },
  { id: 11, name: 'Winter Hoodie', price: 5000, category: 'Hoodies' },
  { id: 12, name: 'Kurta', price: 3800, category: 'Kurta' },
];

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));