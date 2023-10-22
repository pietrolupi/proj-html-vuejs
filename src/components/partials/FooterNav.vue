

<script>
import { store } from '../../data/store';
export default {
  name: 'FooterNav',

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  
  <div class="general-container">
    
    <div class="nav-container">
      <div class="nav-title">

        <img src="../../assets/img/logo-footer-dark.png" alt="">
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo. Eum, sint? Atque quibusdam voluptatum cumque voluptates sit facere pariatur adipisci iste culpa veritatis, assumenda ea! Omnis vitae itaque, aliquid blanditiis reiciendis consectetur magnam tenetur pariatur eligendi nesciunt saepe facilis at repellat aut quo? Tempore obcaecati atque sequi nihil voluptas!
    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Popular Courses</h1>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo. Eum, sint? Atque quibusdam voluptatum cumque voluptates sit facere pariatur adipisci iste culpa veritatis, assumenda ea! Omnis vitae itaque, aliquid blanditiis reiciendis consectetur magnam tenetur pariatur eligendi nesciunt saepe facilis at repellat aut quo? Tempore obcaecati atque sequi nihil voluptas!
    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Support</h1>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo. Eum, sint? Atque quibusdam voluptatum cumque voluptates sit facere pariatur adipisci iste culpa veritatis, assumenda ea! Omnis vitae itaque, aliquid blanditiis reiciendis consectetur magnam tenetur pariatur eligendi nesciunt saepe facilis at repellat aut quo? Tempore obcaecati atque sequi nihil voluptas!
    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Flexible Learning</h1>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo. Eum, sint? Atque quibusdam voluptatum cumque voluptates sit facere pariatur adipisci iste culpa veritatis, assumenda ea! Omnis vitae itaque, aliquid blanditiis reiciendis consectetur magnam tenetur pariatur eligendi nesciunt saepe facilis at repellat aut quo? Tempore obcaecati atque sequi nihil voluptas!
    </div>

  </div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    display: flex;
    .nav-container{
      width: 23.5%;
      color: white;
      border: 1px solid white;
      padding: 20px;

      &:last-child{
        width: 29.5%;
      }

      .nav-title{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
        img{
          filter: brightness(100);
          width: 150px;
        }
        h1{
          padding-top: 10px;
          font-size: 1.35rem;
          font-weight: 600;
        }
      }
    }
  }
</style>