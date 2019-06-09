<template>
  <body>
        <form style="border:1px solid #ccc;margin:auto 60px">
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to login.</p>
    <hr>

    <label for="email"><b>Email</b></label><br>
    <input type="text" placeholder="Enter Email" name="email" required v-model="email">

    <label for="psw"><b>Password</b></label><br>
    <input type="password" placeholder="Enter Password" name="psw" required v-model="password">

      <button type="" class="signupbtn" @click="loginUser">Login</button>
  </div>
</form>
    </body>
</template>

<script>
import UserService from '../services/UserService'
export default {
  name: 'LoginUser',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginUser () {
      this.$router.push({name: 'Home'})
      await UserService.loginUser({
        email: this.email,
        password: this.password
      })
      
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
}

* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 95%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

label {
    text-align: left;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color:  rgb(51, 175, 184);
  color: white;
  padding: 14px 20px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 5px;
}

button:hover {
  opacity:1;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  width: 100%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}

h1 {
  font-weight: 600;
}
</style>
