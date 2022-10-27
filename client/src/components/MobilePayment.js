import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

function MobilePayment({ addMobile }) {
  const [provider, setProvider] = useState({ mobitel: false, dialog: false });
  const [otp, setOtp] = useState(false);
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      number: "",
      otp: "",
    },
    validate: {
      number: (value) => (/\d{10}/.test(value) ? null : "Invalid number"),
      otp: (value) => (/\d{3}/.test(value) ? null : "Invalid otp"),
    },
  });
  return (
    <div className="block">
      <label className=" text-sm font-semibold mb-4">Provider</label>
      <div className="flex gap-12">
        <img
          src="/dialog.png"
          onClick={() => setProvider({ mobitel: false, dialog: true })}
          classname={
            provider.dialog
              ? "border-black border rounded-lg hover:cursor-pointer "
              : "hover:cursor-pointer"
          }
          width={50}
          alt=""
        />
        <img
          src="/mobitel.png"
          onClick={() => setProvider({ mobitel: true, dialog: false })}
          className={
            provider.mobitel
              ? "border-black border rounded-lg hover:cursor-pointer "
              : "hover:cursor-pointer"
          }
          width={50}
          alt=""
        />
      </div>
      <label className="mb-2 text-sm font-semibold mt-4">Mobile Number</label>
      <TextInput
        {...form.getInputProps("number")}
        className="mb-2 mr-6"
        placeholder="Enter your number"
      />
      {otp && (
        <div>
          <label className="mb-2 text-sm font-semibold mt-4">OTP</label>
          <TextInput
            className="mb-6 mr-6"
            {...form.getInputProps("otp")}
            placeholder="Enter the 4-digit PIN sent to your number"
          />
        </div>
      )}
      <a
        onClick={() => {
          setOtp(true);
          alert("OTP sent to your number");
        }}
        className=" bg-gray-900 px-6 hover:cursor-pointer mb-6   text-center text-white font-bold mt-8 rounded-lg py-1"
      >
        {otp ? "Resend OTP" : "Send OTP"}
      </a>
      {otp ? (
        <a
          onClick={() => {
            form.validate();
            if (form.isValid) addMobile(form.values);
          }}
          className=" bg-blue-900  block mr-80   text-center text-white font-bold mt-8 rounded-lg py-1"
        >
          Add Mobile
        </a>
      ) : null}
    </div>
  );
}

export default MobilePayment;
