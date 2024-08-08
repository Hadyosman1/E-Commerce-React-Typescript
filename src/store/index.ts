import { configureStore } from "@reduxjs/toolkit";
import categories from "@store/categoriesSlice/categoriesSlice";
import products from "@store/productsSlice/productsSlice";
import cart from "@store/cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    categories,
    products,
    cart,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
