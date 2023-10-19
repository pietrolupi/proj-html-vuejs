

<script>
import { store } from '../../data/store';
export default {
  name: 'EmpoweringSection',

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="general-container empowering d-flex">
    <div class="img-container w-50">
      <img src="../../assets/img/h5-img-2.jpg" alt="">
    </div>

    <div class="w-50 side-section">
      <h2>Empowering <br> Children to Reach <br> Their Potential.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus impedit temporibus quibusdam similique ab ea nulla, tenetur, accusantium eligendi, odio minima molestiae quod quasi quaerat eos. Fugit, doloribus nihil!</p>

      <div class="user-events d-flex">
        <div>
          <p>168</p>
          <p>User Stories</p>
        </div>

        <div>
          <p>347</p>
          <p>Events</p>
        </div>

      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container.empowering{

    color: $text-primary-color;

    margin-bottom: 52px;
    .img-container{
      img{
        max-width: 100%;
        padding-top: 50px;
      }
    }

    .side-section{
      padding: 0 50px;
      h2{
        font-weight: 600;
        font-size: 2.6rem;
        line-height: 1.3;
      }
      p{
        line-height: 1.6;
        color: $text-tertiary-color;
      }
    }

    .user-events{
      div:first-child{
        margin-right: 90px;
      }

      div{
        p{
          color: $color-tertiary;
          font-weight: 600;
          font-size: 1.2rem;
        }
        
        p:first-child{
          font-size: 3.2rem;
          
        }
      }
    }
  }
</style>