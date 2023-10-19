

<script>
import { store } from '../../data/store';
export default {
  name: 'TrustedSection',

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
  <div class="trusted general-container">

    <div class="d-flex cards-container justify-content-between">
      <div class="trusted-card d-flex align-items-center justify-content-center flex-column"
        v-for="(item, index) in store.trustedCards"
        :key="index"
      >
        <img :src="getImagePath(item.img)" alt="">
        <div class="mt-3"><span>{{ item.name }}</span></div>
      </div>
    </div>
  
    <div class="trusted-text">
  
      <h2>The Trusted Name <br>
      for In-Home Tutoring.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi dolore illum fugiat, maiores beatae deleniti dicta recusandae architecto quidem? Lorem ipsum dolor sit amet.</p>
      <a href="#"> LEARN MORE</a>
      
    </div>
    <div class="img-container">

      <img src="../../assets/img/h5-img-1.jpg" alt="">
      
    </div>
  </div>
  <div class="bottom-border w-100"></div>

 
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .trusted.general-container{
    color: $text-primary-color;
    padding: 50px 30px 0 30px;
    
    border-bottom: $border-color;

    .img-container{
      img{
        width: 100%;
        
      }
    }
    
    
  }
  .cards-container{
    
    .trusted-card{
      height: 184px ;
      width: 140px;
      background-color: #f2f8fc;
      border: 1px solid $border-color;

      span{
        font-weight: 600;
      }
      .img-container{
        height: 500px;
        width: 500px;
      
        
      }
    }

  }

  .trusted-text{
    margin: 85px 0 65px 0;
    h2{
      font-weight: 600;
      line-height: 1.4;
      font-size: 2.2rem;
    }
    p{
      color: $text-tertiary-color;
    }
    a{
      color: $color-tertiary;
      font-weight: 600;
    }
  }
  
  .bottom-border{
    border-top: 1px solid $border-color;
    margin-bottom: 200px;
  }



</style>