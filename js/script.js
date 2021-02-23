new Vue ({
  // ELEMENT
  el: '#app',

  //DATA
  data: {
    activeSlide : 0,
    topMenu: [
      'Home',
      'Pages',
      'Courses',
      'Features',
      'Blog',
      'Shop',
    ],

    jumbotron : {
      image: 'about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0'
    },

    partners: [
      {name: 'Stylus', img: '01'},
      {name: 'Tree', img: '02'},
      {name: 'Brook', img: '03'},
      {name: 'Pencil', img: '04'},
      {name: 'Its alive', img: '05'},
      {name: 'Sixbase', img: '06'},
      {name: 'Nowhere famous', img: '07'},
    ],

    courses : [
      {
        name: 'Learning to Write as a Professional Author',
        price: 40,
        img: 'course-02-480x298',
        data: {
          lessons: 20,
          students: 50
        }
      },
      {
        name: 'Customer-centric Info-Tech Strategies',
        price: false,
        img: 'stock-full-hd-03-480x298',
        data: {
          lessons: 24,
          students: 785
        }
      },
      {
        name: 'Open Programming Courses for Everyone: Python',
        price: 19,
        img: 'stock-full-hd-04-480x298',
        data: {
          lessons: 17,
          students: 62
        }
      },
      {
        name: 'Academic Listening and Note-taking',
        price: 26,
        img: 'stock-full-hd-06-480x298',
        data: {
          lessons: 14,
          students: 67
        }
      },
      {
        name: 'Master jQuery in a Short Period of Time',
        price: 39,
        img: 'course-featured-image-01-480x298',
        data: {
          lessons: 6,
          students: 51
        }
      },
      {
        name: 'Introduction to Javascript for Beginners',
        price: 59,
        img: 'stock-full-hd-05-480x298',
        data: {
          lessons: 14,
          students: 16
        }
      }
    ],

    programs: [
      {
        name: 'Customize Preferences',
        description: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
        img: 'home-2-image-box-01',
        link: 'Start Here'
      },
      {
        name: 'Cloud Storage',
        description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
        img: 'about-us-02-image-box-02',
        link: 'Get Free Quote'
      },
      {
        name: 'Multimedia channels',
        description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
        img: 'home-2-image-box-03',
        link: 'Start Now'
      }
    ],

    videospace: {
      img: 'home-2-popup-video-poster'
    },

    reviews: [
      {
        title: 'The MaxCoach team works really hard to ensure high quality',
        description: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.',
        user: {
          img: '01',
          name: 'Luvic Dubble',
          profession: 'Private Tutor'
        }
      },
      {
        title: 'High level of efficiency and scientific teaching methods',
        description: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        user: {
          img: '02',
          name: 'Mina Hollace',
          profession: 'Freelancer'
        }
      },
      {
        title: 'It is a choice of quality for people with special needs',
        description: 'I am a very strict person so I require everything to be organized and neat. Then, I will be able to make things right and shine. MaxCoach guys just got me.',
        user: {
          img: '03',
          name: 'Florence Themes',
          profession: 'Multimedia admin'
        }
      },
    ],

    stats : [
      {
        title: 'Successfully trained',
        value: 1790,
        obj: 'Enrolled learners'
      },
      {
        title: 'Proudly Received',
        value: 19,
        obj: 'Countrywide awards'
      },
      {
        title: 'Firmly Established',
        value: 24,
        obj: 'Local branches'
      },
      {
        title: 'Getting Featured on',
        value: 1090,
        obj: 'Blog posts'
      }
    ],

    blogs: {
      nav: [
        'Become a Better Blogger: Content Planning',
        'Promoting Your Online Business on Pinterest',
        'Gamification and Game-Based Learning',
        'Designing an Online Course from Expert’s Perspective',
        'Why Online Courses Are the Future of Education'
      ],
      list: [
        {
          type: 'Business',
          title: 'Ten Benefits Of Rentals That May Change Your Perspective',
          img: 'home-personal-finance-blog-03-480x352.jpg',
          calendar: {
            date: 'Dec 28, 2020',
            views: '883'
          }
        },
        {
          type: 'Artist',
          title: 'Brush strokes energize Trees in Paintings',
          img: 'artist-blog-03-480x352.jpeg',
          calendar: {
            date: 'May 15, 2020',
            views: '668'
          }
        }
      ]
    },

    socials: [
      {
        url: 'https://www.facebook.com',
        ico: 'facebook'
      },
      {
        url: 'https://www.twitter.com/',
        ico: 'twitter'
      },
      {
        url: 'https://www.instagram.com/',
        ico: 'instagram'
      },
      {
        url: 'https://www.linkedin.com/',
        ico: 'linkedin'
      }
    ],

    footerMenu: {
      explore: [
        'Start here',
        'Success story',
        'Blog',
        'Courses',
        'About us',
        'Contact us'
      ],
      info: [
        'Membership',
        'Purchase guide',
        'Privacy policy',
        'Terms of services'
      ]
    }
  },

  // METHODS
  methods: {
    slider: function(index){
      this.activeSlide = index;
    },

    viewSlide: function(index){
      return {'active' : index === this.activeSlide}
    }
  }
})
