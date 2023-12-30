<template>
  <div class="pt-11 grid grid-cols-12 ">
    <div class="col-span-12 text-center ">
      <h1 class="text-3xl">Filter Employees</h1>
    </div>
    <div class="grid col-span-12">
      <div class="col-span-12 text-center md:text-start">
        <p class="text-2xl mx-2 my-5">Filter By</p>
      </div>
      <div class="col-span-12 md:col-span-1">
        <select v-model="filter_by" class="w-full md:w-40 m-3 p-3 rounded">
          <option disabled selected>None</option>
          <option>Name</option>
          <option>Department</option>
        </select>
      </div>
      <div class="col-span-12  ">
        <input class="w-full p-3  md:w-40 m-3 rounded" v-if="filter_by === 'Name'" type="text" v-model="filter_name" />
      </div>
      <div class="col-span-12">
        <select class="w-full p-3  md:w-40 m-3 rounded" v-if="filter_by === 'Department'" v-model="filter_position">
          <option>
            None
          </option>
          <option v-for="i in filter_group" :key="i">
            {{ i }}
          </option>
        </select>
      </div>
      <div class="col-span-12  ">
        <button class="bg-black text-white w-full md:w-40 m-3 p-3 rounded" @click="handleFilter">Filter</button>

      </div>

        <br/>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    filter_by:null,
    filter_name:null,
    employees_data:null,
    filter_group:[],
    filter_position:null,
  }),
  created() {
    this.employees_data = this.$store.getters.getAllEmployeesData
    this.employees_data.map((e)=>{
      !this.filter_group.includes(e.department) ? this.filter_group.push(e.department) : null
    })
  },
  methods:{
    handleFilter(){
      let FilteredEmployee = []
      if(this.filter_by === 'Name'){
        this.employees_data.map((e)=>{
            e.name.toLowerCase().includes(this.filter_name.toLowerCase()) ? FilteredEmployee.push(e)  : null
        })
      }else {
        this.employees_data.map((e)=>{
          e.department === this.filter_position ? FilteredEmployee.push(e)  : null
        })
      }
      this.$emit('FilteredEmployee' , FilteredEmployee)
    }
  }
}
</script>



