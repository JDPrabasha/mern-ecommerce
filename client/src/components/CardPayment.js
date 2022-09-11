import { TextInput } from "@mantine/core";
import React from "react";

function CardPayment() {
  return (
    <div className="block mr-5">
      <label className="mb-2 text-sm font-semibold">Card Holder</label>
      <TextInput placeholder="Name on Card" />
      <label className="mb-2 text-sm font-semibold">Card Number</label>
      <TextInput placeholder="Card Number" />
      <label className="mb-2 text-sm font-semibold">CVC</label>
      <TextInput placeholder="CVC" />
    </div>
  );
}

export default CardPayment;
