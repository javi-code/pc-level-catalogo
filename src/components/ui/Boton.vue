<template>
   <button class="btn" :type="type" :disabled="off">
      <i v-if="icon" :class="icon"></i>
      <span :class="{'mg':icon}" v-if="name">{{name}}</span>
   </button>
</template>
<script>

export default {
   name:'buttonTag',
   props:{
      name:{
         type: String,
      },
      type:{
         default: 'button'
      },
      icon:{
         default: false
      },
      off:{
         default: false,
         type: Boolean
      }
   }
}
</script>