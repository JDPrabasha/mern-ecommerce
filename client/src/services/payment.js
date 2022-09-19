const axios = require("axios");

const paymentService = {
  payByCard: (card) => {
    return axios.post("http://localhost:3011/payment", card);
  },

  payByMobile: (mobile) => {
    return axios.post("http://localhost:3003/mobile_payment", mobile);
  },
};

module.exports = paymentService;
