

<script>


import Jumbotron from './components/Jumbotron.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {

  name: 'App',
  components: {
    Jumbotron,
    Main,
    Footer,
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
  <Jumbotron/>
  <Main/>
  <Footer/>
</template>


<style lang="scss">
  @use './scss/main.scss'

  

</style>