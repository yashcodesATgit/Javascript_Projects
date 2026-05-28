import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { ChevronLeft, Zap } from "lucide-react";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8 pb-16">
      <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors duration-300 hover:text-blue-600 dark:text-slate-400">
        <Link to={"/"} className="inline-flex items-center gap-2">
          <ChevronLeft className="h-5 w-5" />
          Back to Store
        </Link>
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100 sm:text-5xl">
        Your Cart ({cartCount})
      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="sticky top-24 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/10 transition duration-500 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
                Order Summary
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-950 dark:text-slate-100">
                Ready to checkout
              </h3>
            </div>
            <span className="rounded-2xl bg-yellow-400 px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-yellow-400/30">
              Express
            </span>
          </div>

          <div className="space-y-5 text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <p className="text-base">Subtotal</p>
              <p className="font-semibold text-slate-950 dark:text-slate-100">
                ₹{cartTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-base">Delivery</p>
              <p className="font-semibold text-blue-600">Free</p>
            </div>
            <div className="border-t border-slate-200/80 pt-5 dark:border-slate-800">
              <div className="flex items-center justify-between text-xl font-black text-slate-950 dark:text-slate-100">
                <span>Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Link
            to={"/checkout"}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
          >
            <Zap className="h-5 w-5" />
            Proceed Securely
          </Link>

          <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            Your order is secured with premium checkout experience.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
