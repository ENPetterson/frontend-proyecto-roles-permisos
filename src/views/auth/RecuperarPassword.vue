<template>
    <h1>Recuperar Contraseña</h1>
    <p>Olvidaste tu contraseña? Ingresa tu email para enviarte un enlace</p>
    <label for="">Correo Electronico</label>

    <input type="email" v-model="email">
    <button @click="sendResetPassword">Enviar link</button>
</template>

<script setup>

import AuthService from "../../service/AuthService"
import { ref } from "vue"

const email = ref("")

const sendResetPassword = async () => {
    const {data} = await AuthService.recuperarPassword({email: email.value})

    console.log(data);

}

</script>
