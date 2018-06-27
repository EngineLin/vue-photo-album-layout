<template>
  <div class="show">
    <div class="photo-container">
      <Photo />
    </div>
    <div class="main-container">
      <h3 class="main-title">{{title}}</h3>
      <p class="main-date">{{date}}</p>
      <p class="main-description">{{description}}</p>
    </div>
  </div>
</template>

<script>
  import Photo from '@/components/Photo'
  import moment from 'moment'
  export default {
    data: function() {
      return {
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever .',
        date: moment().format('DD.MM.YYYY HH:MM'),
      }
    },
    components: {
      Photo: Photo,
    }
  }
</script>

<style scoped>
  .show {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .photo-container {
    padding-top: 100px;
    padding-right: 50px;
  }

  .main-container {
    width: 500px;
    padding-top: 100px;
    margin-bottom: auto;
  }

  .main-title {
    font-size: 43px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .main-date {
    font-size: 24px;
  }

  .main-description {
    font-size: 20px;
  }
</style>