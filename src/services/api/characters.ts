import {
    CharacterInput,
    normalizeSpecies,
    normalizeCharacter,
} from "../../models/characters";
import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/characters';

export type CharacterResponse = {
    id: string;
    character_id: string;
    name: string;
    status: string;
    species: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
};
export type CharacterSpecieResponse = {
    species: string;
};

export async function fetchCharactersList() {
    const token = getAuthenticatedToken(); 
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
        },
    });
    const data: CharacterResponse[] = await response.json();
    return data.map(normalizeCharacter);
}

// export async function fetchCharactersSpecie() {
//     const token = getAuthenticatedToken(); 
//     const response = await fetch(`${BASE_URL}/species`, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${token}`, 
//             'Content-Type': 'application/json',
//         },
//     });
//     const data: CharacterSpecieResponse[] = await response.json();
//     return data.map(normalizeSpecies);
// }

export async function fetchCharacter(id :string) {
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