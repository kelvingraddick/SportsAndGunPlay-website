<template>
  <div>

    <!-- Games section -->
    <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Join a game room
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Join one of our game rooms to get started and join the action!
          </p>
        </div>
        <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div v-for="game in games" :key="game._id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="game.bannerImageUrl" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <template v-for="(platformId, index) in game.platforms">
                    <template v-if="index > 0"> | </template>
                    <a href="#" class="hover:underline" :key="platformId">
                      {{ getPlatformName(platformId) }}
                    </a>
                  </template>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {{ game.name }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ game.description }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <NuxtLink :to="'/game/' + game._id + '/'" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300 transition duration-150 ease-in-out">
                  Join the game room
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gray-900">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
          <span class="block">Ready to start playing?</span>
          <span class="block">Get started here.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-gray-300"><span class="text-red-500">Sign up</span> or <span class="text-yellow-200">learn more</span> information below.</p>
        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Sign up
            </a>
          </div>
          <div class="ml-3 inline-flex">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:shadow-outline focus:border-yellow-300 transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Platforms from '@/constants/platforms.js';

  export default {
    components: {
    },
    data: function() {
      return {
        games: null,
        isProcessing: false
      }
    },
    async asyncData({ params }) {
      return fetch('https://api.iwagergames.com/games/', { method: 'GET' })
        .then((response) => { 
          if (response.status == 200) {
            return response.json()
            .then((responseJson) => {
              if (responseJson.isSuccess) {
                return { games: responseJson.games };
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
      getPlatformName(id) {
        return Platforms[id];
      }
    }
  }
</script>

<style>
  .platform-logos {
    filter: grayscale(100%);
  }
</style>
