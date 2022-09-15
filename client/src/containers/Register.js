import React from "react";

function Register() {
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
            <span className="font-bold text-blue-500">Sign In</span>
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
          Register
        </a>
      </Box>
    </div>
  );
}

export default Register;
