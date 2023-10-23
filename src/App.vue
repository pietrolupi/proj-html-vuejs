

<script>


import Jumbotron from './components/Jumbotron.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import DinamicJumbotron from './components/DinamicJumbotron.vue';

export default {

  name: 'App',
  components: {
    Jumbotron,
    Main,
    Footer,
    DinamicJumbotron
  },

  data(){
    return{
      
    }
  },
  
  methods:{

   
    },
    


  mounted(){
   
  }
}
</script>


<template>
  <DinamicJumbotron/>
  <!-- <Jumbotron/> -->
  <Main/>
  <Footer/>
</template>


<style lang="scss">
  @use './scss/main.scss'

  

</style>