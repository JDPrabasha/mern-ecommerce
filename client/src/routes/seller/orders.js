import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DeliveringOrders from "../../containers/DeliveringOrders";
import PendingOrders from "../../containers/PendingOrders";

function SellerOrders() {
  const [pendingOrders, setPendingOrders] = useState(true);
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="mx-12 mt-12">
        <p className="mb-4 text-4xl font-bold">Active Orders</p>
        <div>
          <div className="flex gap-6 mb-8">
            <p
              onClick={() => {
                setPendingOrders(true);
              }}
              className={
                pendingOrders
                  ? "font-bold border rounded-full border-black px-3 text-white bg-black transition ease-in-out hover:cursor-pointer "
                  : "font-bold border rounded-full border-black px-3 hover:text-white hover:bg-black transition ease-in-out hover:cursor-pointer "
              }
            >
              PENDING
            </p>
            <p
              onClick={() => {
                setPendingOrders(false);
              }}
              className={
                !pendingOrders
                  ? "font-bold border rounded-full border-black px-3 text-white bg-black transition ease-in-out hover:cursor-pointer"
                  : "font-bold border rounded-full border-black px-3 hover:text-white hover:bg-black  transition ease-in-out hover:cursor-pointer "
              }
            >
              DELIVERING
            </p>
          </div>
          {pendingOrders && <PendingOrders />}
          {!pendingOrders && <DeliveringOrders />}
        </div>
      </div>
    </div>
  );
}

export default SellerOrders;
