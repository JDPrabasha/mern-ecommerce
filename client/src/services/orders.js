const axios = require("axios");

const ordersService = {
  postOrders: (orders) => {
    return axios.post(
      "http://localhost:3004/order?token=" + localStorage.getItem("token"),
      orders
    );
  },
  getPendingOrdersBySeller: (id) => {
    return axios.get(
      `http://localhost:3006/order/pending/${id}` +
        "?token=" +
        localStorage.getItem("token")
    );
  },
  getDeliveringOrdersBySeller: (id) => {
    return axios.get(
      `http://localhost:3006/order/delivering/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },
  activateOrders: (id) => {
    return axios.put(
      `http://localhost:3004/order/activate/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        ""
    );
  },
  updateOrderStatus: (id, date) => {
    return axios.put(
      `http://localhost:3004/order/${id}` +
        "?token=" +
        localStorage.getItem("token"),
      date
    );
  },
};

module.exports = ordersService;
