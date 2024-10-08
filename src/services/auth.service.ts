import { loginType, signupType, refreshTokenType } from '../types/auth';
import http from '../utils/http/http.utils';

class AuthService {
  /**
   * FETCH PROFILE
   * */
  static async fetchProfile() {
    const response = await http().get('auth/me');
    return response.data;
  }

  /**
   * SIGN UP
   * @param data
   * */
  static async register(data: signupType) {
    const response = await http().post('api/register', JSON.stringify(data));
    return response.data;
  }

  /**
   * LOGIN
   * @param credentials
   * */
  static async login(credentials: loginType) {
    return http().post('user/login', JSON.stringify(credentials));
  }

  /**
   * LOGOUT METHOD
   * */
  static async logout(): Promise<void> {
    return http().post('api/logout');
  }

  static async refreshAccessToken(credentials:refreshTokenType) {
    const response = await http().post('auth/refresh',JSON.stringify(credentials))
    return response;
  }
}

export default AuthService;