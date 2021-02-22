new Vue ({
  // ELEMENT
  el: '#app',

  //DATA
  data: {
    topMenu: [
      'Home',
      'Pages',
      'Courses',
      'Features',
      'Blog',
      'Shop',
    ],

    partners: [
      {name: 'Stylus', img: '01'},
      {name: 'Tree', img: '02'},
      {name: 'Brook', img: '03'},
      {name: 'Pencil', img: '04'},
      {name: 'Its alive', img: '05'},
      {name: 'Sixbase', img: '06'},
      {name: 'Nowhere famous', img: '07'},
    ],

    courses: [
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
    ]
  }
})
