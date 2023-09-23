export const useProductStore = defineStore("product", () => {
  const DB_PRODUCTS = ref([
    // Flash
    {
      id: 1,
      main_image: {
        id: 11,
        url: "photo-1589902860314-e910697dea18",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: true,
      topRated: false,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 2,
      main_image: {
        id: 22,
        url: "photo-1508427953056-b00b8d78ebf5",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      all_images: [],
      provider: "unsplash",
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 490,
      discount: false,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: true,
      isFavorite: true,
      topRated: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 3,
      main_image: {
        id: 33,
        url: "photo-1521572163474-6864f9cf17ab",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: true,
      topRated: false,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 4,
      main_image: {
        id: 44,
        url: "photo-1512516756229-95a66d49c4e9",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      all_images: [],
      provider: "unsplash",
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 490,
      discount: false,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: true,
      isFavorite: true,
      topRated: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },

    // topRated
    {
      id: 6,
      main_image: {
        id: 66,
        url: "photo-1596783074918-c84cb06531ca",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: true,
      isFavorite: true,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 7,
      main_image: {
        id: 77,
        url: "photo-1503341504253-dff4815485f1",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "photo-1535730142260-496e3db19f6f",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: true,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 8,
      main_image: {
        id: 88,
        url: "photo-1514311548104-ae305aac4688",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: true,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 9,
      main_image: {
        id: 99,
        url: "photo-1577837132187-1e89f2de7df4",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      provider: "unsplash",
      all_images: [],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: true,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: true,
      isFavorite: true,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },

    // Colors
    {
      id: 102,
      main_image: {
        id: 102,
        url: "photo-1523381210434-271e8be1f52b",
        color: "#AEBCBC",
        provider: "unsplash",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      withColors: true,
      colors: [
        {
          id: 51,
          url: "photo-1523381210434-271e8be1f52b",
          color: "#AEBCBC",
          provider: "unsplash",
          name: "ligut blue",
        },
        {
          id: 52,
          url: "photo-1523381294911-8d3cead13475",
          color: "#5A6F6C",
          provider: "unsplash",
          name: "green",
        },
      ],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: false,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: false,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
    {
      id: 103,
      main_image: {
        id: 103,
        url: "photo-1668749091554-2b830c7989b6",
        color: "#881226",
        provider: "unsplash",
      },
      rate: 4,
      reviews: 120,
      size: "s",
      quantity: 150,
      style: "Boho",
      pattern_type: "Ditsy Floral",
      material: "Polyester",
      withColors: true,
      colors: [
        {
          id: 15,
          url: "photo-1668749091554-2b830c7989b6",
          color: "#881226",
          provider: "unsplash",
          name: "crismon",
        },
        {
          id: 16,
          url: "photo-1668749091807-642899a5ae15",
          color: "#996C35",
          provider: "unsplash",
          name: "light orange",
        },
      ],
      desc: "Single Button Flap Detail Tweed Overcoat",
      price: 254,
      actulaPrice: 355,
      discount: false,
      percentageOfSelling: 20,
      percentageOfFlash: 55,
      flash: false,
      topRated: false,
      isFavorite: false,
      sizes: [
        {
          id: 896,
          size: "xs",
        },
        {
          id: 89,
          size: "s",
        },
        {
          id: 96,
          size: "m",
        },
        {
          id: 86,
          size: "l",
        },
      ],
    },
  ]);

  const products = ref([]);

  const getProducts = async (filter) => {
    return await new Promise((resolve) => {
      const products = ref([]);
      if (filter == "flash") {
        products.value = DB_PRODUCTS.value.filter((product) => product.flash);
      } else if (filter === "topRated") {
        products.value = DB_PRODUCTS.value.filter(
          (product) => product.topRated
        );
      } else if (filter?.categories_filter || filter?.rest_filters) {
        products.value = useHelpers().getSubRandomArr(DB_PRODUCTS.value);
      } else {
        products.value = useHelpers().shuffle(DB_PRODUCTS.value);
      }

      setTimeout(() => {
        resolve(products.value);
      }, 1000);
    });
  };

  const getProduct = async (id) => {
    return await new Promise((resolve) => {
      const product = ref(null);

      product.value = DB_PRODUCTS.value.find((item) => {
        return item.id == id;
      });

      setTimeout(() => {
        resolve(product);
      }, 1000);
    });
  };

  return { products, getProducts, getProduct };
});
