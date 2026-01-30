import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products";

// GET all products
export const getProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// ADD a new product
export const addProduct = async (product) => {
  try {
    const res = await axios.post(BASE_URL, product);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// DELETE a product by ID
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// UPDATE a product by ID
export const updateProduct = async (id, updatedProduct) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, updatedProduct);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
