import { getAuthenticatedToken } from "../storage";


export const fetchUserInfo = async (): Promise<Response> => {
    const token = getAuthenticatedToken(); // Obtener el token de localStorage
    const response: Response = await fetch('http://localhost:8000/users/profile', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`, // Agregar el token al header 'Authorization'
            'Content-Type': 'application/json',
        },
    });
    return response;
}