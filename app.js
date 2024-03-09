Vue.createApp({
  data() {
    return {
      title: 'Project Vue',
      image: ['./img/image1.jpeg', './img/image2.jpeg', './img/image3.jpeg'],
      imageItem: './img/image1.jpeg',
      title: 'Image',
      IntervalId: 0,
      Interval: 0,
      getInterval: 1
    }
  },
  methods: {
    changeImage() {
      console.log(this.image[0])
    },
    stopInterval() {
      clearInterval(this.IntervalId)
    },
    switchImageRight() {
      if ( this.Interval >= this.image.length ) {
        this.Interval = 0
      }
      this.Interval += 1
      if ( this.Interval >= this.image.length ) {
        this.Interval = 0
      }
      this.imageItem = this.image[this.Interval]
      this.getInterval = this.Interval + 1
    },
    switchImageLeft() {
      if ( this.Interval === -1 ) {
        this.Interval = 2
      }
      this.Interval -= 1
      if ( this.Interval === -1 ) {
        this.Interval = 2
      }
      this.imageItem = this.image[this.Interval]
      this.getInterval = this.Interval + 1
    }
  },
  computed: {
    intervalImage() {
      let i = 0
      this.IntervalId = setInterval(() => {
        if ( i === this.image.length ) {
          i = 0
        }
        this.Interval = i
        this.imageItem = this.image[i]
        i += 1
        this.getInterval = i
      }, 3000)
    },
  }
}).mount('#app')