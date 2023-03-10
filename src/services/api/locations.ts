import {LocationProps} from '../../componets/CardLocations/types';
import {getAuthenticatedToken} from '../storage';

const BASE_URL = 'http://localhost:8000/locations';

export async function fetchLocationsList(): Promise<LocationProps[]> {
     const token = getAuthenticatedToken(); // Obtener el token de localStorage
     const response = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
               Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
               'Content-Type': 'application/json',
          },
     });
     const data = await response.json();
     return data;
}
