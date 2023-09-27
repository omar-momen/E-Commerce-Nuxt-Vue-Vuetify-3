export const useApis = () => {
  return class {
    static async GetCities() {
      return await useMyFetch("cities");
    }

    static async GetHomeCategories() {
      const pending = ref(true);
      const data = ref(
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                title: "tops",
                img: "/images/categories/tops.png",
              },
              {
                id: 2,
                title: "Sweaters",
                img: "/images/categories/sweaters.png",
              },
              {
                id: 3,
                title: "Dresses",
                img: "/images/categories/dresses.png",
              },
              {
                id: 4,
                title: "Bottoms",
                img: "/images/categories/bottoms.png",
              },
              {
                id: 5,
                title: "Blouses",
                img: "/images/categories/blouses.png",
              },
              {
                id: 4,
                title: "Bags",
                img: "/images/categories/bags.png",
              },
            ]);
            pending.value = false;
          }, 1000);
        })
      );
      return { pending, data };
      // return await useMyFetch("categories ");
    }

    static async GetTopFilters() {
      const pending = ref(true);
      const data = ref(
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                title: "Women",
                sub_cats: [
                  {
                    id: 31,
                    title: "Sale",
                  },
                  {
                    id: 32,
                    title: "Clothing",
                  },
                  {
                    id: 33,
                    title: "Top",
                  },
                  {
                    id: 34,
                    title: "Dresses",
                  },
                  {
                    id: 35,
                    title: "Bottoms",
                  },
                  {
                    id: 36,
                    title: "Lingerie & Lounge",
                  },
                  {
                    id: 37,
                    title: "Bottoms",
                  },
                ],
              },
              {
                id: 2,
                title: "Men",
                sub_cats: [
                  {
                    id: 21,
                    title: "Sale",
                  },
                  {
                    id: 22,
                    title: "Clothing",
                  },
                  {
                    id: 23,
                    title: "Top",
                  },

                  {
                    id: 24,
                    title: "Bottoms",
                  },
                ],
              },
              {
                id: 3,
                title: "Kids",
                sub_cats: [
                  {
                    id: 11,
                    title: "Sale",
                  },
                  {
                    id: 12,
                    title: "Clothing",
                  },
                  {
                    id: 13,
                    title: "Top",
                  },
                  {
                    id: 14,
                    title: "Dresses",
                  },
                  {
                    id: 15,
                    title: "Bottoms",
                  },
                  {
                    id: 16,
                    title: "Lingerie & Lounge",
                  },
                  {
                    id: 17,
                    title: "Bags",
                  },
                ],
              },
            ]);
            pending.value = false;
          }, 1000);
        })
      );

      return { pending, data };
      // return await useMyFetch("filters ");
    }
  };
};
