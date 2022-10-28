const axios = require("axios");

const productsService = {
  getProducts: () => {
    return axios.get(
      "http://localhost:3002/products" +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },

  getProductsBySeller: (id) => {
    return axios.get(
      `http://localhost:3006/product/seller/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },

  getProduct: (id) => {
    return axios.get(
      `http://localhost:3002/product/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },

  getProductsBySeller: (id) => {
    return axios.get(
      `http://localhost:3006/product/seller/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },

  addProduct: (product) => {
    return axios.post(
      "http://localhost:3006/product" +
        "?token=" +
        localStorage.getItem("token") +
        "",
      product
    );
  },

  updateProduct: (id, product) => {
    return axios.put(
      `http://localhost:3006/product/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        "",
      product
    );
  },

  deleteProduct: (id) => {
    return axios.delete(
      `http://localhost:3006/product/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },
};

module.exports = productsService;
