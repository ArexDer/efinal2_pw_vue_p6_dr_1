import axios from "axios"


//GUARDAR
const guardar = async(vehiculobody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos`,vehiculobody)
    .then(r => r.data);
    console.log(data);
    return data;

}


//GUARDAR  FACHADA
export const guardarFachada = async(vehiculobody) => {
    return await guardar(vehiculobody);
    

}






