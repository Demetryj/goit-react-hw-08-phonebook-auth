export const selectAuthUser = state => state.auth.user;

export const selectAuthError = state => state.auth.error;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuthIsRefreshing = state => state.auth.isRefreshing;
