/**
 * *getAuthenticatedToken*
 * *Function for get token. Unless you have token, you won't be able to access to the app*
 */
export const getAuthenticatedToken = () => {
     try {
          const token = window.localStorage.getItem('token');
          return token ? JSON.parse(token) : null;
     } catch (error: any) {
          return error.message;
     }
};
/**
 * *setAuthenticatedToken*
 * *Function for set token. Unless you have token, you won't be able to access to the app*
 */
export const setAuthenticatedToken = (token: string) => {
     try {
          window.localStorage.setItem('token', JSON.stringify(token));
     } catch (error: any) {
          return error.message; 
     }
};
