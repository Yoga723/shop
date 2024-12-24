// Tempat untuk function-function yang berhubungan dengan cart atau memanipulasi data cart

import { ProductProps } from "./product/productProps";

let cartState: ProductProps[] = [];

// Function untuk ambil cart data dari local storage. Bila tidak ada kirim array[] kosong
export const getCartFromLocal = (): ProductProps[] => {
  const cart = localStorage.getItem("cartData");
  return cart ? JSON.parse(cart) : [];
};


// update cart data di local storage user
export const updateCartToLocal = (cart: ProductProps[]): void => {
  localStorage.setItem("cartData", JSON.stringify(cart));
};

// Tambah Product ke cart
export const addProductToCart = (product: ProductProps) => {
  const cart = getCartFromLocal();
  // cari product didalam cart yang punya id sama dengan product yang dikirim lewat parameter
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 0) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartToLocal(cart);
};

// Tambah quantity product di cart
export const incrementQuantity = (productId: string) => {
  const cart = getCartFromLocal();
  const product = cart.find((item) => item.id == productId);
  if (product) {
    product.quantity = (product.quantity || 0) + 1;
  }
  updateCartToLocal(cart);
};

// Filter kemudian exclude item yang punya id sama dengan productId
export const removeFromCart = (productId: string): void => {
  const cart = getCartFromLocal();
  const updatedCart = cart.filter((item) => item.id !== productId);
  updateCartToLocal(updatedCart);
};

// Kurangi quantity product di cart
export const decrementQuantity = (productId: string): void => {
  const cart = getCartFromLocal();
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = Math.max((product.quantity || 0) - 1, 0);
    if (product.quantity === 0) {
      // Optionally remove the product from the cart
      removeFromCart(productId);
    }
  }
  updateCartToLocal(cart);
};

// Hitung total harga
export const calculateTotal = () => {
  // return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
