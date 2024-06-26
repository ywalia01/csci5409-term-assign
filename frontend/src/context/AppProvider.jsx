import { createContext, useState, useEffect } from "react";
const AppContext = createContext({});

const sampleProducts = [
  {
    productId: 1,
    productTitle: "Wireless Noise-Cancelling Headphones",
    productDescription:
      "Experience crystal-clear sound and immersive audio with these premium noise-cancelling headphones. Lightweight and comfortable for all-day use.",
    productPrice: 199,
    productImage:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
    productRating: 5,
    productSeller: "TechGear",
  },
  {
    productId: 2,
    productTitle: "Smart Watch with Fitness Tracker",
    productDescription:
      "Stay connected and track your fitness goals with this sleek and stylish smartwatch. Features include heart rate monitoring, GPS, and water resistance.",
    productPrice: 149,
    productImage: "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg",
    productRating: 4,
    productSeller: "GadgetHub",
  },
  {
    productId: 3,
    productTitle: "High-Performance Gaming Laptop",
    productDescription:
      "Dominate the gaming world with this powerful and ultra-fast gaming laptop. Equipped with the latest hardware and a stunning display.",
    productPrice: 1499,
    productImage:
      "https://m.media-amazon.com/images/I/51Qu24My+CL._AC_UF894,1000_QL80_.jpg",
    productRating: 4,
    productSeller: "TechPro",
  },
  {
    productId: 4,
    productTitle: "Premium Leather Messenger Bag",
    productDescription:
      "Carry your essentials in style with this durable and sophisticated leather messenger bag. Ideal for work, travel, or everyday use.",
    productPrice: 89,
    productImage:
      "https://m.media-amazon.com/images/I/81Fx57SA5OL._AC_UF894,1000_QL80_.jpg",
    productRating: 3,
    productSeller: "LeatherCraft",
  },
  {
    productId: 5,
    productTitle: "Robotic Vacuum Cleaner",
    productDescription:
      "Say goodbye to manual vacuuming with this smart robotic vacuum cleaner. It automatically cleans your floors and carpets, saving you time and effort.",
    productPrice: 299,
    productImage:
      "https://m.media-amazon.com/images/I/61eRk8uocmS._AC_UF894,1000_QL80_.jpg",
    productRating: 2,
    productSeller: "SmartHome",
  },
  {
    productId: 6,
    productTitle: "Premium Yoga Mat",
    productDescription:
      "Enhance your yoga practice with this non-slip, eco-friendly yoga mat. Provides excellent cushioning and grip for a comfortable workout.",
    productPrice: 59,
    productImage:
      "https://m.media-amazon.com/images/I/81oeN4YQGCL._AC_UF894,1000_QL80_.jpg",
    productRating: 4,
    productSeller: "FitnessPro",
  },
  {
    productId: 7,
    productTitle: "Professional DSLR Camera",
    productDescription:
      "Capture stunning photos and videos with this high-performance DSLR camera. Features advanced autofocus, high-resolution sensor, and versatile lens options.",
    productPrice: 1299,
    productImage:
      "https://m.media-amazon.com/images/I/71ROh7X7gtL._AC_UF894,1000_QL80_.jpg",
    productRating: 3,
    productSeller: "CameraWorld",
  },
  {
    productId: 8,
    productTitle: "Ergonomic Office Chair",
    productDescription:
      "Improve your posture and comfort while working with this ergonomically designed office chair. Adjustable features and breathable mesh back support.",
    productPrice: 179,
    productImage:
      "https://m.media-amazon.com/images/I/71wG3iqE4WL._AC_UF1000,1000_QL80_.jpg",
    productRating: 4,
    productSeller: "OfficeSupplies",
  },
];

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        products,
        setProducts,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
