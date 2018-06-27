<template>
  <div class="sign-component">
    <h1>Please {{ content }}</h1>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
    >
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    >
    <div class="checkbox-container">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        v-model:value="hasRememberMe"
      >
      <span>Remember me</span>
    </div>
    <button>{{ content }}</button>
  </div>
</template>

<script>
  export default {
    props: ['type'],
    data: function() {
      return {
        hasRememberMe: false,
      }
    },
    computed: {
      content: function() {
        if (this.type === 'signin') {
          return 'Sign in'
        } else {
          return 'Sign up'
        }
      }
    }
  }
</script>

<style scoped>
  .sign-component {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sign-component h1 {
    width: 100%;
  }

  .input-container {
    width: 100%;
    border: 1px solid #c0c0c0;
    border-radius: 6px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    /* text-align: center; */
  }

  #email {
    border: 1px solid #c0c0c0;
    border-radius: 6px 6px 0 0;
  }
  #email:focus  {
    outline: none;
  }  

  #password {
    border: 1px solid #c0c0c0;
    border-radius: 0 0 6px 6px;
  }
  #password:focus  {
    outline: none;
  }  

  .checkbox-container {
    display: flex;
    align-items: center;
    margin: 15px auto 15px 0;
  }

  #remember {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }

  button {
    width: 100%;
    height: 40px;
    background-color: rgb(54, 107, 158);
    border-radius: 6px;
    border: none;
    color: #fff;
    font-size: 18px;
  }


</style>