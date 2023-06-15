const { createSlice } = require('@reduxjs/toolkit');
const { signupUserThunk, loginUserThunk } = require('./authOperations');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signupUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.error = false;
        state.user = payload.user;
        state.isAuth = true;
      })
      .addCase(signupUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.error = false;
        state.user = payload.user;
        state.isAuth = true;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
