
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
  ],

  possibilitiesSelectionList: [

    {
      select: 'What we do',

      content:{
        title: 'Learning Possibilities',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id soluta delectus facilis minus temporibus dolores eveniet et voluptates veniam, ullam eos quasi, quo illo unde iste! Eum, animi sunt?',

        advantages: [
          'We enrich lives through learning.',
          'Maximizing potential through individual attention.',
          'The trusted name for specialized training.',
          'People teach. People learn. This is where they connect.'
        ],

        icon: 'h12-tabs-icon-1.png'

      }

    },

    {
      select: 'Degree Programme',

      content:{
        title: 'Programming',
        text: ' Pabst before they sold out church-key, post-ironic readymade cardigan chambray try-hard echo park brooklyn. Bicycle rights crucifix ramps, locavore art party put a bird on it four dollar toast.',

        advantages: [
          'Shiver me timbers swing the lead quarter hearties.',
          'Marzipan sweet candy marzipan soufflé.',
        
          'Post-ironic readymade cardigan.'
        ],

        icon: 'h12-tabs-icon-2.png'

      }

    },

    {
      select: 'Career Achievements',

      content:{
        title: 'Get your career going',
        text: ' Bacon ipsum dolor amet kevin t-bone brisket chicken. Ham hock spare ribs shank picanha pancetta. Short ribs ham hock brisket rump. Short ribs ham hock sausage jowl fatback capicola, porchetta boudin.',

        advantages: [
          'Bicycle rights crucifix ramps.',
          'Ham hock spare ribs shank.',
          'Tart candy canes marzipan sugar plum.',
          'Broadside keelhaul six pounders.'
        ],

        icon: 'h12-tabs-icon-3.png'

      }

    },

    {
      select: 'Personal Management',

      content:{
        title: 'Organize your time ',
        text: ' Cupcake sugar plum muffin. Marzipan sweet candy marzipan soufflé. Tart candy canes marzipan sugar plum chocolate cake chocolate bar jelly-o. Jelly beans chocolate.',

        advantages: [
          'Lookout poop deck rum Barbary Coast.',
          'Cake chocolate bar jelly-o. Jelly beans chocolate.',
          'Ribs ham hock brisket rump.',
          'Bicycle rights crucifix ramps.'
        ],

        icon: 'h12-tabs-icon-4.png'

      }

    },

    {
      select: 'Steps To Success',

      content:{
        title: 'Tricks to succed',
        text: ' Shiver me timbers swing the lead quarter hearties hang the jib aft me broadside keelhaul six pounders. Lookout poop deck rum Barbary Coast me fire in the hole jury mast Brethren of the Coast. Crows nest ahoy case shot gunwalls grog bilged on her anchor me Jack Ketch.',

        advantages: [
          'We enrich lives through learning.',
          'Maximizing potential through individual attention.',
          'The trusted name for specialized training.',
          'People teach. People learn. This is where they connect.',
       
   

        ],

        icon: 'h12-tabs-icon-5.png'

      }

    },

    {
      select: 'Knowledge transfer',

      content:{
        title: 'Knowledge is Power',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id soluta delectus facilis minus temporibus dolores eveniet et voluptates veniam, ullam eos quasi, quo illo unde iste! Eum, animi sunt?',

        advantages: [
          'Utilizzato Hipster-Ipsum.',
          'Con menzioni di Bacon-Ipsum',
          'Qualche spunto di Cupcake-Ipsum!',
          'Per variare un po il testo.',
        ],

        icon: 'h12-tabs-icon-6.png'

      }

    },

  ]
})