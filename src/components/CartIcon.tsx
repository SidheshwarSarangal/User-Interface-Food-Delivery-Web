import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
     
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
