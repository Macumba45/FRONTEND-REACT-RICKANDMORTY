import { getAuthenticatedToken } from '../storage';
import { CharacterResponse } from './characters';
const BASE_URL = 'http://localhost:8000/users/'

export const getUserData = async (): Promise<Response> => {
    try {
        const token = getAuthenticatedToken();
        const response: Response = await fetch(
            `${BASE_URL}profile`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response;
    } catch (error: any) {
        const backError = await error.json();
        return backError;
    }
};

export const fetchUserFavs = async (
    id: string
): Promise<CharacterResponse[]> => {
    try {
        const token = getAuthenticatedToken();
        const response: Response = await fetch(
            `${BASE_URL}${id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error: any) {
        const backError = await error.json();
        return backError;
    }
};

export const postUserFavs = async (characterId: string) => {
    try {
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
    } catch (error: any) {
        const backError = await error.json();
        return backError;
    }
};
