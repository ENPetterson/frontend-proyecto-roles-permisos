import axios from "axios"
// Esto conecta con endpoint de backend
export const urlBase = "http://127.0.0.1:8000/api";

const App = () => {
    let token = localStorage.getItem("token");

    const api = axios.create({
        baseURL: urlBase,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer '+token
        }
    });

    //capturar errores
    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if(error.response.status === 401){

            }
            if(error.response.status === 403){

            }

            return Promise.reject(error);

        }
        
    )
    return api;

}

export default App;