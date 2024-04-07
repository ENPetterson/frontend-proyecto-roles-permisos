<template>
    <div class="card">
        <h3>Nombre Rol: <InputText type="text" v-model="role.nombre"></InputText></h3>
        <h4>Detalle: <InputText type="text" v-model="role.detalle"></InputText></h4>

        <div class="card flex flex-wrap justify-content-center gap-3">
            <div class="flex align-items-center" v-for="permiso in permisos" :key="permiso.id">
                <Checkbox v-model="seleccionados" :value="permiso.id" />
                <label class="ml-2"> {{ permiso.nombre }} </label>
        </div>
    </div>
    <Button type="button" label="Guardar Cambios" @click="guardarCambios"/>
    </div>
</template>

<script setup>
import RoleService from '@/service/RoleService';
import permisoService from '@/service/PermisoService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute()
    const role_id = route.params.id
    const role = ref({})
    const permisos = ref([])
    const seleccionados = ref([])

    onMounted(() => {
        getRole()
        getPermisos()
    })

    const getRole = async () => {
        const {data} = await RoleService.mostrar(role_id)
        role.value = data

        //cargar los permisos seleccionados
        data.permisos.forEach(per => {
             seleccionados.value.push(per.id)
        });
    }

    const getPermisos = async () => {
        const {data} = await permisoService.listar();
        permisos.value = data
    }

    const guardarCambios = async () => {
        if(confirm("Esta seguro de guardar los cambios?")) {
            role.value.nuevos_permisos = seleccionados.value
            const {data} = await RoleService.modificar(role_id, role.value)
            alert("Datos actualizados");
        }
    }
</script>