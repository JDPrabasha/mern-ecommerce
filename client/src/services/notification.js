const axios = require("axios");

const notificationService = {
  sendNotifications: (orders) => {
    return axios.post("http://localhost:3012/notify", {
      ...orders,
      token: localStorage.getItem("token"),
    });
  },
};

module.exports = notificationService;
