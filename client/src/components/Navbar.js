import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Input, Button } from "@mantine/core";

function Navbar() {
  return (
    <div className="w-full flex bg-black items-center flex-grow px-20 py-1 justify-evenly">
      <img src="/logo.png" width={100} alt="" className="mr-auto" />
      {/* <div className="w-4/12 h-min bg-white py-1 rounded-full">
        <FaSearch className="ml-auto mr-6" />
      </div> */}
      <Input
        className="min-w-5/12 w-4/12"
        icon={<FaSearch />}
        placeholder="Search for things here"
      />
      <div className="text-white flex items-center ml-auto  gap-8">
        <p className="font-bold">Dulaj Prabasha</p>
        <FaShoppingCart />
        <Button color="red" onClick={{}}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
