const newApp = Vue.createApp({
  // template: '<h2>I Am A Template</h2>'
  data() {
    return{
      title: 'The Final Empire',
      author: 'Jaze Babel',
      age: 34,
      showBooks: true,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title){
      this.title = title,
      this.author = 'Daniel Franklin'
      this.age = 27
    },
    toggleUp(){
      this.showBooks = !this.showBooks
    },
    handleEvents(e, power){
      console.log(e, e.type);
      if (power) {
        console.log(power)
      }
    },
    handleMouseMove(e){
      this.x = e.offsetX 
      this.y = e.offsetY
    }
  }
})

newApp.mount('#app')