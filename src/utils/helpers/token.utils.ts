import { TOKEN_KEY } from "../constant/auth";

export const getToken = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY.TOKEN);
  }
  return undefined;
};
  
export const setToken = (token: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(TOKEN_KEY.TOKEN, token);
  }
};

export const clearToken = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY.TOKEN);
  }
};

export const getRefreshToken = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY.REFRESH_TOKEN);
  }
  return undefined;
}

export const setRefreshToken = (token:string) => {
  if(typeof localStorage !== 'undefined' ) {
    localStorage.setItem(TOKEN_KEY.REFRESH_TOKEN, token)
  }
}

export const clearRefreshToken = () => {
  if(typeof localStorage !== 'undefined'){
    localStorage.removeItem(TOKEN_KEY.REFRESH_TOKEN)
  }
}