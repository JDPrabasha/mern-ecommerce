import { TextInput } from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";

function CardPayment({ addCard }) {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: "",
      number: "",
      cvc: "",
    },

    validate: {
      name: (value) => (/^[a-z ,.'-]+$/.test(value) ? null : "Invalid name"),
      cvc: (value) => (/\d{3}/.test(value) ? null : "Invalid cvc"),
      number: (value) => (/\d{16}/.test(value) ? null : "Invalid number"),
      // (/^\S+@\S+$/.test(value) ?
    },
  });
  return (
    <div className="block mr-5">
      <label className="mb-2 text-sm font-semibold">Card Holder</label>
      <TextInput
        onChange={() => form.validate()}
        placeholder="Name on Card"
        {...form.getInputProps("name")}
      />
      <label className="mb-2 text-sm font-semibold">Card Number</label>
      <TextInput placeholder="Card Number" {...form.getInputProps("number")} />
      <label className="mb-2 text-sm font-semibold">CVC</label>
      <TextInput
        placeholder="CVC"
        className="mb-6"
        {...form.getInputProps("cvc")}
      />
      <a
        onClick={() => {
          form.validate();
          if (form.isValid) addCard(form.values);
        }}
        className=" bg-blue-900 px-6 hover:cursor-pointer   text-center text-white font-bold mt-8 rounded-lg py-1"
      >
        Add Card
      </a>
    </div>
  );
}

export default CardPayment;
