<template>
  <div class="photo-input-component">
    <input 
      type="text" 
      id="title" 
      placeholder="Title"
    >
    <Datepicker
      wrapper-class="date-wrapper"
      input-class="date-input"
      format="dd.MM.yyyy"
      v-model:value="date"
    />
    <textarea 
      name="description" 
      id="description" 
      placeholder="description" 
      rows="7"
    />
    <div class="upload-container">
      <input type="file" name="upload-file-btn" id="upload-file-btn" @change="handleFileCnage">
    </div>
    <button class="submit-btn">Submit</button>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  
  export default {
    data: function() {
      return {
        date: new Date(),
        file: {},
      }
    },
    components: {
      Datepicker: Datepicker,
    },
    methods: {
      handleFileCnage(e) {
        this.file = e
      }
    }
  }
</script>

<style scoped>
  .photo-input-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100%;
  }

  #title {
    width: 100%;
    height: 40px;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  #description {
    width: 100%;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  .upload-container {
    width: 100%;
    margin-bottom: 20px;
  }

  /* .upload-btn {
    border: 1px solid #c0c0c0;
    background-color: #fff;
    border-radius: 6px;
    width: 108px;
    height: 30px;
    font-size: 16px;
    margin-right: 8px;
  }

  #upload-file-btn {
    display: none;
  } */

  /* .upload-text {
    font-size: 18px;
    letter-spacing: 2px;
  } */

  .submit-btn {
    border: 1px solid #c0c0c0;
    background-color: #fff;
    border-radius: 6px;
    width: 108px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    margin-right: auto;
  }
</style>

<style>
  .date-wrapper {
    width: 100%;
  }
  
  .date-input {
    width: 100%;
    height: 40px;
    font-size: 24px;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin-bottom: 20px;
  }
</style>
