import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, getToken, setToken } from '../../utils/helpers/token.utils'
import { RolesType } from '../../types/auth';
import AuthService from '../../services/auth.service';

interface UserTypes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: RolesType;
}

interface AuthTypes {
  token: string;
  authenticated: boolean;
  authenticating: boolean;
  signing: boolean;
  user: UserTypes | undefined;
}

const initialState: AuthTypes = {
  token: getToken() || '',
  authenticated: false,
  authenticating: false,
  signing: false,
  user: undefined,
};
// Define the type for extra arguments
type ThunkExtraArgs = {
  AuthService: typeof AuthService;
};

export const fetchUserProfile = createAsyncThunk<UserTypes, void, { extra: ThunkExtraArgs }>(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { AuthService } = extra; // TypeScript now knows AuthService exists
      const response = await AuthService.fetchProfile();
      return response;
    } catch (error) {
      const err = error as Error;
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess(state) {
      state.signing = false;
    },

    loginSuccess(state, action) {
      const { token } = action.payload;
      state.authenticated = true;
      state.authenticating = false;
      state.token = token;
      setToken(token);
    },

    loginFailure(state) {
      state.authenticating = false;
    },

    loginStart(state) {
      state.authenticating = true;
    },

    logout(state) {
      state.authenticated = false;
      state.token = '';
      clearToken();
    },

    setUser(state, action) {
      state.user = action.payload;
      state.authenticated = true;
    },

    invalidToken(state) {
      state.token = '';
      state.authenticating = false;
      state.authenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.authenticating = true;
        console.log("pending")
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.authenticating = false;
        state.authenticated = true;
        state.user = action.payload;
        console.log("fulfilled")
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.authenticating = false;
        console.log("rejected")
      });
  },
  
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  invalidToken,
  logout,
  signupSuccess,
  setUser,
} = authSlice.actions;

export default authSlice;