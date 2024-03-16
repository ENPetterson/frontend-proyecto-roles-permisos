<template>
  <h1>Layout Administrador</h1>
  
  <RouterLink to="/admin">Admin</RouterLink> |
  <RouterLink to="/admin/usuario">Usuario</RouterLink>
  <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
