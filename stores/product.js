export const useProductStore = defineStore("product", () => {
  const products = ref([]);

  const getProducts = async () => {
    products.value = await useApis().GetProducts();
    return products.value;
  };

  const getProduct = async (id) => {
    return await useApis().GetProduct(id);
  };

  return { products, getProducts, getProduct };
});
