<template>
  <div v-for="item in payload" :key="item.id" class="w-full grid grid-cols-12">
    <div class="col-span-12 md:col-span-6 grid align-middle justify-center">
      <div class="rounded-3xl overflow-hidden m-5">
        <img :src="item.image_url" alt="employee-img" width="410"/>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6">
      <div class="w-full text-center p-5 mt-5 text-5xl">
        <h1>Employee Data</h1>
      </div>
      <div class="text-xl text-center md:text-start md:text-3xl ">
        <p class="font-bold my-12">Name: <span class="font-light">{{item.name}}</span></p>
        <p class="font-bold my-12">Position: <span class="font-light">{{item.position}}</span></p>
        <p class="font-bold my-12">Department: <span class="font-light">{{item.department}}</span></p>
        <p class="font-bold my-12">Email: <span class="font-light">{{item.email}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:['payload']
}
</script>


