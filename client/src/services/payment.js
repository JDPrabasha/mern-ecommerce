const axios = require("axios");

const paymentService = {
  payByCard: (card) => {
    return axios.post("http://localhost:3011/payment", card);
  },

  payByMobile: (mobile) => {
    return axios.post("http://localhost:3003/mobile_payment", mobile);
  },

  makePayment: (payload) => {
    return axios.post("http://localhost:8290/api/payment", payload);
  },
};

module.exports = paymentService;
