import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logIN, signUP } from 'services/phonebookAPI';

axios.defaults.baseURL = 'https:connections-api.herokuapp.com';

export const signupUserThunk = createAsyncThunk(
  'users/signup',
  async (body, thunkAPI) => {
    try {
      return await signUP(body);
    } catch (error) {
      if (error.response.data?.code) {
        return thunkAPI.rejectWithValue(
          `This user email: ${error.response.data.keyValue.email} already exist`
        );
      } else {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'users/login',
  async (body, thunkAPI) => {
    try {
      return await logIN(body);
    } catch (error) {
      return thunkAPI.rejectWithValue(`Write correctly field`);
    }
  }
);
