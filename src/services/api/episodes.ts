import { getAuthenticatedToken } from '../storage';

const BASE_URL = 'http://localhost:8000/episodes';
/**
 * *getEpisodes*
 * *This function bring all episodes from our back-end, pointing to the specific end-point*
 * 
 */
export async function getEpisodes() {
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
 * *getEpisodeById*
 * *This function bring one episode by Id from our back-end, pointing to the specific end-point*
 */
export async function getEpisodeById(
     id: string
) {
     try {
          const token = getAuthenticatedToken();
          const response = await fetch(`http://localhost:8000/episodes/${id}`, {
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
 * *getEpisodeTypes*
 * *This function bring one episodes by Id from our back-end, pointing to the specific end-point*
 */
export async function getEpisodeTypes() {
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
 * *createEpisode*
 * *This function create one episode, pointing to the specific end-point*
 */
export async function createEpisode() {
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
 * *updateEpisode*
 * *This function update one episode by Id from our back-end, pointing to the specific end-point*
 */
export async function updateEpisode() {
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


/**
 * *deleteCharacter*
 * *This function delete one episodes by Id from our back-end, pointing to the specific end-point*
 */
export const deleteEpisode = async (
     id: string
) => {
     try {
          const token = getAuthenticatedToken();
          await fetch(`http://localhost:8000/characters/${id}`, {
               method: 'DELETE',
               headers: { Authorization: `Bearer ${token}` },
          });
     } catch (error: any) {
          const backError = await error.json();
          return backError;
     }
};