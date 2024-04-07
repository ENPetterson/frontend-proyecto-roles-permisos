import Api from "./Api" //Conexion al archivo Api.js por medio de Axios

export default {
    listar(q='') {
        return Api().get("/role");
    },
    guardar(datos) {
        return Api().post("/role", datos);
    },
    mostrar(id) {
        return Api().get(`/role/${id}`);
    },
    modificar(id, datos) {
        return Api().put(`/role/${id}`, datos);
    },
    eliminar(id) {
        return Api().delete(`/role/${id}`);
    },

}