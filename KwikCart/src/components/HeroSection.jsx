import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { initialProducts } from "../data/product";

const featuredProducts = [
  initialProducts[0],
  initialProducts[2],
  initialProducts[5],
];

const HeroSection = () => {
  return (
    <section className="mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4 py-10 shadow-[0_35px_80px_-65px_rgba(15,23,42,0.8)] transition duration-500 dark:from-[#020617] dark:via-[#071127] dark:to-[#0c1325] dark:bg-none sm:px-6 lg:px-8">
      <div className="container mx-auto grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-100/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
            <Sparkles className="h-4 w-4" />
            India’s fastest checkout
          </div>

          <div className="space-y-4">
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-950 dark:text-slate-100 sm:text-6xl">
              Shop Smarter.{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Checkout Faster.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Discover premium products from top brands with fast delivery, easy
              returns, and the confidence of a modern quick-commerce experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/#"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 transition duration-300 hover:bg-yellow-300"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900">
              Browse Categories
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/90 p-6 text-center shadow-lg shadow-slate-900/5 dark:bg-slate-900 dark:shadow-none">
              <p className="text-3xl font-black text-blue-600">2M+</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Customers
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 text-center shadow-lg shadow-slate-900/5 dark:bg-slate-900 dark:shadow-none">
              <p className="text-3xl font-black text-blue-600">50K+</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Products
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 text-center shadow-lg shadow-slate-900/5 dark:bg-slate-900 dark:shadow-none">
              <p className="text-3xl font-black text-blue-600">99%</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-none">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/20 to-transparent blur-2xl" />
          <div className="absolute -left-6 top-20 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-16 h-16 w-16 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-600 w-auto px-3 py-2  text-white font-semibold uppercase tracking-[0.22em] shadow-sm">
                SPECIAL SALE
              </span>
              <span className="text-slate-950 rounded-full bg-yellow-400 w-auto px-3 py-2 font-semibold uppercase tracking-[0.22em] shadow-sm">
                Upto 50%Off
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-100/50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_80px_-50px_rgba(15,23,42,0.8)]">
                <img
                  src={featuredProducts[0].image}
                  alt={featuredProducts[0].name}
                  className="h-[320px] w-full rounded-[1.5rem] object-contain "
                />
                <div className="mt-4 space-y-2">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-600 dark:text-yellow-400 font-semibold">
                    Featured
                  </p>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white line-clamp-2">
                    {featuredProducts[0].name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Fast delivery on premium electronics.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-700 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 shadow-sm dark:shadow-none">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">
                  Trend
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                  Tech Essentials
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-700 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 shadow-sm dark:shadow-none">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">
                  Ready
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                  Express Shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
