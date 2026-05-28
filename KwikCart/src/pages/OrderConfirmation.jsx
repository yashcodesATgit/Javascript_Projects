import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 pt-12 pb-16">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-12 shadow-xl shadow-slate-900/10 text-center transition duration-500 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
        <CheckCircle className="mx-auto mb-6 h-24 w-24 text-yellow-400 drop-shadow-lg" />
        <h2 className="text-4xl font-black text-slate-950 dark:text-slate-100 mb-4">
          Order Confirmed!
        </h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
          Your order is on its way. You’ll receive a confirmation soon with fast
          delivery updates.
        </p>

        <div className="mx-auto mb-8 max-w-md rounded-3xl bg-slate-100 p-6 text-left text-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <p className="mb-2 text-lg font-semibold text-slate-950 dark:text-slate-100">
            {deliveryDetails?.name}
          </p>
          <p>{deliveryDetails?.address}</p>
          <p>
            {deliveryDetails?.city}, {deliveryDetails?.zip}
          </p>
        </div>

        <Link
          to={"/"}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
