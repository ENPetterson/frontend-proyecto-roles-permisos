import Api from "./Api" //Conexion al archivo Api.js por medio de Axios

export default {
    listar(q='') {
        return Api().get("/permiso");
    },
    guardar(datos) {
        return Api().post("/permiso", datos);
    },
    mostrar(id) {
        return Api().get(`/permiso/${id}`);
    },
    modificar(id, datos) {
        return Api().put(`/permiso/${id}`, datos);
    },
    eliminar(id) {
        return Api().delete(`/permiso/${id}`);
    },

}