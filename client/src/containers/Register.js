import React, { useState } from "react";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import loginService from "../services/login";
import { useNavigate } from "react-router-dom";
import { Radio } from "@mantine/core";
import registerService from "../services/register";

function Register({ switchOperation }) {
  const [value, setValue] = useState("react");
  let navigate = useNavigate();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: "",
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
    const user = { ...form.values, role: value };
    console.log({ ...form.values, role: value });
    registerService.register(user);
  };
  return (
    <div>
      <Box>
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="mt-40"
        >
          <h1 className="font-bold text-4xl mb-4">Welcome to Agora!</h1>
          <p className="mb-4">
            <span> Already have an account? </span>
            <span onClick={switchOperation} className="font-bold text-blue-500">
              Sign In
            </span>
          </p>

          <TextInput
            withAsterisk
            label="Name"
            placeholder="Your Name"
            className="mb-6"
            {...form.getInputProps("name")}
          />
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
          <Radio.Group
            className="mb-6"
            value={value}
            onChange={setValue}
            name="role"
            label="Register as"
            withAsterisk
          >
            <Radio value="buyer" label="Buyer" />
            <Radio value="seller" label="Seller" />
          </Radio.Group>
        </form>

        <a
          onClick={handleSubmit}
          className=" bg-gray-900 px-6  text-center text-white font-bold mt-8 rounded-lg py-1"
        >
          Register
        </a>
      </Box>
    </div>
  );
}

export default Register;
