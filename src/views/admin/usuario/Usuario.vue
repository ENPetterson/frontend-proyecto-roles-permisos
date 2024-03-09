<template>
    <h1>Gestion Usuarios</h1>

    <label for="">Ingresar Nombre</label>
    <input type="text" v-model="usuario.name">
    <br>
    <label for="">Ingresar Email</label>
    <input type="email" v-model="usuario.email">
    <br>
    <label for="">Ingresar Contraseña</label>
    <input type="password" v-model="usuario.password">
    <br>
    <button type="button" @click="guardarUsuario()">Guardar Usuario</button>
    <table border="1">
        <thead>
            <tr>
                <td>Id</td>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Creado en</td>
                <td>Gestion</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="u in usuarios" :key="u.id">
                <td>{{ u.id }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.created_at }}</td>
                <td>
                    <button type="button" @click="editarUsuario(u)">Editar</button>
                    <button type="button" @click="eliminarUsuario(u)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
// Importaciones

import { ref, onMounted } from "vue";
import usuarioService from "./../../../service/UsuarioService.js"

// Declaracion de variables o constantes o estados
const usuarios = ref([])
const usuario = ref({name: "", email: "", password: ""});

// Ciclo de vida de un componente
onMounted(() => {
    getUsuarios()
})

// Metodos o funciones
const getUsuarios = async () => {
    const {data} = await usuarioService.listar()
    usuarios.value = data.data
}

const guardarUsuario = async () => {
    if(usuario.value.id) {
        await usuarioService.modificar(usuario.value.id, usuario.value)
    } else {
        await usuarioService.guardar(usuario.value)
    }

    usuario.value = {name: "", email: "", password: ""}
    getUsuarios()
}

const editarUsuario = (us) => {

    usuario.value = us;
}

const eliminarUsuario = async (us) => {

    if(confirm("Esta seguro de eliminar al usuario?")) {
        try {
            await usuarioService.eliminar(us.id)

            getUsuarios()
        } catch (error) {
            console.log(error);
        }
    }

}
</script>
