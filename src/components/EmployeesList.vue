<template>
  <div>
    <ul class="w-full grid grid-cols-10 bg-gray-200 p-4">
      <li v-for="employee in employees_data" :key="employee.id" :id="employee.id" class="col-span-12 md:col-span-2 text-center  mx-2 p-2 text-gray-600 font-bold rounded cursor-pointer hover:bg-gray-300 hover:text-black" @click="selectEmployee(employee)" >
        {{ employee.name +" - "+ employee.position }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data:()=>({
    employees_data:[]
  }),
  created() {
    this.employees_data = this.$store.getters.getAllEmployeesData
  },
  methods:{
    handleActive(e){
      let elements = document.querySelectorAll('li');
      elements.forEach(element => {
        element.classList.remove('active');
      });
      let ele = document.getElementById(e.id)
      ele.classList.add('active')
    },
    selectEmployee(e){
      this.handleActive(e)
      this.$store.dispatch('selectedEmployee' , e).then(()=>{
        this.$router.push({ name: "Employee", params: { id: e.id } });
      })
    }
  }
}
</script>

<style>
.active{
  background-color: #424242;
  color: white !important;
}
</style>

