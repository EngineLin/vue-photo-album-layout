<template>
  <div class="header">
    <h1 @click="handleTitleClick">{{ title }}</h1>
    <p 
      class="new-photo-btn btn" 
      @click="handleNewPhotoClick"
    >
      New Photo
    </p>
    <div 
      class="user-unsignin-container"
      v-if="!isSignin"
    >
      <p 
        class="signup-btn btn" 
        @click="handleSignUpClick"
      >
        Sign up
      </p>
      <p
        class="signin-btn btn" 
        @click="handleSignInClick"
      >
        Sign in
      </p>
    </div>
    <div class="user-signin-container" v-else>
      <p class="user-email">{{ userEmail }}</p>
      <p class="signin-btn btn">Log out</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Photo Album',
        isSignin: false,
        userEmail: 'alphcamp@mail.com',
      }
    },
    methods: {
      handleTitleClick: function() {
        this.$router.push('/')
      },
      handleNewPhotoClick: function() {
        this.$router.push('/photo/create')
      },
      handleSignUpClick: function() {
        this.$router.push('/user/signup')
      },
      handleSignInClick: function() {
        this.$router.push('/user/signin')
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    background-color: #e7e7e7;
    border-bottom: 2px solid #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header h1 {
    font-size: 26px;
    padding-left: 25px;
    margin: 0;
    color: #404040;
  }
  .header h1:hover {
    cursor: pointer;
    color: #000;
  }

  .user-email {
    font-size: 18px;
    margin-right: 30px;
  }

  .new-photo-btn {
    font-size: 18px;
    font-weight: 500;
    color: #5e5e5e;
    margin-left: 30px;
    margin-right: auto;
  }

  .user-unsignin-container {
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .user-signin-container p {
    font-size: 18px;
    font-weight: 500;
    color: #5e5e5e;
  }

  .user-signin-container {
    height: 100%;
    width: auto;
    margin-right: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .user-unsignin-container p {
    font-size: 18px;
    font-weight: 500;
    color: #5e5e5e;
  }

  .btn:hover {
    cursor: pointer;
    color: #000;
  }

  @media (max-width: 772px) {
    .header h1 {
      display: none;
    }
  }
</style>