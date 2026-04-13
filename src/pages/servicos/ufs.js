import axios from "axios";

export async function retornaUfs() {
    try {
        const endpoint = 'https://www.devmedia.com.br/projetos-api/ufs';
        const listaUfs = (await axios.get(endpoint)).data;
        return listaUfs;
    } catch (error) {
        console.error("Erro ao acessar a API de UFs:"+ error);
        throw error;
    }
}