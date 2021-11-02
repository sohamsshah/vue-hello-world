<template>
  <div class="backdrop"  v-show="showModal || showModalTwo">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <button @click='handleClose'>Close me</button>
      <div v-show='showModal'>
        <slot name="modalOne"></slot>
      </div>
      <div v-show='showModalTwo'>
        <slot name="modalTwo"></slot>
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme', 'showModal', 'showModalTwo'],
  methods: {
    closeModal(){
      console.log('here 2')
      this.$emit('close')
      },
    closeModalTwo(){
      console.log('here')
      this.$emit('closeTwo')
      },
    handleClose(){
      console.log('called')
      if(this.showModal){
        this.closeModal()
        }else{
          this.closeModalTwo()
        }
      }
}}
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  /* sale styles */
  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
</style>