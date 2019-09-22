new Vue({
    el: "#app",
    data: {
        counter: 0,
        x:0,
        y:0
    },
    methods: {
        increase: function(countBy, event) {
            this.counter+=countBy;
        },
        updateCoords: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
        }
    }
  });
  
  