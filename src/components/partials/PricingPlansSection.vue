

<script>
import { store } from '../../data/store';
export default {
  name: 'PricingPlans',

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="pricing-plans">

    <div class="general-container">

<h1>Pricing Plans</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum. Lorem, ipsum dolor.</p>

<!-- LA TABELLA NON LA CICLO dato che è un elemento statico solo per mostrare i piani non cambierà la struttura -->
<div class="table-container">

  <table>
    <tr class="first-row">

      <td class="bg-white blue-bar">
        
        <div >
          <p>Save up to 40% by paying weekly</p>
        </div>
      </td>

      <td class="clear-blue blue-bar">
        
        <div class="flex-column">
        <img src="../../assets/img/h5-custom-icon-7.png" alt="">
        <p>Standard</p>
        <span>$12</span>
      </div>
    </td>

    <td class="clear-blue blue-bar darken">
        <div class="flex-column">
          <img src="../../assets/img/h5-custom-icon-8.png" alt="">
        <p>Professional</p>
        <span>$59</span>
      </div>
    </td>

    <td class="clear-blue blue-bar">
        <div class="flex-column">
          <img src="../../assets/img/h5-custom-icon-9.png" alt="">
        <p>Advanced</p>
        <span>$88</span>
      </div>
    </td>
    </tr>
    <tr>
      <td><div><span>Number of Courses</span></div></td>
      <td><div><span>2</span></div></td>
      <td><div><span>4</span></div></td>
      <td><div><span>6</span></div></td>
    </tr>
    <tr>
      <td><div><span>Time</span></div></td>
      <td><div><span>15 Days</span></div></td>
      <td><div><span>30 Days</span></div></td>
      <td><div><span>30 Days</span></div></td>
    </tr>

    <tr>
      <td><div><span>Web Design</span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td><div><span>Human-Centered Design</span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td><div><span>Basic Marketing</span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td><div><span>Python for Everybody</span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td><div><span>Android Developer</span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td><div><span>Business English</span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-xmark"></i></span></div></td>
      <td><div><span><i class="fa-solid fa-check"></i></span></div></td>
    </tr>

    <tr>
      <td class="transparent"></td>
      
      <td class="clear-blue "><div><button>GET IT NOW</button></div></td>
      <td class="clear-blue "><div><button class="active">GET IT NOW</button></div></td>
      <td class="clear-blue "><div><button>GET IT NOW</button></div></td>
      
    </tr>

  </table>

  <div class="shop-btns d-flex flex-column justify-content-center">
    <a class="active" href=""> <img src="../../assets/img/custom-red-circle.png" alt=""></a>
    <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
  </div>
</div>

</div>


  </div>
 
  <div class="greyline"></div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .pricing-plans{
    background-image: url('../../assets/img/background-pattern.jpg');
  }

  .general-container{
    padding: 100px 0 155px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>h1{
      font-size: 3rem;
      font-weight: 600;
    }
    &>p{
      color: $text-4-color-darker;
      font-family: $secondary-font;
      font-size: 1.15rem;
      padding: 15px 0 80px 0 ;
    }


    .table-container{
      position: relative;
      
  
      tr{
        
        &:not(:first-child){
    
          td:not(:first-child){
    
            color: $text-4-color;
            font-family: $secondary-font;
            font-size: 1.2rem;
            .fa-solid.fa-check{
              color: $color-tertiary;
            }
          }
          td{

            background-color: white;
            &.transparent{
              background-color: transparent;
            }
            &:first-child{
              div{
                justify-content: flex-start;
                padding-left: 20px;
                font-weight: 600;
                
                color: $text-4-color-darker;
              }
            }
          }
        }
    
        &.first-row{
          td{
            height: 260px;
            font-size: 1.5rem;
            font-weight: 600;
          
            &:first-child{
              
              div{
                padding: 80px 20px 0 20px;
              
              }
            }
          }
    
          .blue-bar{
            border-top: 4px solid $color-tertiary-lighter;
    
            &.darken{
              border-top: 4px solid $color-tertiary-darker ;
            }
          }
        }
        &:last-child{
          td:first-child{
            border: none;
          }
            }
        
    
        td{
          border: 1px solid $border-color;
          width: 237px;
          height: 60px ;
    
          div{
            display: flex;
            align-items: center;
            justify-content: center;
          }
    
          &.clear-blue{
              background-color: $color-4-light;
            }
          
        }
    
        &:last-child{
          td{
            height: 100px;
          }
    
          button{
            border: 2px solid $border-color;
            font-size: 1rem;
            font-weight: 600;
            color: $text-4-color-darker;
            padding: 10px 30px;
            background-color: white;
            cursor: default;
    
            &.active{
              background-color: $color-tertiary;
              color: white;
              border: 2px solid $color-tertiary;
            }
          }
        }
    
        img{
          margin-bottom: 20px ;
        }
        
      }

      .shop-btns{
        position: absolute;
        top: 30px;
        right: -35px;

        a{
          height: 40px;
          width: 40px;
          background-color: white;
          border: 1px solid $border-color;
          display: flex;
          justify-content: center;
          align-items: center;

          &.active{
            background-color: $red-custom-color;
          }
          
          i{
            color: $red-custom-color ;
          }

          img{
            width: 100%;
            filter: brightness(0) invert(1);
          }
        }
      }

    }
  }


  
  .greyline{
    height: 1px;
    width: 100%;
    background-color: $border-color;
  }

  
</style>