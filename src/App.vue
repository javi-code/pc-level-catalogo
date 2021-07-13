<template>
   <div id="app">
      <AppHeaderVue :class="{'bg-header':$route.name != 'inicio'}"/>
      <router-view></router-view>
      <AppFooterVue/>
   </div>
</template>
<script>
import AppFooterVue from './components/layout/AppFooter.vue'
import AppHeaderVue from './components/layout/AppHeader.vue'

export default {
   name:'app',
   components:{
      AppHeaderVue,
      AppFooterVue
   }
}
</script>