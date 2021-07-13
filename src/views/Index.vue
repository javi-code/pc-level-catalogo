<template>
   <div class="home">
      <main class="main-content"> 
         <PortadaVue/>
         <CategoriasListarVue/>
         <ProductosListarVue/>
      </main>
   </div>
</template>

<script>
import CategoriasListarVue from './categorias/CategoriasListar.vue'
import PortadaVue from './home/Portada.vue'
import ProductosListarVue from './productos/ProductosListar.vue'

export default {
   name: "indexHome",
   components: {
      CategoriasListarVue,
      ProductosListarVue,
      PortadaVue
   }
}
</script>