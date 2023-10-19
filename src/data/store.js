
import {reactive} from 'vue';

export const store = reactive({
  
  jumboMenu: [
    'HOME',
    'COURSES',
    'INSTRUCTORS',
    'EVENTS',
    'PAGES',
    'ELEMENTS',
    '<i class="fa-solid fa-magnifying-glass"></i>',
    '<i class="fa-solid fa-file"></i>',
    '<i class="fa-solid fa-bars"></i>'
  ],

  trustedCards: [
    {
      name: 'Languages',
      img: 'h5-custom-icon-1.png'
    },

    {
      name: 'Software',
      img: 'h5-custom-icon-2.png'
    },

    {
      name: 'Business',
      img: 'h5-custom-icon-3.png'
    },

    {
      name: 'Chemistry',
      img: 'h5-custom-icon-4.png'
    },

    {
      name: 'Science',
      img: 'h5-custom-icon-5.png'
    },

    {
      name: 'DIY&Craft',
      img: 'h5-custom-icon-6.png'
    }
  ]
})