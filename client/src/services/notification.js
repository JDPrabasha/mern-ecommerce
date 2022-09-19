const axios = require("axios");

const notificationService = {
  sendNotifications: (orders) => {
    return axios.post("http://localhost:3012/notify", orders);
  },
};

module.exports = notificationService;
