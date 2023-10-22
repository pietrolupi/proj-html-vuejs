

<script>
import { store } from '../../data/store';
export default {
  name: 'SponsorSection',

  data(){
    return{
      store,
    }
  },

  methods: {
    getImagePath(fileName) {
      
      return new URL(`../../assets/img/${fileName}`, import.meta.url).href;
    },

  }
  
}
</script>

<template>
  <div class="general-container">
    
    
    <img-container>
  
      <img v-for="(sponsor,index) in store.sponsorsLogos"
      :key="index" :src="getImagePath(sponsor)" alt="">
  
    </img-container>
     
  </div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    text-align: center;
    padding: 100px 0;

    img-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 23%;
      }
    }
  }
</style>