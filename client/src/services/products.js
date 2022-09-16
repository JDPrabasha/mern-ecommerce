const axios = require("axios");

const productsService = {
  getProducts: () => {
    return axios.get("http://localhost:3002/products");
  },

  getProductsBySeller: (id) => {
    return axios.get(`http://localhost:3006/product/seller/${id}`);
  },

  getProduct: (id) => {
    return axios.get(`http://localhost:3002/product/${id}`);
  },

  getProductsBySeller: (id) => {
    return axios.get(`http://localhost:3006/product/seller/${id}`);
  },

  addProduct: (product) => {
    return axios.post("http://localhost:3006/product", product);
  },

  updateProduct: (id, product) => {
    return axios.put(`http://localhost:3006/product/${id}`, product);
  },
};

module.exports = productsService;
