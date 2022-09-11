import React from "react";
import { TextInput } from "@mantine/core";

function MobilePayment() {
  return (
    <div className="block">
      <label className="mb-2 text-sm font-semibold">Provider</label>
      <label className="mb-2 text-sm font-semibold">Mobile Number</label>
    </div>
  );
}

export default MobilePayment;
