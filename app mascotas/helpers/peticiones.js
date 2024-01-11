import { perros } from "./constantes";

export const GetData = async(perros)=>{
    const data = await axios.get(perros)
    return data
}