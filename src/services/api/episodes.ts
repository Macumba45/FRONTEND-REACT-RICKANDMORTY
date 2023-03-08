import {EpisodesProps} from '../../../src/componets/CardEpisodes/types';
import {getAuthenticatedToken} from '../storage';

const BASE_URL = 'http://localhost:8000/episodes';

export async function fetchEpisodesList(): Promise<EpisodesProps[]> {
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
