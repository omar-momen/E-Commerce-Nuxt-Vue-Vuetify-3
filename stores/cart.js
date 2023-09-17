import { useAuthStore } from "@/stores/auth";
export const useCartStore = defineStore("cart", () => {
  const DB_CART = {
    items: [],
    total: 600,
    subtotal: 700,
  };

  const items_in_cart_length = computed(() => {
    return cart.value.items.length || useAuthStore().user?.cartLength || "0";
  });

  const cart = ref({
    items: [],
  });

  const getCart = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        cart.value = DB_CART;
        resolve();
      }, 1000);
    });
  };

  const addToCart = async (product) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        cart.value.items.push(product);
        let beat = new Audio("/sounds/message_sent.mp3");
        beat.play();
        resolve(product);
      }, 1000);
    });

    // then..
    navigateTo("/cart");
  };

  return { cart, getCart, addToCart, items_in_cart_length };
});
