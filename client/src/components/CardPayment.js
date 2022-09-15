import { TextInput } from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";

function CardPayment() {
  const form = useForm({
    initialValues: {
      name: "",
      number: "",
      cvc: "",
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div className="block mr-5">
      <label className="mb-2 text-sm font-semibold">Card Holder</label>
      <TextInput placeholder="Name on Card" {...form.getInputProps("name")} />
      <label className="mb-2 text-sm font-semibold">Card Number</label>
      <TextInput placeholder="Card Number" {...form.getInputProps("number")} />
      <label className="mb-2 text-sm font-semibold">CVC</label>
      <TextInput placeholder="CVC" {...form.getInputProps("cvc")} />
    </div>
  );
}

export default CardPayment;
