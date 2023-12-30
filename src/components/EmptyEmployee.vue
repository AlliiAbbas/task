<template>
  <filter-component @FilteredEmployee="FilteredEmployee"/>
  <display-employees v-if="data !== null" :payload="data"/>
  <div v-if="data.length === 0 && filter_done" class="w-full text-center">No such data.</div>
</template>
<script>
import FilterComponent from "@/components/filterComponent.vue";
import DisplayEmployees from "@/components/DisplayEmployees.vue";
export default {
  components:{DisplayEmployees, FilterComponent},
  data:()=>({
    data:[],
    filter_done:false
  }),
  methods:{
    FilteredEmployee(e){
      this.filter_done=true
      this.data = e
    }
  }
}
</script>