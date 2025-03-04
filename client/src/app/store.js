const { configureStore } = require("@reduxjs/toolkit");

export const appStore = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
