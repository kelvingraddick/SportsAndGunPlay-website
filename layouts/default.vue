<template>
  <div>

    <!-- Header -->
    <div class="relative bg-gray-800">
      <div class="relative pt-4 pb-4">
        <nav class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div class="flex items-center flex-1">
            <div class="w-full md:w-auto">
              <a href="#" aria-label="Home">
                <img class="h-14 w-auto sm:h-14" src="/iwagergames-logo-wide-white.png" alt="Logo">
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true" @click.stop="isNavigationDrawerOpen = !isNavigationDrawerOpen">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <NuxtLink to="/" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Home</NuxtLink>
              <a href="#" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">About</a>
              <NuxtLink to="/games/" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Games</NuxtLink>
              <a href="#" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Contact</a>
            </div>
          </div>
          <div class="hidden md:flex">
            <NuxtLink to="/signin" v-if="!user" href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:shadow-outline-gray focus:border-yellow-300 active:bg-yellow-300 transition duration-150 ease-in-out">
              Sign in
            </NuxtLink>
            <button v-else id="user-button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-haspopup="true" @click.stop="isUserMenuOpen = !isUserMenuOpen">
              <span class="sr-only">Open user menu</span>
              <img class="h-12 w-12 rounded-full" :src="((user && user.imageUrl) || '/placeholder-user.png')" alt="">
            </button>
            <div v-show="isUserMenuOpen" class="origin-top-right absolute z-50 right-0 top-14 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-button">
              <NuxtLink :to="('/user/' + (user && user._id))" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your profile</NuxtLink>
              <!--<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>-->
              <a @click.stop="onSignOutButtonClick" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </nav>
        <div class="fixed z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-show="isNavigationDrawerOpen">
          <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-14 w-auto" src="/iwagergames-logo-wide-black.png" alt="">
                </div>
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu" @click.stop="isNavigationDrawerOpen = !isNavigationDrawerOpen">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="space-y-1 px-2 pt-2 pb-3">
                <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</NuxtLink>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">About</a>
                <NuxtLink to="/games/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Games</NuxtLink>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact</a>
                <div v-show="user">
                  <NuxtLink :to="('/user/' + (user && user._id))" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your profile</NuxtLink>
                  <!--<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>-->
                  <a @click.stop="onSignOutButtonClick" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </div>
              </div>
              <div>
                <NuxtLink to="/signin" v-if="!user" href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
                  Sign in
                </NuxtLink>
                <button v-else id="user-button" class="px-5 py-3 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-12 w-12 rounded-full" :src="((user && user.imageUrl) || '/placeholder-user.png')" alt="">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dynamic Page -->
    <Nuxt />

    <!-- Footer -->
    <footer class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
          <div class="px-5 py-2">
            <NuxtLink to="/" href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Home
            </NuxtLink>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
          <div class="px-5 py-2">
            <NuxtLink to="/games/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Games
            </NuxtLink>
          </div>
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-center text-base leading-6 text-gray-400">
          &copy; 2020 iWagerGames. All rights reserved.
        </p>
        <p class="text-base leading-6 text-gray-600">
          iWagerGames is not endorsed by, directly affiliated with, maintained or sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two Interactive, Microsoft, Xbox, Sony, Playstation or Epic Games. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Authorize from '@/helpers/authorize.js';

  export default {
    data () {
      return {
        isNavigationDrawerOpen: false,
        isUserMenuOpen: false
      }
    },
    computed: {
      user: function() {
        return this.$store.state.user;
      }
    },
    watch: {
      $route () {
        this.isNavigationDrawerOpen = false;
        this.isUserMenuOpen = false;
      }
    },
    mounted: function() {
      Authorize.trySignIn(this.$store);
    },
    methods: {
      async onSignOutButtonClick() {
        this.isUserMenuOpen = false;
        await Authorize.signOut(this.$store, this.$router);
      }
    }
  }
</script>

<style>
html {
  font-family:
    Roboto,
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
