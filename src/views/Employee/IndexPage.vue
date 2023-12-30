<template>
  <employees-list />
  <display-employees v-if="data !== null" :payload="data"/>
</template>


<script>
import EmployeesList from '@/components/EmployeesList.vue'
import DisplayEmployees from "@/components/DisplayEmployees.vue";

export default {
  components: {
    DisplayEmployees,
    EmployeesList
  },
  data:()=>({
    data:null
  }),
  created() {
    this.data = this.$store.getters.getEmployees
    if(this.data == null ){
      this.$router.push({name:'Home'})
    }
  },
  watch: {
    '$route.params.id'() {
      this.data = null
      this.data = this.$store.getters.getEmployees

    },
  },
}
</script>