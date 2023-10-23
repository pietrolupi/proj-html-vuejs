

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
      <p class="light-grey">{{store.footerNav[0].text}}</p>

      <span class="d-block mb-3 pt-4"><i class="fa-solid fa-phone"></i> {{store.footerNav[0].phone}}</span>
      <span class="d-block"><i class="fa-regular fa-clock"></i> {{store.footerNav[0].timeTable}}
      </span>
    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Popular Courses</h1>
      </div>
      
      <div class="pop-courses"
      v-for="item in store.footerNav[1].courses"
      :key="item">
        <h3 >{{item.title}}</h3>
        <p class="light-grey">{{item.professor}}</p>
      </div>

    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Support</h1>
      </div>
      <ul>
        <li 
        v-for="item in store.footerNav[2].menuVoices" 
        :key="item">

          <a class="light-grey" href="">{{item}}</a>
          
        </li>

      
      </ul>
    </div>

    <div class="nav-container">
      <div class="nav-title">

      <h1>Flexible Learning</h1>
      </div>
      <img src="../../assets/img/footer-img-1.png" alt="">
    </div>

  </div>
  <div class="grey-line"></div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    display: flex;
    border-bottom: $border-color;
    padding-bottom: 70px;
    border-bottom: 1px solid $border-color-darker;
    .nav-container{
      width: 23.5%;
      color: white;
      
      padding: 20px;

      &:last-child{
        width: 29.5%;
      }

      img{
        width: 100%;
      }

      .nav-title{
        display: flex;
        
        align-items: center;
        height: 90px;
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

      ul{
        margin: 0;
        padding: 0;
      }

      .light-grey{
        color: $text-4-color;
      }

      h3{
        color: $text-5-ligthter-color;
        font-size: 1rem;
      }

      p,span,li{
        font-family: $secondary-font;
      }

      li{
        padding-bottom: 12px;
        a{
          
          &:hover{
            color: lighten($color: $text-4-color, $amount: 30);
          }
        }
      }

      i{
        margin-right: 15px;
      }
    }
  }
</style>