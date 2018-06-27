<template>
  <div class="create">
    <div class="photo-container">
      <Photo />
    </div>
    <div class="main-container">
      <PhotoInputComponent />
    </div>
  </div>
</template>

<script>
  import Photo from '@/components/Photo'
  import PhotoInputComponent from '@/components/PhotoInputComponent'
  export default {
    components: {
      Photo: Photo,
      PhotoInputComponent: PhotoInputComponent,
    }
  }
</script>

<style scoped>
  .create {
    display: flex;
    justify-content: center;
  }

  .photo-container {
    padding-top: 100px;
    margin-right: 50px;
  }

  .main-container {
    padding-top: 100px;
  }
</style>