import { apiSlice } from "../api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, pageSize }) => `products?page=${page}&size=${pageSize}`,
      // This allows to modify the data in a normalized way before Redux caches it
      // ie ıf we want to look up a data in store, instead of looping over each item
      // We can tap into entity object to look up an item only by its id
      // transformResponse: (responseData) => {
      //   console.log(responseData);
      //   // By calling .setAll(a,b) it'll return the standart {ids: [], entities: {}} normalized data structure
      //   return productsAdapter.setAll(initialState, responseData);
      // },
      // Defines relationship between queries and mutations
      // If certain type of data is mutated, it automatically invokes the query function of that data to refetch
      // Creates tag entries based on IDs of data
      providesTags: (result = []) =>
        //  [
        //   "Product",
        //   ...result.map(({ id }) => ({ type: "Product", id })),
        // ],

        {
          console.log(result, typeof result);
          return [
            "Product",
            ...result.allProducts.map(({ id }) => ({ type: "Product", id })),
          ];
        },
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
    addProduct: builder.mutation({
      query: (initialPost) => ({
        url: "/products",
        method: "POST",
        body: initialPost,
      }),
      // Invalidates cache tag and automatically refetch the endpoint
      invalidatesTags: ["Product"],
    }),
    editProduct: builder.mutation({
      query: (initialPost) => ({
        url: `/products`,
        method: "PUT",
        body: initialPost,
      }),
      // If an entity is updated/edited, existing tag is invalidated
      // which triggers refetching related query hooks in componets
      invalidatesTags: (result, error, arg) => [
        { type: "Product", id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Product", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productsApiSlice;
