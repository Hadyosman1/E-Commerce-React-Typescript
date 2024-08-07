import categories from "@store/categoriesSlice/categoriesSlice";
import { configureStore } from "@reduxjs/toolkit";
import products from "@store/productsSlice/productsSlice";

const store = configureStore({
  reducer: {
    categories,
    products,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
