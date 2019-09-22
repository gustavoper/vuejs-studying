new Vue({
  el: "#app",
  data: {
  	title: "hello, world!", 
    now: Date.now(),
    htmlExample: "<h2>hey</h2>"
   
  },
  methods: {
  	nowDate() {
    	return Date.now();
    }
  }
});



