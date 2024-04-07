<template>
    <div class="card">
        <DataTable :value="roles" tableStyle="min-width: 50rem">
            <Column field="id" header="ID"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="detalle" header="Detalle"></Column>
            <Column headerStyle="min-width: 10rem;">
            <template #body="slotProps">
                <Button
                    icon="pi pi-pencil"
                    class="p-button-rounded p-button-success mr-2"
                    @click="editarRole(slotProps.data)"
                />
                <Button
                    icon="pi pi-trash"
                    class="p-button-rounded p-button-warning mt-2"
                    @click="confirmDeleteRole(slotProps.data)"
                />
            </template> 
        </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RoleService from '@/service/RoleService';
import { useRouter } from 'vue-router';


const roles = ref([]);

const router = useRouter()

onMounted(() => {
    getRoles();
})

const getRoles = async () => {
    const {data} = await RoleService.listar();
    roles.value = data
}

const editarRole = (r) => {
    router.push(`/admin/role/${r.id}`)
}
</script>
