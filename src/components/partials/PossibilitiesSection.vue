
<script>
import { store } from '../../data/store';
export default {
  name: 'Possibilities Section',

  data(){
    return{
      store,
      customIndex: 0,
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
  <div class="general-container">

    <div class="selection-list">
      <ul>
        <li v-for="(option,index) in store.possibilitiesSelectionList"
        :key="option.select"
        @click="customIndex = index, console.log(customIndex)"
        :class="{ 'light-on': index === customIndex }">
          <div class="blu-bar"
          :class="{'d-none' : index !== customIndex}"></div>
          <div class="ms-4">{{option.select}}</div>
        </li>
      </ul>
    </div>

    <div class="content-shown"
    v-for="(item,index) in store.possibilitiesSelectionList"
    :key="index"
    :class="{ 'd-none': index !== customIndex }">
      <h1>{{item.content.title}}</h1>
      <p>{{item.content.text}}</p>
      <ul>
        <li v-for="(voice,indexSecondary) in item.content.advantages"
        :key="indexSecondary"><i class="fa-solid fa-check"></i> {{voice}}</li>
        
      </ul>
      <img :src="getImagePath(item.content.icon)" alt="">
    </div>
  </div>

  <div class="greyline"></div>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

  .general-container{
    display: flex;
    padding-top: 150px;


    .selection-list{

      ul{

        li{
          display: flex;
          align-items: center;
          height: 75px;
          width: 275px;
          border: 1px solid $border-color;
          cursor: pointer;
          font-weight: 600;
          color: $text-7-color;
        }

        li.light-on{
          color: $color-tertiary;
        }

        
      }

      .blu-bar{
        height: 100%;
        width: 10px;
        background-color: $color-tertiary;
      }
    }

    .content-shown{
      padding: 20px 130px 0 50px;
      position: relative;


      h1{
        margin-bottom: 25px;
      }

      p,li{
        color: $text-6-color;
      }

      ul{
        padding: 0;
        padding-top: 50px;

        li{
          margin-bottom: 25px;
          i{
              color: $color-tertiary;
              margin-right: 7px;
            }
        }
      }

      img{
        position: absolute;
        top: 350px;
        right: 10px;
        width: 100px;
      }

    }
  }

  .greyline{
    height: 1px;
    width: 100%;
    background-color: $border-color;
    margin-top: 150px;
  }
</style>