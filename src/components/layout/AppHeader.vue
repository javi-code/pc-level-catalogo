<template>
   <header class="header">
      <div class="wrapp">
         <nav class="flex-sb">
            <div class="logo-c flex-center-ai">
               <router-link :to="{name:'inicio'}">
                  <img src="~@/assets/img/logo.png">
               </router-link>
            </div>
            <ol class="flex flex-center-ai">
               <li>
                  <router-link :to="{name:'inicio'}" class="item-menu">
                     Inicio
                  </router-link>
               </li>
               <li>
                  <router-link :to="{name:'productos'}" class="item-menu">
                     Productos
                  </router-link>
               </li>
               <li>
                  <router-link :to="{name:'categorias'}" class="item-menu">
                  Categorias
                  </router-link>
               </li>
               <li>
                  <router-link :to="{name:'contactos'}" class="item-menu">
                  Contacto
                  </router-link>
               </li>
            </ol>
         </nav>
      </div>
   </header>
</template>

<script>
export default {
   name:'appHeader',
}
</script>