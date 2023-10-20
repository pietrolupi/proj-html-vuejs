


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
    <swiper-slide>
        <div class="img-container">
          
          <img src="../../assets/img/course-1-f-img-350x282.jpg" alt="">
        </div>
        <h1>Android Developer</h1>
        <span>David Sanders</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quaerat repellat et perferendis, fuga autem tempora veritatis velit. In, accusamus!</p>

        <div class="tag-icons">
          ciao
        </div>
      </swiper-slide>
      <swiper-slide>
        <h1>CIAONEEEEEEEEE</h1>
      </swiper-slide>
      <swiper-slide>
        <h1>CIAONEEEEEEEEE</h1>
      </swiper-slide>
      <swiper-slide>
        <h1>CIAONEEEEEEE</h1>
      </swiper-slide>
   
 </swiper>
  </div>




</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    
    margin-top: 100px;
    margin-bottom: 300px;

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
  height: 70vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  cursor: pointer;
  width: 300px;
  height: 455px;
  border: 1px solid black;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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