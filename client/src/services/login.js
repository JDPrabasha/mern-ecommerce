const axios = require("axios");

const loginService = {
  login: (user) => {
    return axios.post("http://localhost:3000/login", user);
  },
};

module.exports = loginService;
