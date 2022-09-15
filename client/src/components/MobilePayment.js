import React, { useState } from "react";
import { TextInput } from "@mantine/core";

function MobilePayment() {
  const [provider, setProvider] = useState({ mobitel: false, dialog: false });
  const [otp, setOtp] = useState(false);
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
      <TextInput className="mb-2 mr-6" placeholder="Enter your number" />
      {otp && (
        <div>
          <label className="mb-2 text-sm font-semibold mt-4">OTP</label>
          <TextInput
            className="mb-6 mr-6"
            placeholder="Enter the 4-digit PIN sent to your number"
          />
        </div>
      )}
      <a
        onClick={() => {
          setOtp(true);
        }}
        className=" bg-gray-900 px-6 hover:cursor-pointer   text-center text-white font-bold mt-8 rounded-lg py-1"
      >
        {otp ? "Resend OTP" : "Send OTP"}
      </a>
    </div>
  );
}

export default MobilePayment;
