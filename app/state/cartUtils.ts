import { ProductProps } from "@/public/data/product/productProps";
import { create } from "zustand";

interface CartState {
  cartData: ProductProps[];
  getLocalCartData: () => void;
  addToCart: (product: ProductProps) => void;
}

const useCart = create<CartState>((set) => ({
  cartData: [],
  // function untuk cek apakah ada data cart di local file
  getLocalCartData: () => {
    const cart = localStorage.getItem("cartData");
    if (cart) {
      set({ cartData: JSON.parse(cart) });
    }
  },

  addToCart: (product) =>
    set((state) => {
      // Cek apa produk ada. Bila ada tambah satu
      const updatedCart = state.cartData.map(
        (item) => (item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item) // Bila produk tidak ditemukan, tidak terjadi perubahan apapun
      );

      // Cek apa produk ada. Bila tidak masukkan ke cart dan tambah quantity 1
      const isExistingProduct = state.cartData.some((item) => item.id === product.id);
      if (!isExistingProduct) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      // Save cart data ke local storage
      localStorage.setItem("cartData", JSON.stringify(updatedCart));

      return { cartData: updatedCart };
    }),
}));

export default useCart;
