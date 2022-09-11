const axios = require("axios");

const productsService = {
  getProducts: () => {
    return axios.get("http://localhost:3002/products");
  },

  getProduct: (id) => {
    return axios.get(`http://localhost:3002/product/${id}`);
  },
};

module.exports = productsService;
