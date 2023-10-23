
<script>
import { store } from '../data/store';
import FooterNav from './partials/FooterNav.vue';
import FooterLinks from './partials/FooterLinks.vue';

export default {
  name: 'Footer',

  components:{
    FooterNav,
    FooterLinks,
  },

  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <footer>
    <FooterNav/>
    <FooterLinks/>

  </footer>

</template>


<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;

  footer{
    background-color: $darkest-background;
    padding: 80px 0 35px 0;
  }
</style>