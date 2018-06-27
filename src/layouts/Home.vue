<template>
  <div class="home">
    <div class="photo-container-wrapper" v-for="photo in photos">
      <PhotoContainer />
    </div>
  </div>
</template>

<script>
  import PhotoContainer from '@/components/PhotoContainer'
  export default {
    data: function() {
      return {
        photos: [0,1,2,3,4,5,6,7],
      }
    },
    components: {
      PhotoContainer: PhotoContainer,
    }
  }
</script>

<style scoped>
  .home {
    max-width: 1440px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
  }

  .photo-container-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-bottom: 60px;
  }

  @media (max-width: 993px ) {
    .photo-container-wrapper {
      width: 33.333%
    }
  }

  @media (max-width: 769px ) {
    .photo-container-wrapper {
      width: 50%
    }
  }

  @media (max-width: 577px ) {
    .photo-container-wrapper {
      width: 100%
    }
  }
</style>