const axios = require("axios");

const loginService = {
  login: (user) => {
    return axios.post("http://localhost:3001/login", user);
  },
};

module.exports = loginService;
