# 📦 Product Explorer Dashboard

A high-performance, production-grade product catalog built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This project demonstrates clean architecture, efficient data fetching, and a mobile-first user experience.

---

## 🛠 Setup Instructions

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/product-explorer.git](https://github.com/your-username/product-explorer.git)
    cd product-explorer
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Launch development environment**
    ```bash
    npm run dev
    ```
    _Open [http://localhost:3000](http://localhost:3000) to view the app._

4.  **Production Build**
    ```bash
    npm run build
    npm run start
    ```

---

## ✨ Features Implemented

### 🛒 Product Discovery
- **Server-Side Fetching:** Leverages Next.js Server Components to fetch data from `fakestoreapi.com`, reducing client-side JavaScript.
- **Client-Side Search:** Instant, real-time filtering by product title.
- **Category Navigation:** Filter by category with a clean, controlled UI.
- **Favorites (Persistent):** "Like" products to save them for later. State persists across sessions using `localStorage` and React Context.

### 📄 Detailed Views
- **Dynamic Routing:** Implemented `/products/[id]` using Next.js dynamic segments.
- **Metadata Support:** Optimized for SEO and sharing.

### 🎨 Design & UX
- **Skeleton Loaders:** Prevents layout shift and provides visual feedback during data fetching.
- **Responsive Grid:** Mobile-first layout using Tailwind's `grid-cols` (1 col on mobile, 4 cols on desktop).
- **Error Handling:** Custom `error.tsx` and `not-found.tsx` boundaries to handle API failures gracefully.

---

## 🏗 Architecture & Design Decisions

### Folder Structure
```text
├── app/              # Next.js App Router (Routes & Skeletons)
├── components/       # UI Components (Atomic Design)
├── context/          # Global State (Favorites Context)
├── lib/              # API Client & Shared Utilities
└── types/            # Centralized TypeScript Definitions
