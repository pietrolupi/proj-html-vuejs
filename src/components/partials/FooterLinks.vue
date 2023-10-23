

<script>
import { store } from '../../data/store';
export default {
  name: 'FooterLinks',

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div class="general-container">
    <div class="d-flex justify-content-between">
      <div>
        <p>Copyrights 2017 &copy;Mikado Themes</p>
      </div>


      <div class="d-flex justify-content-between social-links">
        <p>CALL +44 300 303 0266</p>
        <p>FOLLOW US</p>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
        
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    padding-top: 60px;
    color: $text-4-color-darker;
    font-family: $secondary-font;
    font-size: 0.8rem;

    .social-links{

      a{
        color: $text-4-color-darker;
      }

      a,p{
        margin-left: 15px;
       
      }

    }
  }
</style>