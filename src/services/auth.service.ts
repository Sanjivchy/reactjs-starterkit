import { loginType, signupType } from '../types/auth';
import http from '../utils/http/http.utils';

class AuthService {
  private accessToken: string | null = null;

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
  async logout(): Promise<void> {
    this.accessToken = null;
    return http().post('api/logout');
  }

  /**
   *  REFRESH ACCESS TOKEN METHOD 
   **/
  refreshAccessToken = async (): Promise<string> => {
    const response = await fetch('auth/refresh', {
      method: 'POST',
      credentials: 'include', // This is important to include cookies in the request
    });

    if (response.ok) {
      const { token } = await response.json();
      this.accessToken = token;
      return token;
    } else {
      throw new Error('Failed to refresh token');
    }
  };

  /**
   *  GET ACCESS TOKEN METHOD 
   **/
  getAccessToken = (): string | null => {
    return this.accessToken;
  };

}

export const authService = new AuthService();
export default AuthService;