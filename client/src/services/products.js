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
};

module.exports = productsService;
