<template>
  <div class="loading"> 
     <span>Cargando..</span>
  </div>
</template>

<script>
export default {
   props:{
      cantidad:{
         default:3
      },
      childs:{
         default:true
      }
   }
}
</script>