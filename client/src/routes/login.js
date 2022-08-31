import React from "react";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import loginService from "../services/login";

function Login() {
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
    if (form.invalid) return;
    console.log(form.values);
    const login = await loginService.login(form.values);
    console.log(login);
    if (login.status === 200) {
      window.location.href = "/";
      localStorage.setItem("token", login.data.token);
      localStorage.setItem("user", JSON.stringify(login.data.user));
    }
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="password"
          {...form.getInputProps("password")}
        />
      </form>

      <a
        onClick={handleSubmit}
        className=" bg-blue-500 px-6 text-center text-white font-bold mt-8 rounded-lg py-1"
      >
        Login
      </a>
    </Box>
  );
}

export default Login;
