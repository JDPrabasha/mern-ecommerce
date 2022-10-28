const axios = require("axios");

const deliveryService = {
  postDelivery: (id) => {
    return axios.post(
      `http://localhost:3008/delivery/${id}` +
        "?token=" +
        localStorage.getItem("token") +
        "",
      id
    );
  },
};

module.exports = deliveryService;
