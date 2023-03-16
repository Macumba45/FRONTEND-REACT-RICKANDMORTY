import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/locations';
/**
 * *getLocations*
 * *This function bring all locations from our back-end, pointing to the specific end-point*
 */
export async function getLocations() {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(BASE_URL, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               }
          });
          const data = await response.json();
          return data;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
}
/**
 * *getLocationById*
 * *This function bring one location by Id from our back-end, pointing to the specific end-point*
 */
export async function getLocationById(
     id: string
) {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`http://localhost:8000/locations/${id}`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               }
          });
          const data = await response.json();
          return data;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
}
/**
 * *getLocationTypes*
 * *This function bring one location by Id from our back-end, pointing to the specific end-point*
 */
export async function getLocationTypes() {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_URL}/types`, {
               method: 'GET',
               headers: {
                    Authorization: `Bearer ${token}`,
               }
          });
          const data = await response.json();
          return data;
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
}
/**
 * *createLocation*
 * *This function create one location, pointing to the specific end-point*
 */
export async function createLocation() {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_URL}`, {
               method: 'POST',
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
/**
 * *updateLocation*
 * *This function update one location by Id from our back-end, pointing to the specific end-point*
 */
export async function updateLocation() {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`${BASE_URL}`, {
               method: 'PUT',
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

