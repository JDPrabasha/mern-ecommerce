import React, { useEffect, useState } from "react";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import loginService from "../services/login";
import { useNavigate } from "react-router-dom";
import Register from "../containers/Register";
import Login from "../containers/Login";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    setIsLogin(true);
  }, []);

  const switchOperation = () => {
    console.log("switcher");
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-gray-900 h-screen ">
        <img src="/logo.png" className="m-auto mt-40" alt="" />
      </div>
      <div className="w-1/2 px-20">
        {isLogin && <Login switchOperation={switchOperation} />}
        {!isLogin && <Register switchOperation={switchOperation} />}
      </div>
    </div>
  );
}

export default Auth;
