<template>
  <employees-list />
  <empty-employee/>
</template>


<script>
import EmployeesList from '@/components/EmployeesList.vue'
import EmptyEmployee from "@/components/EmptyEmployee.vue";

export default {
  components: {
    EmptyEmployee,
    EmployeesList
  }
}
</script>