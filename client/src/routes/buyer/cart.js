import React, { useContext, useState } from "react";
import CartContext from "../../CartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { TbDeviceMobileRotated } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";
import { TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

import Navbar from "../../components/Navbar";
import CardPayment from "../../components/CardPayment";
import MobilePayment from "../../components/MobilePayment";
import ordersService from "../../services/orders";

function Cart() {
  const addCard = (a) => {
    console.log("add card");
    setPaymentPayload(a);
    console.log(paymentPayload);
  };
  const addMobile = (a) => {
    console.log("add mobile");
    setPaymentPayload(a);
    console.log(paymentPayload);
    console.log(a);
  };

  const { removeFromCart, changeQuantity } = useContext(CartContext);
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      address: "",
    },
    validate: {},
  });

  const { items } = useContext(CartContext);
  const [card, setCard] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [paymentPayload, setPaymentPayload] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      user: JSON.parse(localStorage.getItem("user"))._id,
      ...form.values,
      method: card ? "card" : "mobile",
      paymentDetails: {
        ...paymentPayload,
        amount: items.reduce((a, b) => a + b.price * b.quantity, 0),
      },
    };
    console.log(payload);
    console.log(items);
    const sellers = items.map((item) => item.sellerID);
    console.log(sellers);
    const uniqueSellers = [...new Set(sellers)];
    console.log(uniqueSellers);
    const groupBySeller = uniqueSellers.map((seller) => {
      const sellerItems = items.filter((item) => item.sellerID === seller);
      console.log(sellerItems);
      return {
        seller: seller,
        items: sellerItems,
      };
    });

    console.log(groupBySeller);

    const orderPayload = groupBySeller.map((group) => {
      return {
        seller: group.seller,
        products: group.items.map((item) => {
          return {
            id: item._id,
            name: item.name,
            image: item.image,
            quantity: item.quantity,
            price: item.price,
          };
        }),
        user: JSON.parse(localStorage.getItem("user"))._id,
        deliveryAddress: form.values.address,
      };
    });
    console.log(orderPayload);

    ordersService.postOrders(orderPayload);
  };

  return (
    <div>
      <Navbar />
      <div className=" flex mx-20">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold mt-6">Cart</h1>
          {items.map(function (item, i) {
            return (
              <div className="flex items-center justify-between mr-12" key={i}>
                <img
                  src={item.image}
                  className="w-32 h-32 object-cover p-5"
                  alt=""
                />
                <p className="font-bold">{item.name}</p>
                <p
                  onClick={() => {
                    changeQuantity(item, item.quantity - 1);
                  }}
                  className="border-2 py-1 px-3 rounded-lg border-gray-900"
                >
                  -
                </p>
                <p>{item.quantity}</p>

                <p
                  onClick={() => {
                    changeQuantity(item, item.quantity + 1);
                  }}
                  className="border-2 py-1 px-3 rounded-lg border-gray-900"
                >
                  +
                </p>
                <p className="font-bold text-green-400">
                  Rs.{item.price * item.quantity}
                </p>
                <AiOutlineDelete
                  className="text-red-500 text-4xl px-2 py-2 rounded-sm border-red-500 border hover:cursor-pointer hover:bg-red-500 hover:text-white transiton ease-in-out"
                  onClick={() => removeFromCart(item)}
                />
              </div>
            );
          })}
        </div>
        <div className="w-2/5 bg-gray-100 mt-6 h-screen ">
          <h1 className="text-2xl font-bold mt-6 ml-6 mb-6">Checkout</h1>
          <div className="flex space-between w-full ml-6">
            <p className="font-bold">Total</p>
            <p className="ml-auto mr-12">
              Rs.
              {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
          </div>
          <p className="font-bold ml-6 mt-12">Payment Method</p>
          <div className="flex gap-6 ml-6 mt-4">
            <TbDeviceMobileRotated
              className={
                mobile
                  ? "text-6xl border-2 py-1 px-2 rounded-lg border-gray-900 text-white bg-black"
                  : "text-6xl border-2 py-1 px-2 rounded-lg border-gray-900 hover:cursor-pointer hover:bg-black hover:text-white"
              }
              onClick={() => {
                setCard(false);
                setMobile(true);
              }}
            />
            <BsCreditCard
              className={
                card
                  ? "text-6xl border-2 py-1 px-2 rounded-lg border-gray-900 text-white bg-black"
                  : "text-6xl border-2 py-1 px-2 rounded-lg border-gray-900 hover:cursor-pointer hover:bg-black hover:text-white"
              }
              onClick={() => {
                setCard(true);
                setMobile(false);
              }}
            />
          </div>
          <div className="ml-6 mt-6">
            {card && <CardPayment addCard={(a) => addCard(a)} />}
            {mobile && <MobilePayment addMobile={(a) => addMobile(a)} />}
          </div>

          <p className="font-bold ml-6 mt-6 ">Address</p>
          <TextInput
            {...form.getInputProps("address")}
            className="mt-4 mx-6 mb-6"
            placeholder="Enter your address"
          />
          <a
            onClick={handleSubmit}
            className=" bg-gray-900 px-6 ml-6  text-center text-white font-bold mt-8 rounded-lg py-1"
          >
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
