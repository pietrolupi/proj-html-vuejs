
<script>

import { store } from '../data/store';


export default {

  name: 'Jumbotron',

  data(){
    return{
      store,

    }
  }

}
</script>

<template>
 
    <div class="jumbotron">
      <nav class="d-flex justify-content-between ">

        <img src="../assets/img/logo-light.png" alt="">

        <ul class="d-flex ">
          <li v-for="(voice,index) in store.jumboMenu"
          :key="index"
          v-html="voice"
          ></li>
        </ul>
      </nav>

      <div class="jumbo-main">
        <h1>Contemporary Ideas</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas culpa animi doloribus consequatur possimus autem eum, voluptatum iure est similique facilis, voluptates </p>
        <button>REGISTER NOW</button>
      </div>
    </div>
 
 
</template>


<style lang="scss" scoped>

@use '../scss/partials/vars' as *;
  .jumbotron{
    background-image: url('../assets/img/h5-slide-3-background.jpg');
    height: 820px;
    width: 100vw;
    color: $text-secondary-color;
    position: relative;
    nav{
      align-items: center;
      padding: 45px;

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

    .jumbo-main{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      h1{
        font-size: 4.5rem;
        font-weight: 600;
        margin-bottom: 30px;
      }
      p{
        line-height: 30px;
      }
      button{
        background-color: $color-tertiary;
        color: $text-secondary-color;
        border: none;
        padding: 19px 41px ;
      }
    }

  }
</style>