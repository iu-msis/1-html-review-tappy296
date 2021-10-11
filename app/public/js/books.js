   
const book = {
    data() {
      return {
        "book": [],
        }
    },
    computed: {
        
    },
    methods: {
        fetchBookData() {
            fetch('api/book/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.book = parsedJson;
                console.log("C");
            })
            .catch( err => {
                console.error(err)
            })

            console.log("B");
        }
    },
    created() {
        this.fetchBookData();
    }
  }
  
Vue.createApp(Offer).mount('#bookApp');