import React from "react";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

function Login() {
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
            <span className="font-bold text-blue-500" onClick={{}}>
              Sign Up
            </span>
          </p>

          <TextInput
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

export default Login;
