


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { store } from '../data/store';
import JumboSwiperCard from './partials/JumboSwiperCard.vue';

export default {
  name: 'DinamicJumbotron',
  components: {
    Swiper,
    SwiperSlide,
    JumboSwiperCard,
    
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
}
</script>




    
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in store.jumbotronContent" :key="item.title">
      <JumboSwiperCard 
        :title="item.title"
        :text="item.text" 
        :image="item.image"
        :id="item.id" 
      />
    </swiper-slide>
    
    <nav class="d-flex justify-content-between">
      <img src="../assets/img/logo-light.png" alt="">
      <ul class="d-flex">
        <li v-for="(voice, index) in store.jumboMenu" :key="index" v-html="voice"></li>
      </ul>
    </nav>
  </swiper>
</template>
  

<style lang="scss" scoped>

@use '../scss/partials/vars' as *;



nav{
      align-items: center;
      padding: 45px;
      position: absolute;
      top: -10px;
      z-index: 999;
      color: $text-secondary-color;
     
      width: 100%;
      img{
        width: 200px;
      }
      ul{
        margin: 0;
        padding: 0;
        li{
          
          
          display: inline-block;
          margin: 0px 15px;
          margin-bottom: -7px;
          cursor: pointer;
        }
      }
    }
.jumbotron{
    
    background-position: center;
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    

    .jumbo-main{
      text-align: center;
      width: 70%;
    }

  }



///SWIPER----------------------------------------------------------------------

.swiper {
  width: 100%;
  height: 700px;
  position: relative;

 
}

.swiper-slide {
  
  cursor: pointer;
  height: 100%;

}



</style>