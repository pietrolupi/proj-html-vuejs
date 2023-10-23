
<script>
import { store } from '../../data/store';
export default {
  name: 'TopAnchor',

  data(){
    return{
      store,
    }
  },

  methods: {
    scrollToAnchor() {
      const anchorElement = document.getElementById("mia-ancora");
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
}
</script>

<template>
  <a href="#" @click="scrollToAnchor">

    <div class="blue-square ms-auto d-flex align-items-center flex-column">
      <p><i class="fa-solid fa-chevron-up"></i></p>
      <p>TOP</p>
    </div>

  </a>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .blue-square{
  height: 50px;
  width: 50px;
  background-color: $color-tertiary;
  position: sticky;
  top: 200px; 
  z-index: 999;
  color: $text-secondary-color;
  font-family: $secondary-font;
  border: 1px solid $border-color;

  p{
    margin: 0;
  }
  i{
    margin-bottom: -20px;
  }
      
  }
</style>