<template>
   <div id="app">
      <AppHeaderVue :class="{'bg-header':$route.name != 'inicio'}"/>
      <router-view></router-view>
      <ReservaVue/>
      <AppFooterVue/>
   </div>
</template>
<script>
import AppFooterVue from './components/layout/AppFooter.vue'
import AppHeaderVue from './components/layout/AppHeader.vue'
import ReservaVue from './views/reservas/Reserva.vue'

export default {
   name:'app',
   components:{
      AppHeaderVue,
      AppFooterVue,
      ReservaVue
   }
}
</script>