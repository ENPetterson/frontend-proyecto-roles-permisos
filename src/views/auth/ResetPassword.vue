<template>
    <div class="card">
        <h1>Cambiar su contraseña</h1>

        <label for="email1" class="block text-900 text-xl font-medium mb-2">Ingrese Token</label>
        <InputText type="text" v-model="datos.token" class="w-full md:w-30rem mb-5" disabled/>

        <label for="email1" class="block text-900 text-xl font-medium mb-2">Ingrese Correo</label>
        <InputText id="email1" type="text" placeholder="Correo electronico" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="datos.email" />

        <label for="password1" class="block text-900 font-medium text-xl mb-2">Ingrese Contraseña</label>
        <Password id="password1" v-model="datos.password" placeholder="Contraseña" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

        <label for="password1" class="block text-900 font-medium text-xl mb-2">Repetir Contraseña</label>
        <Password id="password1" v-model="datos.password_confirmation" placeholder="Contraseña" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
      
        <button @click="funGuardarCambios()">Reestablecer Contraseña</button>
    </div>

</template>

<script setup>

import AuthService from '@/service/AuthService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const datos = ref({token: ""})

onMounted(() => {
    datos.value.token = route.query.token;
})


const funGuardarCambios = async () => {
    const {data} = await AuthService.resetPassword(datos.value)
    console.log(data);

    alert("Contraseña Actualizada");
}

</script>
