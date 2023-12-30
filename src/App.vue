<template>
  <employees-list />
  <display-employees/>
</template>

<script>
import EmployeesList from './components/EmployeesList.vue'
import DisplayEmployees from "@/components/DisplayEmployees.vue";

export default {
  components: {
    DisplayEmployees,
    EmployeesList
  }
}
</script>

