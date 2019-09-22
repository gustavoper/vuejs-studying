new Vue({
    el: "#exercise",
    data: {
        name: "Gustavo Pereira",
        age: 36
     
    },
    methods: {
        multiplyAge() {
          return this.age *3;
      }, 
      randomize()
      {
          return Math.random();
      },
      getImage()
      {
          return "https://media.giphy.com/media/eYilisUwipOEM/giphy.gif";
      }

    }
  });
  
  