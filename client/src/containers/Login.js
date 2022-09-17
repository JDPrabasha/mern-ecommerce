import React, { useState } from "react";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import loginService from "../services/login";
import { useNavigate } from "react-router-dom";

function Loginv({ switchOperation }) {
  let navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    form.validate();
    if (!form.isValid) return;
    console.log(form.values);
    const login = await loginService.login(form.values);
    console.log(login);
    if (login.status === 200) {
      localStorage.setItem("token", login.data.token);
      localStorage.setItem("user", JSON.stringify(login.data.user));
      console.log(login.data.user.role);
      if (login.data.user.role === "buyer") {
        navigate("/");
      } else {
        navigate(`/seller/${login.data.user.name}`);
      }
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <Box>
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="mt-40"
        >
          <h1 className="font-bold text-4xl mb-4">Welcome back!</h1>
          <p className="mb-4">
            <span> Don't have an account yet? </span>
            <span className="font-bold text-blue-500" onClick={switchOperation}>
              Sign Up
            </span>
          </p>

          <TextInput
            onChange={() => form.validate()}
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            className="mb-6"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label="Password"
            placeholder="password"
            className="mb-6"
            {...form.getInputProps("password")}
          />
        </form>

        <a
          onClick={handleSubmit}
          className=" bg-gray-900 px-6 text-center text-white font-bold mt-8 rounded-lg py-1"
        >
          Login
        </a>
      </Box>
    </div>
  );
}

export default Loginv;
