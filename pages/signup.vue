<template>
    <div class="w-screen signup-form flex justify-center items-center h-screen overflow-hidden bg-blue-900">
      <div class="card w-full md:w-2/5 bg-white rounded shadow-md overflow-hidden p-8">
       <div class="w-full flex flex-row justify-between p-2 ">
           <h2 class="text-2xl font-semibold text-gray-800">Signup</h2>
           <div class="close-btn cursor-pointer hover:bg-gray-200 rounded-full p-2 absolute top-4 right-4" @click="closeForm">
            X
           </div>

       </div>
       
        <form @submit.prevent="register" class="w-full">
          <div class="form-group mt-4">
            <label for="username" class="text-gray-700 font-medium">Username</label>
            <input v-model="username" type="text" id="username" name="username" class="w-full rounded-2xl border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          </div>
          <div class="form-group mt-4">
            <label for="email" class="text-gray-700 font-medium">Email</label>
            <input v-model="Email" type="email" id="email" name="email" class="w-full rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          </div>
          <div class="form-group mt-4">
            <label for="password" class="text-gray-700 font-medium">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="w-full rounded border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          </div>
          <div class="form-group mt-8 w-full flex flex-row justify-center">
            <button type="submit" class="btn bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700">Signup</button>
          </div>
        </form>
        <div v-if="alert" class="w-full mt-4 alert alert-warning">
          <p class="text-gray-700">{{alertMessage}}</p>
        </div>
      
      </div>
    </div>
  </template>
  <script>
 import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      Email: '',
      password: '',
      alert: false,
      alertMessage: '',
    };
  },
  methods: {
   async register () { 
      try {
        const response = await $fetch("/api/authsignup", {
          method: 'POST',
          body: JSON.stringify({
            username: this.username,
            Email: this.Email,
            password: this.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
          const data = await response;
          console.log('Signup response:', data);

          // Handle successful registration (e.g., show success message, redirect)
          this.alertMessage = 'Signup successful. Redirecting to Login';
          this.$router.push('/login');
        } else if (response.status === 400) {
          this.alert = true;
          this.alertMessage = 'Username or email already exists. Login to your account';
        } else {
          this.alert = true;
          this.alertMessage = 'Error in registering, try after some time';
        }
      } catch (error) {
        console.error('Signup error:', error);
        // Handle errors (e.g., display a generic error message)
      }

      setTimeout(() => {
        this.alert = false;
      }, 2000)
    },

    closeForm() {
      this.$router.push('/');
    },
  }
}
</script>