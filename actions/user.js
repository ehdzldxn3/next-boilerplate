import axios from "axios";
import config from "../config/config";
import { createAsyncThunk } from '@reduxjs/toolkit'
import crypto from 'crypto-js'







export const loginAction = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
    try {
      console.log('loginAction')

      let form = new FormData()
      form.append('userId', data.userId)
      form.append('pwd', crypto.SHA256(data.pwd).toString())
      form.append('isAdmin', data.isAdmin)

      const response = data
      // await axios.post(`${config.USER_SERVER_URL}api/admin/select/login`, form)

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
});

export const logoutAction = createAsyncThunk('user/logout', async () => {
  console.log('logout')
    const response = await {data:'logout'}
    return response.data;
})