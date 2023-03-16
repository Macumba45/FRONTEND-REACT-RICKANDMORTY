import { getAuthenticatedToken } from '../storage';
import { CharacterInput, normalizeCharacter } from '../../models/characters';

const BASE_URL = 'http://localhost:8000/characters';

export type CharacterResponse = {
    id: string;
    character_id: string;
    name: string;
    status: string;
    species: string;
    image: string;
    createdAt: Date;
    updatedAt?: Date;
};
export type CharacterSpecieResponse = {
    species: string;
};

/**
 * *fetchCharactersList*
 * *This function bring all the characters from our back-end, pointing to the specific end-point*
 */
export async function fetchCharactersList(): Promise<CharacterResponse[]> {
    const token = getAuthenticatedToken();
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data: CharacterResponse[] = await response.json();
    return data.map(normalizeCharacter);
}

/**
 * *fetchCharacter*
 * *This function one character by Id from our back-end, pointing to the specific end-point*
 */
export async function fetchCharacter(
    id: string
) {
    const token = getAuthenticatedToken();
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const data: CharacterResponse = await response.json();
    return normalizeCharacter(data);
}
/**
 * *updateCharacter*
 * *This function modify one character by Id from our back-end, pointing to the specific end-point*
 */
export async function updateCharacter(
    id: string,
    values: { name: string; status: string; species: string }
) {
    const token = getAuthenticatedToken();
    const response = await fetch(`http://localhost:8000/characters/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values)
    });
    const data = await response.json();
    // MUST NORMALIZE DATA HERE
    return data;
}
/**
 * *deleteCharacter*
 * *This function delete one character by Id from our back-end, pointing to the specific end-point*
 */
export const deleteCharacter = async (
    id: string
) => {
    const token = getAuthenticatedToken();
    await fetch(`http://localhost:8000/characters/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });
};
