# ⚡ KwikCart     (Deployment link - https://kwikcart.netlify.app/)

A high-performance, responsive e-commerce web application inspired by modern quick-commerce design systems. Powered by **React**, **Vite**, and **Tailwind CSS v4**.

---

## ✨ Features

- **🌓 Dynamic Dark / Light Theme**: A fully custom class-based dark/light theme toggle, supporting synchronized native element styling (`color-scheme`) and fluid transitions.
- **🔍 Real-Time Search Filtering**: Instant product discovery, matching title, brand, or category.
- **🛒 Dynamic Shopping Cart**: Powered by React Context for seamless state updates across product lists, detail views, and cart overlays.
- **⚡ Super Fast Checkout**: Clean, modern checkout forms and order confirmation state.
- **📱 Fully Responsive Design**: Optimized grid layouts for mobile, tablet, and desktop screens with custom-ordered layouts.
- **🔔 Interactive Toast Notifications**: Smooth user feedback for cart additions/removals powered by `react-toastify`.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/)
- **Build Tooling**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the modern CSS-first `@custom-variant` configuration)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Toasts**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📂 Project Structure

```
React_Shopping_Cart/
├── src/
│   ├── components/       # Reusable UI elements (Navbar, ProductCard, HeroSection, Footer)
│   ├── context/          # Global application state (CartContext)
│   ├── data/             # Static mock database/products
│   ├── pages/            # Page layouts (Cart, Checkout, OrderConfirmation, ProductDetail, ProductList)
│   ├── App.jsx           # Core entry component & Routing setup
│   ├── index.css         # Global styles & Tailwind imports
│   └── main.jsx          # React DOM mounting
├── tailwind.config.js    # Legacy config (Tailwind v4 backward compatibility helper)
├── vite.config.js        # Vite config with @tailwindcss/vite plugin
└── package.json          # Dependency manifest
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd React_Shopping_Cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address shown in the terminal (typically `http://localhost:5173/` or `http://localhost:5174/`).

### Production Build

To compile the application into static assets for production:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to be hosted on Netlify, Vercel, or any other hosting provider.
