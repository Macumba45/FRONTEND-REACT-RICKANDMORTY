import { CharacterResponse } from '../services/api/characters';

export type CharacterInput = {
     id?: string;
     character_id?: string;
     name?: string;
     status?: string;
     species?: string;
     image?: string;
     createdAt?: Date;
};

export const normalizeCharacter = (input: CharacterResponse) => {
     return {
          id: input?.id || '',
          character_id: input?.character_id || '',
          name: input?.name || '',
          status: input?.status || '',
          species: input?.species || '',
          image: input?.image || '',
          createdAt: input?.createdAt || Date(),

     };
};

export const normalizeSpecies = (input: CharacterResponse) => {
     return {
          species: input?.species || '',
     };
};
