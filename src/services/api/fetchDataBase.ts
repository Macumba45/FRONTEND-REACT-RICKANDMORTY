import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/syncApi/';
/**
 * *syncData*
 * *This function sync every single one entity from the back-end, pointing to the specific end-point*
 */
export async function syncData(): Promise<boolean> {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_URL, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
               },
          });
          const data = await response.json();
          return data;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
}
