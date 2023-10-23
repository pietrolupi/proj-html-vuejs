

<script>
import { store } from '../../data/store';
export default {
  name: 'JumboSwiperCard',
  props:{
    title: String,
    text: String,
    image: String,
    id: String,
    
  },

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

    <div class="jumbotron"
    :class="id">

      <div 
      class="jumbo-main d-flex flex-column align-items-center justify-content-center"
      >
        <h1>{{title}}</h1>
        <p>{{text}} </p>
        
        <button>REGISTER NOW</button>
      </div>
    </div>
  
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .jumbo-main{

    color: $text-secondary-color;

    h1{
        font-size: 4.5rem;
        font-weight: 600;
        margin-bottom: 30px;
      }

    p{
        line-height: 30px;
        font-family: $secondary-font;
        font-size: 1.1rem;
      }
    
    button{
          background-color: $color-tertiary;
          color: $text-secondary-color;
          border: none;
          padding: 19px 41px ;
          margin-top: 30px;
          &:hover{
            background-color: $color-tertiary-darker;
            border: 1px solid $text-secondary-color;
            padding: 18px 40px;
          }
        }

  }



  .background-1{
    background-image: url('../../assets/img/h5-slide-1-background.jpg');
  }

  .background-2{
    background-image: url('../../assets/img/h5-slide-2-background.jpg');
  }

  .background-3{
    background-image: url('../../assets/img/h5-slide-3-background.jpg');
  }


</style>