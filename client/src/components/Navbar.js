import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Input, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useLocation } from "react-router-dom";

function Navbar({ filterFunction }) {
  const location = useLocation();
  const path = location.pathname;

  const form = useForm({
    initialValues: {
      search: "",
    },
  });
  return (
    <div className="w-full flex bg-black items-center flex-grow px-20 py-1 justify-evenly">
      <Link to="/" className="mr-auto">
        <img
          src="/logo.png"
          width={100}
          alt=""
          className=" hover:cursor-pointer"
        />
      </Link>

      <Input
        className={path === "/" ? "min-w-5/12 w-4/12" : "hidden"}
        icon={<FaSearch />}
        placeholder="Search for things here"
        onKeyDown={(e) => {
          filterFunction(e.target.value);
        }}
      />
      <div className="text-white flex items-center ml-auto  gap-8">
        <p className="font-bold">
          {JSON.parse(localStorage.getItem("user")).name}
        </p>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to={`/login`}>
          <Button color="red" onClick={{}}>
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
