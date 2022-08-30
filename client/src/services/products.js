const axios = require("axios");

const productsService = {
  getProducts: () => {
    return axios.get("http://localhost:3000/products");
  },
};

module.exports = productsService;
