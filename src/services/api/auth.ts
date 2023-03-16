import {LoginProps} from '../../views/auth/Login/type';
import {SignUpProps} from '../../views/auth/SignUp/type';
const BASE_URL = 'http://localhost:8000/auth/';

/**
 * *handledSubmitLogin*
 * *Allow a user to login in our app. This function calls to the specific endpoint in our back-end*
 */
export const handelSubmitLogin = async (
     values: LoginProps
): Promise<Response> => {
     try {
          const response = await fetch(`${BASE_URL}login`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    email: values.email,
                    password: values.password,
               }),
          });

          return response;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
};
/**
 * *handledSubmitLogin*
 * *Allow a user to sign up our app. This function calls to the specific endpoint in our back-end*
 */
export const handelSubmitSignup = async (values: SignUpProps) => {
     try {
          const response = await fetch(`${BASE_URL}signup`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
               }),
          });
          return response;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
};
