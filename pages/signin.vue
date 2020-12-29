<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-gray-900 hover:underline">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <div class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input v-model="username" id="username" name="username" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="emailAddress" id="email-address" name="email-address" type="email" autocomplete="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="..or email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-gray-900 hover:underline">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button @click.stop="onButtonClick" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-700 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>

        <div v-for="errorMessage in this.errorMessages" :key="errorMessage" class="">
          ⚠️ {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: function() {
      return {
        isProcessing: false,
        username: null,
        emailAddress: null,
        password: null,
        errorMessages: []
      }
    },
    methods: {
      async onButtonClick() {
        this.validate();
        if (this.errorMessages.length == 0) {
          this.isProcessing = true;
          var response = await this.signIn();
          if (response) {
            if (response.isSuccess) {
              this.$store.commit('setToken', response.token);
              this.$store.commit('setUser', response.user);
              localStorage.setItem('TOKEN', response.token);
              this.$router.push({ path: '/user/' + response.user._id });
            } else {
              window.alert(response.errorMessage);
              this.isProcessing = false;
            }
          } else {
            var errorMessage = "There was an error signing in." + " Please update entries and try again";
            window.alert(errorMessage);
            this.isProcessing = false;
          }
        }
        return false;
      },
      validate() {
        this.errorMessages = [];

        var username = this.username;
        var emailAddress = this.emailAddress;
        if ((!username || username == '') && (!emailAddress || emailAddress == '')) {
          this.errorMessages.push('You must enter username or email address.');
        }

        var password = this.password;
        if (!password  || password  == '' || password.length < 8 || password.length > 100) {
          this.errorMessages.push('The password must be between 8 and 100 characters.');
        }
      },
      async signIn() {
        var body = {
          username: this.username,
          emailAddress: this.emailAddress,
          password: this.password
        };
        return fetch('https://api.iwagergames.com/user/authenticate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
        .then((response) => { 
          if (response.status == 200) {
            return response.json()
            .then((responseJson) => {
              return responseJson;
            })
          } else {
            return undefined;
          }
        })
        .catch((error) => {
          console.error(error);
          return undefined;
        });
      }
    }
  }
</script>

<style>

</style>
