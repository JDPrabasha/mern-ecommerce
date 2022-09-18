const axios = require("axios");

const ordersService = {
  postOrders: (orders) => {
    return axios.post("http://localhost:3004/order", orders);
  },
  getPendingOrdersBySeller: (id) => {
    return axios.get(`http://localhost:3006/order/pending/${id}`);
  },
  getDeliveringOrdersBySeller: (id) => {
    return axios.get(`http://localhost:3006/order/delivering/${id}`);
  },
  updateOrderStatus: (id, date) => {
    return axios.put(`http://localhost:3004/order/${id}`, date);
  },
};

module.exports = ordersService;
