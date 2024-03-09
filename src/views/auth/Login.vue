<template>
    <div>

       <h1>Ingresar</h1>
       {{ usuario }}
       <form @submit="funIngresar">
           <label for="">Ingrese Correo:</label>
           <input type="email" v-model="usuario.email">
           {{ errores.email }}
           <br>
           <label for="">Ingrese Contraseña:</label>
           <input type="password" v-model="usuario.password">
           {{ errores.password }}
           <br>
           <input type="submit">
       </form>
    </div>
</template>

<script setup>
import { ref } from 'vue' 
import authService from "./../../service/AuthService"
import { useRouter } from 'vue-router'

//const titulo = ref('Hola Mundo con Composition API');
const router = useRouter()
const usuario = ref({email: "", password: ""})
const errores = ref({})

const funIngresar = async (e) => {
    e.preventDefault();
    errores.value = {}
    try {
        const {data} = await authService.login(usuario.value)

        console.log(data);
        localStorage.setItem("token", data.access_token)

        router.push({name: 'Admin'})

        //alert("Bienvenido")

    } catch (error) {
        console.log("Error en componente login", error.response.data)
        if(error.response.data.errors) {
            errores.value = error.response.data.errors
        }else{
            alert(error.response.data.message)
        }
    }

}
</script>
