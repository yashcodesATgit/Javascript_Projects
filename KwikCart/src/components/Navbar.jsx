import React from "react";
import { Link } from "react-router-dom";

import { Home, Search, ShoppingCart, Moon, Sun } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = ({ theme, toggleTheme, searchTerm, setSearchTerm }) => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-xl shadow-slate-900/10 transition duration-500 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          <Link to={"/"} className="flex items-center gap-3 order-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/40 transition-transform duration-300 hover:-translate-y-1">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Kwik Delivery
              </p>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-slate-100">
                Kwik<span className="text-yellow-400">Cart</span>
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-3 whitespace-nowrap order-2 lg:order-3">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleTheme();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
              <span className="hidden sm:inline">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </button>

            <Link
              to={"/cart"}
              className="relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-700"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-yellow-400 px-2 text-xs font-bold text-slate-950 shadow-md shadow-yellow-400/20">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="order-3 w-full lg:order-2 lg:mx-auto lg:flex-1 lg:max-w-[520px]">
            <div className="relative rounded-full border border-slate-200 bg-slate-100 px-4 py-3 shadow-sm transition duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-500/20">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600 dark:text-blue-300" />
              <input
                type="text"
                placeholder="Search products, brands, or fast pickups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent pl-12 pr-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                aria-label="Search products"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
