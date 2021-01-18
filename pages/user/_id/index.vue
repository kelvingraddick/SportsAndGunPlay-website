<template>
  <div class="mx-auto max-w-screen-xl mb-10">
    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last" tabindex="0">
      <article>
        <!-- Profile header -->
        <div>
          <div>
            <img class="h-32 w-full object-cover lg:h-48 rounded-b-lg" :src="bannerImageUrl" alt="">
          </div>
          <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div class="flex">
                <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="userImageUrl" alt="">
              </div>
              <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                  <h1 class="text-2xl font-bold text-gray-900 truncate">
                    {{ user.username }}
                  </h1>
                </div>
                <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    <!-- Heroicon name: mail -->
                    <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Message</span>
                  </button>
                  <button v-show="isLoggedInUser" @click.stop="onSignOutButtonClick" class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
              <h1 class="text-2xl font-bold text-gray-900 truncate">
                {{ user.username }}
              </h1>
            </div>
          </div>
        </div>

        <!-- Description list -->
        <div class="rounded-lg border border-gray-300 shadow-sm mt-6 mx-auto p-4 sm:p-6 lg:p-8">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Full Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ user.firstName + ' ' + user.lastName }}
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Email Address
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ user.emailAddress }}
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Matches Completed
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                0
              </dd>
            </div>

            <div class="sm:col-span-2">
              <dt class="text-sm font-medium text-gray-500">
                Bio
              </dt>
              <dd class="mt-1 max-w-prose text-sm text-gray-900">
                <p>
                  {{ user.bio }}
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Game list -->
        <div class="mt-8 mx-auto pb-12">
          <h2 class="text-sm font-medium text-gray-500">Games</h2>
          <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-md" src="/madden-21.png" alt="">
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    Madden 21
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Xbox Series X
                  </p>
                </a>
              </div>
            </div>

            <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-md" src="/nba-2k21.png" alt="">
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    NBA 2K21
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Xbox Series X
                  </p>
                </a>
              </div>
            </div>

            <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-md" src="/call-of-duty-modern-warfare.jpg" alt="">
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">
                    Call of Duty: Modern Warfare
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Xbox Series X
                  </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
  import Authorize from '@/helpers/authorize.js';

  export default {
    components: {
		},
    data: function() {
      return {
        user: undefined
      }
    },
    computed: {
      isLoggedInUser: function() {
        var storedUser = this.$store.state.user;
        return storedUser && this.user && storedUser._id == this.user._id;
      },
      userImageUrl: function() {
        var storedUser = this.$store.state.user;
        return (storedUser && storedUser.imageUrl) || '/placeholder-user.png';
      },
      bannerImageUrl: function() {
        var storedUser = this.$store.state.user;
        return (storedUser && storedUser.bannerImageUrl) || '/placeholder-banner.png';
      }
    },
		async asyncData({ params }) {
			return fetch('https://api.iwagergames.com/user/' + params.id, { method: 'GET' })
				.then((response) => { 
					if (response.status == 200) {
						return response.json()
						.then((responseJson) => {
							if (responseJson.isSuccess) {
								return { user: responseJson.user };
							}
						})
					}
					return undefined;
				})
				.catch((error) => {
					console.error(error);
					return undefined;
				});
		},
    methods: {
      async onSignOutButtonClick() {
        Authorize.signOut(this.$store, this.$router);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
