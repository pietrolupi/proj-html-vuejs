

<script>
import { store } from '../../data/store';
export default {
  name: 'SwiperCard',
  props:{
    title: String,
    description: String,
    tag: String,
    teacher: String,
    image: String,
    cost: String,
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
  <swiper-slide>
    <div class="img-container">
      <img :src="getImagePath(image)" alt="">
    </div>

    <div class="d-flex justify-content-between mx-2 mt-3 ">
      <div>
        <h1>{{ title }}</h1>
        <span class="teacher-name">{{ teacher }}</span>
      </div>

      <div>
        <span class="price-tag"
         :class="cost === 'FREE'? 'free' : 'not-free'">{{cost}}</span>
      </div>
    </div>

    <div class="mx-2">

      <p>{{ description }}</p>
      <div class="tag-icons d-flex">
        <span><i class="fa-solid fa-user"></i> 1</span>
        <span class="ms-3"><i class="fa-solid fa-tag"></i> {{ tag }}</span>
        
      </div>

    </div>
  </swiper-slide>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

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
  h1{
    font-size: 1rem;
    margin-bottom: 0;
    font-weight: 600;
  }
  p{
    font-size: 0.9rem;
    font-family: $secondary-font;
    color: $text-7-color;
    font-weight: 600;
  }

  .teacher-name{
    color: $text-5-color;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: $secondary-font;
  }

  .price-tag{
    font-size: 0.7rem;
    font-family: $secondary-font;
    color: $text-secondary-color;
    font-weight: 600;
    background-color: grey;
    padding: 5px 15px;
    border-radius: 15px;
    &.free{
      background-color: $yellow-color;
    }
    &.not-free{
      background-color: $color-tertiary;
    }
  }



  .tag-icons{
    color: $text-6-color;
    font-size: 0.8rem;
    font-family: $secondary-font;
    font-weight: 600;
    i{
      margin-right: 3px;
    }
  }
</style>