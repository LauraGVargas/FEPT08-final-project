<template>
  <div>
    <h1 class="text-8xl font-black text-emerald-800">{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return{
      title: "Holaaaa!🦜"
    }
  }
}
</script>
<style>
  
</style>