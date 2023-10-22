
<script>
import { store } from '../data/store';
import FooterNav from './partials/FooterNav.vue';

export default {
  name: 'Footer',

  components:{
    FooterNav,
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

  </footer>

</template>


<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;

  footer{
    background-color: $darkest-background;
    padding: 200px 0;
  }
</style>