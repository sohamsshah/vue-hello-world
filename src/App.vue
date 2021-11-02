<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <!-- <Modal heading="Sign up for the Givaway!" text="Grab your ninja swag for half price!" /> -->
  <Modal theme="" :showModal='showModal' :showModalTwo='showModalTwo' @closeTwo='toggleModalTwo' @close='toggleModal' >
    
    <template v-slot:modalOne>
      <a href="">Take you to the moon</a>
      <h2>{{title}}</h2>
    <p>{{text}} </p>
    </template>
    <template v-slot:modalTwo>
    <p>{{text}} </p>
    </template>
  </Modal>
  <button @click='toggleModal'>Show Modal</button>
  <button @click='toggleModalTwo'>Show Modal Two</button>

</template>

<script>
import Modal from './components/Modal'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      heading: 'Sign up for the Givaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>