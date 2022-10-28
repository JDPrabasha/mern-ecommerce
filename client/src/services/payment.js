const axios = require("axios");

const paymentService = {
  payByCard: (card) => {
    return axios.post(
      "http://localhost:3011/payment" +
        "?token=" +
        localStorage.getItem("token") +
        "",
      card
    );
  },

  payByMobile: (mobile) => {
    return axios.post(
      "http://localhost:3003/mobile_payment" +
        "?token=" +
        localStorage.getItem("token") +
        "",
      mobile
    );
  },

  makePayment: (payload) => {
    return axios.post(
      "http://localhost:8290/api/payment" +
        "?token=" +
        localStorage.getItem("token") +
        "",
      payload
    );
  },
};

module.exports = paymentService;
