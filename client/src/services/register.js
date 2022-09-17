const axios = require("axios");

const registerService = {
  register: (user) => {
    return axios.post("http://localhost:3001/register", user);
  },
};

module.exports = registerService;
