
const book = {
    data() {
      return {
        books: [],
        selectedBook: null,
        bookForm: {}
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        selectBook(b) {
            if (b == this.selectedBook) {
                return;
            }
            this.selectedBook = b;
            this.books = [];
            this.fetchBookData(this.selectedBook);
        },
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (error) => {
                console.error(error);
            });
         },
        postBook(evt) {
            if (this.selectedBook === null){
              this.postNewBook(evt);
            } else{
              this.postEditBook(evt)
            }
          },
  
          postEditBook(evt) {
            this.bookForm.id = this.selectedbook.id;       
            
            console.log("Updating!", this.bookForm);
    
            fetch('api/book/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.handleResetEdit();
              });
          },
        postNewBook(evt) {
          console.log("Creating!", this.bookForm);
  
          fetch('api/book/create.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              // reset the form
              this.handleResetEdit();
            })
            .catch( err => {
              alert("Something went horribly wrong.");
            });
        },
        postDeleteBook(b) {  
          if ( !confirm("Are you sure you want to delete the book from " + b.Title + "?") ) {
              return;
          }  
          
          console.log("Delete!", b);
  
          fetch('api/book/delete.php', {
              method:'POST',
              body: JSON.stringify(b),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        handleEditBook(book) {
            this.selectedBook = book;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        handleResetEdit() {
            this.selectedBook = null;
            this.bookForm = {};
        }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
Vue.createApp(book).mount('#bookApp');