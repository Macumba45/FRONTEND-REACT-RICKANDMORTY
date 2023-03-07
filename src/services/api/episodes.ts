import { EpisodesProps } from '../../../src/componets/CardEpisodes/types'
import { getAuthenticatedToken } from '../storage';


const BASE_URL = 'http://localhost:8000//episodes';


export async function fetchEpisodesList(): Promise<string[]> {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data
}