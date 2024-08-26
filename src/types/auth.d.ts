export interface loginType {
  username: string;
  password: string;
}
  
export interface signupType {
  username: string;
  password: string;
  confirm_password: string;
}

export interface refreshTokenType {
  refreshToken: string | null | undefined; 
  expiresInMins: number
}

export type RolesType = 'admin' | 'moderator' | 'user';