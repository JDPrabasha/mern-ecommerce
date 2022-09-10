const axios = require("axios");

const productsService = {
  getProducts: () => {
    return axios.get("http://localhost:3002/product");
  },

  getProduct: (id) => {
    return axios.get(`http://localhost:3000/products/product/${id}`);
  },
};

module.exports = productsService;
