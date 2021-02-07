<template>
  <div class="mx-auto max-w-screen-xl mb-10">
    <main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="-1">
      <div>
        <img class="h-96 w-full object-cover lg:h-96" :src="game.bannerImageUrl || '/placeholder-banner.png'" alt="">
      </div>
      <div class="py-8 xl:py-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div>
              <div>
                <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                  <div>
                    <h1 class="text-4xl font-bold text-gray-900">{{ game.name }}</h1>
                    <template v-for="(platformId, index) in game.platforms">
                      <template v-if="index > 0"> | </template>
                      <span class="mt-2 text-sm text-gray-500" :key="platformId">
                        {{ getPlatformName(platformId) }}
                      </span>
                    </template>
                  </div>
                  <div class="mt-4 flex space-x-3 md:mt-0">
                    <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
                      <!-- Heroicon name: solid/pencil -->
                      <svg class="-ml-1 mr-2 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>Start matchmaking (coming soon)</span>
                    </button>
                  </div>
                </div>
                <aside class="mt-8 xl:hidden">
                  <h2 class="sr-only">Details</h2>
                  <div class="space-y-5">
                    <div class="flex items-center space-x-2">
                      <!-- Heroicon name: solid/lock-open -->
                      <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                      </svg>
                      <span class="text-green-700 text-sm font-medium">Matches available</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <!-- Heroicon name: solid/chat-alt -->
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">60 matches</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <!-- Heroicon name: solid/calendar -->
                      <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                    </div>
                  </div>
                  <div class="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                    <div>
                      <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                      <ul class="mt-3 space-y-3">
                        <li class="flex justify-start">
                          <a href="#" class="flex items-center space-x-3">
                            <div class="flex-shrink-0">
                              <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
                            </div>
                            <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                      <ul class="mt-2 leading-8">
                        <li class="inline">
                          <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                            <div class="absolute flex-shrink-0 flex items-center justify-center">
                              <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                            </div>
                            <div class="ml-3.5 text-sm font-medium text-gray-900">Sports</div>
                          </a>
                        </li>
                        <li class="inline">
                          <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                            <div class="absolute flex-shrink-0 flex items-center justify-center">
                              <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span>
                            </div>
                            <div class="ml-3.5 text-sm font-medium text-gray-900">Game</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
                <div class="py-3 xl:pt-6 xl:pb-0">
                  <h2 class="sr-only">Description</h2>
                  <div class="prose max-w-none">
                    <p>
                      {{ game.description }}
                    </p>
                    <div class="pb-4">
                      <h4 id="activity-title" class="text-lg font-medium text-gray-900">Modes</h4>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" v-for="mode in game.modes" :key="mode._id">
                        <div class="flex-1 min-w-0">
                          <a href="#" class="focus:outline-none">
                            <div class="text-sm font-medium text-gray-900">
                              {{ mode.name }}
                            </div>
                            <div class="text-sm text-gray-500 truncate">
                              {{ mode.description }}
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="hidden xl:block xl:pl-8">
            <h2 class="sr-only">Details</h2>
            <div class="space-y-5">
              <div class="flex items-center space-x-2">
                <!-- Heroicon name: solid/lock-open -->
                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
                <span class="text-green-700 text-sm font-medium">Matches available</span>
              </div>
              <div class="flex items-center space-x-2">
                <!-- Heroicon name: solid/chat-alt -->
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 text-sm font-medium">60 matches</span>
              </div>
              <div class="flex items-center space-x-2">
                <!-- Heroicon name: solid/calendar -->
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-900 text-sm font-medium">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Platforms from '@/constants/platforms.js';

  export default {
    components: {
		},
    data: function() {
      return {
        game: undefined
      }
    },
    computed: {
      logoImageUrl: function() {
        return (this.user && this.user.logoImageUrl) || '/placeholder-user.png';
      },
      bannerImageUrl: function() {
        return (this.user && this.user.bannerImageUrl) || '/placeholder-banner.png';
      }
    },
		async asyncData({ params }) {
			return fetch('https://api.iwagergames.com/game/' + params.id, { method: 'GET' })
				.then((response) => { 
					if (response.status == 200) {
						return response.json()
						.then((responseJson) => {
							if (responseJson.isSuccess) {
								return { game: responseJson.game };
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

<style lang="scss" scoped>

</style>
