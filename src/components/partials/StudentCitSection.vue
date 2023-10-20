

<script>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  
 
 

  export default {
    components: {
      Swiper,
      SwiperSlide,
 
    },

    data(){
      return{
        
      }
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>


<template>
  
  <div class="general-container">

    <swiper
   :slidesPerView="3"
   :spaceBetween="30"
   :pagination="{
     clickable: true,
   }"
   :modules="modules"
   class="mySwiper"
 >
   <swiper-slide>
      <div class="prova">
        <h1>ciaooo</h1>
      </div>
    </swiper-slide>
   
    <swiper-slide>
      <h1>CIAOOOOOOO</h1>
    </swiper-slide>
    <swiper-slide>
      <h1>CIAOOOOOOO</h1>
    </swiper-slide>
    <swiper-slide>
      <h1>CIAOOOOOOO</h1>
    </swiper-slide>
    <swiper-slide>
      <h1>CIAOOOOOOO</h1>
    </swiper-slide>
 </swiper>


  </div>
  
</template>



<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;

.general-container{
  margin-bottom: 200px;
}
.swiper {
  width: 100%;
  height: 75vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  cursor: pointer;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  //aggiunte personali
  width: 300px;
  
  
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prova{
  border: 1px solid black;
  height: 400px;
}

</style>