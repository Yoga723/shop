import { ProductProps } from "@/public/data/product/productProps";
import { create } from "zustand";

interface CartState {
  cartData: ProductProps[];
  getLocalCartData: () => void;
  addToCart: (product: ProductProps) => void;
  removeFromCart: (product: ProductProps) => void;
  updateQuantity: (product: ProductProps, action: string) => void;
  confirmCheckout: (customerDetails: { name: string; whatsappNumber: number; email: string }) => void;
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
      // Cek apa produk ada ? Bila ada tambah satu
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
  removeFromCart: (product) =>
    set((state) => {
      const updatedCart = state.cartData.filter((item) => item.id != product.id);

      localStorage.setItem("cartData", JSON.stringify(updatedCart));

      return { cartData: updatedCart };
    }),
  updateQuantity: (product, action) =>
    set((state) => {
      const updatedCart = state.cartData.map((item) => {
        if (item.id === product.id) {
          let updatedQuantity = item.quantity || 1;

          if (action === "increment") {
            updatedQuantity += 1;
          } else if (action === "decrement" && updatedQuantity > 1) {
            updatedQuantity -= 1;
          }

          return { ...item, quantity: updatedQuantity };
        }
        return item; //Bila id tidak sama maka return kembali tanpa perubahan terhadap item tersebut
      });

      // Save cart data ke local storage
      localStorage.setItem("cartData", JSON.stringify(updatedCart));

      return { cartData: updatedCart };
    }),
  confirmCheckout: (customerDetails) =>
    set((state) => {
      console.log("ini customer detail:", customerDetails);

      if (!customerDetails.name || !customerDetails.whatsappNumber || !customerDetails.email) {
        alert("Please fill in all checkout details.");
        return state;
      }
      const total = state.cartData.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0);

      let message = `Halo kaak!! 👋%0AAku ${customerDetails.name} mau pesan buku-buku ini :%0A %0A`;

      state.cartData.forEach((item) => {
        message += `- ${item.title}%0AQuantity: ${item.quantity}%0APrice: Rp${
          item.quantity && (item.price * item.quantity).toLocaleString()
        }%0A--------------------------------%0A`;
      });

      const customerMessage = `%0A📝 Detail Pemesan %0ANama: ${customerDetails.name}%0AWhatsApp: ${customerDetails.whatsappNumber}%0AEmail: ${customerDetails.email}%0A--------------------------------%0A`;

      message += `Total Amount: Rp${total.toLocaleString()}%0A ${customerMessage}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=6285162992597&text=${message}`;
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return { ...state, cartData: [] };
    }),
}));

export default useCart;
