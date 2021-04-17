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
                    <button type="button" @click.stop="isMatchmakingPanelOpen = !isMatchmakingPanelOpen" class="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
                      <!-- Heroicon name: solid/pencil -->
                      <svg class="-ml-1 mr-2 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>Start matchmaking</span>
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
                </aside>
                <div class="py-3 xl:pt-6 xl:pb-0">
                  <h2 class="sr-only">Description</h2>
                  <div class="prose max-w-none">
                    <p>
                      {{ game.description }}
                    </p>
                    <div class="pb-4">
                      <h4 id="activity-title" class="text-lg font-medium text-gray-900">Game Modes</h4>
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
                    <div class="pb-4">
                      <h4 id="activity-title" class="text-lg font-medium text-gray-900">Rule Options</h4>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" v-for="rule in game.rules" :key="rule._id">
                        <div class="flex-1 min-w-0">
                          <a href="#" class="focus:outline-none">
                            <div class="text-sm font-medium text-gray-900">
                              {{ rule.name }}
                            </div>
                            <div class="text-sm text-gray-500 truncate">
                              {{ rule.description }}
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

    <section v-show="isMatchmakingPanelOpen" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" aria-hidden="true"></div>

        <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
          <div class="w-screen max-w-md">
            <form class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div class="flex-1 h-0 overflow-y-auto">
                <div class="py-6 px-4 bg-gray-800 sm:px-6">
                  <div class="flex items-center justify-between">
                    <h2 class="text-lg font-medium text-white" id="slide-over-title">
                      Start Matchmaking
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button type="button" @click.stop="isMatchmakingPanelOpen = false" class="text-gray-100 rounded-md text-gray-700 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-1">
                    <p class="text-sm text-gray-300">
                      Get started by choosing the game mode and rule options below:
                    </p>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                  <div class="px-4 divide-y divide-gray-200 sm:px-6">
                    <div class="space-y-6 pt-6 pb-5">
                      <div class="">
                        <h4 id="activity-title" class="text-lg font-medium text-gray-900">Select game mode:</h4>
                      </div>
                      <fieldset>
                        <div class="bg-white rounded-md -space-y-px">
                          <label class="border-gray-200 rounded-tl-md rounded-md relative border p-4 flex cursor-pointer" v-for="mode in game.modes" :key="mode._id">
                            <input type="radio" name="gameMode" :value="mode._id" class="h-4 w-4 mt-0.5 cursor-pointer text-indigo-600 border-gray-300 focus:ring-indigo-500" :aria-labelledby="'game-mode-label-' + mode._id" :aria-describedby="'game-mode-description-' + mode._id">
                            <div class="ml-3 flex flex-col">
                              <span :id="'game-mode-label-' + mode._id" class="text-gray-900 block text-sm font-medium">
                                {{ mode.name }}
                              </span>
                              <span :id="'game-mode-description-' + mode._id" class="text-gray-500 block text-sm">
                                {{ mode.description }}
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div class="">
                        <h4 id="activity-title" class="text-lg font-medium text-gray-900">Select rule options:</h4>
                      </div>
                      <div class="flex items-center justify-between" v-for="rule in game.rules" :key="rule._id">
                        <span class="flex-grow flex flex-col" :id="'rule-label-' + rule._id">
                          <span class="text-sm font-medium text-gray-900">{{ rule.name }}</span>
                          <span class="text-sm text-gray-500">{{ rule.description }}</span>
                        </span>
                        <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                        <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" :aria-labelledby="'rule-label-' + rule._id">
                          <span class="sr-only">{{ rule.name }}</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                <button type="button" @click.stop="isMatchmakingPanelOpen = false" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Cancel
                </button>
                <button type="submit" @click.stop="isMatchmakingPanelOpen = false" class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
                  Start (coming soon!)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Platforms from '@/constants/platforms.js';

  export default {
    components: {
		},
    data: function() {
      return {
        game: undefined,
        isMatchmakingPanelOpen: false
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
