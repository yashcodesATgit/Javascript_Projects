import React from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <div className="flex flex-col gap-5 rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-3xl object-cover border border-slate-200 dark:border-slate-800"
        />
        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-100 line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-blue-600">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:items-end">
        <div className="flex items-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          <button
            onClick={decreaseQ}
            className="h-10 w-10 text-lg font-bold transition hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            -
          </button>
          <span className="min-w-[56px] px-4 text-center text-base font-bold">
            {item.quantity}
          </span>
          <button
            onClick={increaseQ}
            className="h-10 w-10 text-lg font-bold transition hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            +
          </button>
        </div>
        <p className="text-right text-base font-bold text-slate-950 dark:text-slate-100 md:hidden">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center gap-3">
          <p className="hidden text-base font-bold text-slate-950 dark:text-slate-100 md:block">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => removeFromCart(item.id, true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition hover:bg-red-500/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
