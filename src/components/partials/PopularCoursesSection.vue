


<script>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  import { store } from '../../data/store';
  import SwiperCard from './SwiperCard.vue';
 

  export default {
    components: {
      Swiper,
      SwiperSlide,
      SwiperCard,
 
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
  };
</script>


<template>
  <div class="general-container">

    <div class="top-text">
      <h1>Popular Online Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illum, omnis commodi maxime atque esse numquam a molestias perferendis explicabo?</p>
    </div>


    <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >

 
  <swiper-slide v-for="course in store.popularCourses" :key="course.title">
    <swiper-card :title="course.title" :description="course.description" :tag="course.tag" :teacher="course.teacher" :image="course.image" :cost="course.cost" />
  </swiper-slide>
   
 </swiper>
  </div>




</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;


  .general-container{
    
    margin-top: 100px;
    padding-bottom: 100px;
    border-bottom: 1px solid $border-color;

    .top-text{
      text-align: center;
      color: $text-primary-color;
      max-width: 750px;
      margin: 0 auto;
      h1{
        font-size: 2.7rem;
        font-weight: 600;
        margin-bottom: 20px;
      }
      p{
        color: $text-7-color;
      }
    }
  }


  //SWIPER STYLE ---------------------------------------------------------

  
.swiper {
  width: 100%;
  height: 500px;
  margin-top: 100px;
}

.swiper-slide {
  
  font-size: 18px;
  background: #fff;
  cursor: pointer;
  width: 260px;
  height: 455px;
  border: 1px solid $border-color;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  
  

  .img-container{
    width: 100%;
    height: 235px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>