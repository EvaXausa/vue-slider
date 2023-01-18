console.log("Vue ok", Vue);
const app = Vue.createApp({
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      pictures,
    };
  },
  computed: {
    lastPicturesIndex() {
      return this.pictures.lenght - 1;
    },
  },
  methods: {
    goToPrev() {
      if (this.currentIndex === 0) this.currentIndex = this.lastPicturesIndex;
      else this.currentIndex--;
    },
    goToNext() {
      if (this.currentIndex === this.lastPicturesIndex) this.currentIndex = 0;
      else this.currentIndex++;
    },
    goTothis(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    setInterval(this.goToNext, 2000);
  },
});
app.mount("#root");
