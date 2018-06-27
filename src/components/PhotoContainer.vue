<template>
  <div class="photo-container">
    <div class="photo">
      <span>200x200</span>
    </div>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <div class="photo-btn-container" v-if="hasSignin">
      <button @click="handleShowClick">Show</button>
      <button @click="handleEditClick">Edit</button>
      <button>Destory</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: 'Lorem Ipsum',
        description: 'Here is description of photo, if too long, make some reduce...',
          hasSignin: true,
          // hasSignin: false, 可以調整並查看效果
      }
    },
    methods: {
      handleShowClick: function() {
        const id = '1'
        this.$router.push('/photo/' + id)
      },
      handleEditClick: function() {
        const id = '1'
        this.$router.push('/photo/edit/' + id)
      }
    }
  }
</script>

<style scoped>
  .photo-container {
    width: 200px;
    height: auto;
  }

  .photo {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo span {
    font-size: 24px;
    color: #c0c0c0;
  }

  h3 {
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 15px;
    text-align: center;
    height: 50px;
    overflow: hidden;
  }

  .photo-btn-container {
    width: 160px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .photo-btn-container button {
    height: 24px;
    width: 100%;
    font-size: 15px;
    border: none;
    background-color: transparent;
  }
  .photo-btn-container button:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
  .photo-btn-container button:nth-child(1) {
    border-right: 1px solid #c0c0c0;
  }
  .photo-btn-container button:nth-child(2) {
    border-right: 1px solid #c0c0c0;
  }
</style>