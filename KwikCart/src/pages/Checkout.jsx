import React, { useState } from "react";

import { useCart } from "../context/CartContext";
import OrderConfimation from "./OrderConfirmation";
import { Link } from "react-router-dom";

import { Package, MapPin, Zap } from "lucide-react";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  console.log("shipping data = ", deliveryDetails);

  if (isConfirmed)
    return <OrderConfimation deliveryDetails={deliveryDetails} />;

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 pb-16">
        <h2 className="text-5xl font-black tracking-tight text-slate-950 dark:text-slate-100 mb-8">
          Checkout
        </h2>
        <div className="grid gap-8 lg:grid-cols-[1.9fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/10 transition duration-500 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
            <div className="mb-8 flex items-center gap-3 text-blue-600">
              <MapPin className="w-7 h-7" />
              <span className="text-3xl font-bold text-slate-950 dark:text-slate-100">
                Shipping Details
              </span>
            </div>

            <form className="space-y-6" onSubmit={handleSumbit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 capitalize mb-2"
                  >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "tel" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-900 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/20"
                  />
                </div>
              ))}

              <div className="pt-6">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
                >
                  <Zap className="w-6 h-6" />
                  <span>Pay ₹{cartTotal.toFixed(2)} & Confirm</span>
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/10 transition duration-500 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
            <div className="mb-8 flex items-center justify-between gap-3">
              <h3 className="text-3xl font-bold text-slate-950 dark:text-slate-100">
                Order Summary
              </h3>
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-slate-200 pb-3 dark:border-slate-800"
                >
                  <span className="truncate text-slate-700 dark:text-slate-300">
                    {item.name}
                  </span>
                  <span className="font-semibold text-slate-950 dark:text-slate-100">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
              <div className="flex justify-between text-base">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-950 dark:text-slate-100">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-base">
                <span>Delivery</span>
                <span className="font-semibold text-blue-600">Free</span>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between rounded-3xl bg-slate-50 p-6 text-slate-950 dark:bg-slate-900 dark:text-slate-100">
              <span className="text-lg font-bold">Total Due</span>
              <span className="text-3xl font-black">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Checkout;
