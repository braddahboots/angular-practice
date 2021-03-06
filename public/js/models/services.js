angular.module('myApp')
  .service('BookService', [function() {

    var self = this;

    this.books = [
      {
        title : 'Talion the Revenant',
        author : 'Michael A. Stackpole'
      },
      {
        title : 'All my friends are dead',
        author : 'Avery Monsen & Jory John'
      },
      {
        title : 'Unbreakable Lightness of being',
        author : 'Milan Kunder'
      },
      {
        title : 'Eloquent Javascript',
        author : 'Marijin Haverbeke'
      },
      {
        title : 'A New Earth',
        author : 'Eckhart Tolle'
      },
      {
        title : 'Tuesdays with Morrie',
        author : 'Mitch Album'
      },
      {
        title : 'Outliers',
        author : 'Malcolm Gladwell'
      },
      {
        title : 'B is for Beer',
        author : 'Tom Robbins'
      }
    ];

    this.getBook = function(id) {

    };

    this.addBook = function(book) {
      self.books.push({
        title: book.title,
        author: book.author
      });
    };


  }])
  .service('MagazineService', MagazineService)
  .service('VideoService', ['$http', VideoService]);



  function myClass(args1, args2) {
    this.myProp = 1;
  }

  function MagazineService() {
    this.getMagazine = function(id) {

    };
    this.totalMagazines = 20;
  }

  function VideoService($http) {
    this.getVideos = function() {

    };
  }