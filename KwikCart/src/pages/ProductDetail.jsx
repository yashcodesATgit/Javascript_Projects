import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";
import { ShoppingCart, ChevronLeft, Tag, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8 pb-16">
      <Link
        to={"/"}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors duration-300 hover:text-blue-600 dark:text-slate-400 mb-8"
      >
        <ChevronLeft className="h-5 w-5" />
        Back to All Products
      </Link>

      <div className="grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-900/10 transition duration-500 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none lg:grid-cols-[1.2fr_1fr] lg:p-10">
        <div className="flex items-center justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-[420px] w-full max-w-xl rounded-[2rem] object-cover shadow-2xl shadow-slate-900/10 transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Fast Delivery
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-slate-100">
              {product?.name}
            </h1>
            <p className="mt-4 text-3xl font-black text-slate-950 dark:text-slate-100">
              ₹{product?.price.toFixed(2)}
            </p>
          </div>

          <div className="space-y-5 rounded-[1.5rem] bg-slate-100 p-6 dark:bg-slate-900">
            <div className="flex items-center gap-3 text-base font-semibold text-slate-900 dark:text-slate-100">
              <Tag className="h-5 w-5 text-blue-600" />
              Product Overview
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {product?.description}
            </p>
            <ul className="grid gap-3 text-slate-700 dark:text-slate-300">
              {[
                "High-quality gear ready to ship",
                "Premium performance for everyday use",
                "Priority shipping with smart delivery",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => addToCart(product)}
              className="inline-flex min-w-[160px] items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <Link
              to={"/"}
              className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-blue-600 px-6 py-4 text-base font-semibold text-blue-600 transition duration-300 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-slate-900"
            >
              Keep Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
