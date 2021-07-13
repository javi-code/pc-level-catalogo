<template>
  <div class="loading"> 
     <div class="loading-item" v-for="cant in cantidad" :key="cant">
         <div class="ld--title"></div>
         <template v-if="childs">
            <div class="ld--text one"></div>
            <div class="ld--text two"></div>
            <div class="ld--text tre"></div>
         </template>
     </div>
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