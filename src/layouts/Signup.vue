<template>
  <div class="signup">
    <SignComponent :type="'signup'" />
  </div>
</template>

<script>
  import SignComponent from '@/components/SignComponent'
  export default {
    components: {
      SignComponent: SignComponent,
    }
  }
</script>

<style scoped>
  .signup {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
</style>