

<script>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import { store } from '../../data/store';
  
 
 

  export default {
    components: {
      Swiper,
      SwiperSlide,
    
 
    },

    data(){
      return{
        store
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },

    methods: {
    getImagePath(fileName) {
      
      return new URL(`../../assets/img/${fileName}`, import.meta.url).href;
    },

   
  }
  };
</script>


<template>
  
  <div class="custom-container">

    <div class="geo-mask w-100 h-100">

    </div>
    <swiper
   :slidesPerView="1"
   :spaceBetween="30"
   :pagination="{
     clickable: true,
   }"
   :modules="modules"
   class="mySwiper"
 >
   <swiper-slide v-for="person in store.studentCitCards"
   :key="person.name">

      
        
        <img :src="getImagePath(person.img)" alt="">
        <p>"{{ person.cit }}"</p>
        <h3>{{person.name}}</h3>
        <h4>{{ person.role }}</h4>
      

    </swiper-slide>
   
  
 </swiper>



  </div>
  
</template>



<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;

.custom-container{
  margin-bottom: 200px;
  width: 100%;
  height: 650px;
  background-color: $color-tertiary;
  position: relative;

  .geo-mask{
    background-image: url('../../assets/img/interactive-map-slider-img-1.png');
    filter: invert(100%);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left:0;
  }
}


//SWIPER CODE---------------------------------------
.swiper {
  width: 100%;
  height: 75vh;
  max-width: 700px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  color: $text-secondary-color;
  cursor: pointer;

  //////aggiunte personali
  
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
  display: block;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 120px 0 45px 0;
  } 

  
  h3{
    padding-top: 40px;
    font-size: 1.3rem;
    font-weight: 600;
  }

  h4{
    font-size: 0.8rem;
    font-weight: 600;
    padding-top: 16px;
  }

  p{
    
    font-weight: 100;
    line-height: 1.62;
  }
  
}

.swiper-slide 

.prova{
  
  height: 400px;
}

</style>