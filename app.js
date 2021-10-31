const app = Vue.createApp({
  data() {
    return {
      showBooks: false,
      books: [
        { title: "the elder coder", author: "Soham", age: 21, isGenZ: true },
        { title: "the coder", author: "Samyak", age: 18, isGenZ: true },
        { title: "the father", author: "Sunil", age: 50, isGenZ: false },
        { title: "the mother", author: "Bina", age: 47, isGenZ: false },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    updateAgeAndGenZ(title, value) {
      this.books.map((book) => {
        if (book.title === title) {
          book.age += value;
          book.isGenZ = book.age < 22;
        }
      });
    },
  },
});

app.mount("#app");
