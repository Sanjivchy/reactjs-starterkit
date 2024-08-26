import { useDispatch } from 'react-redux';

import authSlice, {
  loginFailure,
  loginStart,
  loginSuccess,
} from '../store/slices/auth.slice';

import { loginType, signupType } from '../types/auth';
import AuthService from '../services/auth.service';
import useStore from '../hooks/useStore';
import notify from '../utils/helpers/notification.utils';

const useAuth = () => {
  /**
   * REDUX HOOK
   * */
  const dispatch = useDispatch();

  /**
   * REDUX STORE
   * */
  const { user, token, authenticated, authenticating, signing } =
    useStore('auth');

  /**
   * REGISTER METHOD
   * @param data
   * */
  const register = (data: signupType) => AuthService.register(data);

  /**
   * LOGIN METHOD
   * @param credentials
   * */
  const login = async (credentials: loginType) => {
    dispatch(loginStart());
    try {
      const response: any = await AuthService.login(credentials);
      dispatch(loginSuccess(response.data));
       
      notify('Login successful.', 'success');
    } catch (e: any) {
      dispatch(loginFailure(e));
      notify('Something went wrong.', 'error');
    }
  };

  /**
   * LOGOUT METHOD
   * */
  const logout = async () => {
    try {
      // const response: any = await AuthService.logout();
      // if (response.data.ok) {
      //   dispatch(authSlice.actions.logout());
      // }
      dispatch(authSlice.actions.logout());
    } catch (e: any) {
      notify('Something went wrong .', 'error');
    }
  };


  return {
    user,
    token,
    signing,
    authenticated,
    authenticating,
    register,
    login,
    logout,
  };
};

export default useAuth;