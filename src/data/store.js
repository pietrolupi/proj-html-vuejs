
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
  ],

  studentCitCards: [
    {
      name: 'Joan Collins',
      role: 'STUDENT',
      cit: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit ex quibusdam deserunt aut, quia voluptates reiciendis! Quis reprehenderit veritatis architecto pariatur rem dolore, fugit sed, hic dignissimos ullam non.',
      img: 'instructor-img-6-150x150.jpg'
    },

    {
      name: 'Giampiero Borsalino',
      role: 'INSTRUCTOR',
      cit: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit ex quibusdam deserunt aut, quia voluptates reiciendis! Quis reprehenderit veritatis architecto pariatur rem dolore, fugit sed, hic dignissimos ullam non.',
      img: 'instructor-img-9-150x150.jpg',
    },

    {
      name: 'Satoru Gojo',
      role: 'PROFESSOR',
      cit: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugit ex quibusdam deserunt aut, quia voluptates reiciendis! Quis reprehenderit veritatis architecto pariatur rem dolore, fugit sed, hic dignissimos ullam non.',
      img: 'instructor-img-8-150x150.jpg'
    },
  ]
})