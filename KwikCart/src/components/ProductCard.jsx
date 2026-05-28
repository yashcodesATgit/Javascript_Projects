import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_20px_80px_-35px_rgba(30,64,175,0.55)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_100px_-45px_rgba(59,130,246,0.5)] dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 shadow-md shadow-yellow-400/30">
          Fast Pickup
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-600/25">
          {product.category}
        </div>
      </Link>

      <div className="p-5 flex h-full flex-col justify-between gap-4">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-semibold text-slate-950 transition-colors duration-200 hover:text-blue-600 dark:text-slate-100">
              {product.name}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-4">
          <div>
            <p className="text-2xl font-extrabold text-slate-950 dark:text-slate-50">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Premium
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
