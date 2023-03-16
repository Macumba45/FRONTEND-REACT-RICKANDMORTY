import { getAuthenticatedToken } from '../storage';
import { CharacterResponse } from './characters';

export const fetchUserInfo = async (): Promise<Response> => {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response: Response = await fetch(
        'http://localhost:8000/users/profile',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                'Content-Type': 'application/json',
            },
        }
    );
    return response;
};

export const fetchUserFavs = async (
    id: string
): Promise<CharacterResponse[]> => {
    try {
        const token = getAuthenticatedToken(); // Obtener el token de localStorage
        const response: Response = await fetch(
            `http://localhost:8000/users/favorites/${id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json(); // Convertir la respuesta a JSON
        return data;
    } catch (error) {
        console.log(error);
    }

    return [];
};

export const postUserFavs = async (characterId: string): Promise<Response> => {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response: Response = await fetch(
        `http://localhost:8000/users/favoritesCharacter/${characterId}`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
                'Content-Type': 'application/json',
            },
        }
    );
    console.log(response);
    return response;
};
