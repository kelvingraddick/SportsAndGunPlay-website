<template>
  <div>

    <!-- Hero section -->
    <div class="relative bg-gray-900 overflow-hidden">
      <main class="mt-8 sm:mt-16 md:mt-20 lg:mt-24 sm:mb-16 md:mb-20 lg:mb-24">
        <div class="mx-auto max-w-screen-xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h2 class="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
                  Raise the stakes!
                  <br class="hidden md:inline">
                  <span class="text-red-500">Play for keeps!</span>
                </h2>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Compete and wager for real money playing <b>videos games</b> againts others across the glode on the <span class="text-yellow-200">iWagerGames</span> platform
                </p>
                <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">On your favorite platforms:</p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div class="flex justify-center px-1">
                      <img class="platform-logos h-10 sm:h-11" src="/playstation.png" alt="Playstation">
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="platform-logos h-9 sm:h-10" src="/xbox.png" alt="Xbox">
                    </div>
                    <div class="flex justify-center px-1">
                      <img class="platform-logos h-8 sm:h-9" src="/windows.png" alt="Windows">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-lg leading-5 font-medium text-gray-700">
                    Sign up for iWagerGames
                  </p>

                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="name" class="sr-only">
                          Full name
                        </label>
                        <div class="rounded-md shadow-sm">
                          <input id="name" placeholder="Full name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                      </div>

                      <div>
                        <label for="mobile-or-email" class="sr-only">
                          Mobile number or email
                        </label>
                        <div class="rounded-md shadow-sm">
                          <input id="mobile-or-email" placeholder="Mobile number or email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                      </div>

                      <div>
                        <label for="password" class="sr-only">
                          Password
                        </label>
                        <div class="rounded-md shadow-sm">
                          <input id="password" type="password" placeholder="Password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </div>
                      </div>

                      <div>
                        <span class="block w-full rounded-md shadow-sm">
                          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300 transition duration-150 ease-in-out">
                            Create your account (coming soon)
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                  <p class="text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- How does it work? -->
    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 lg:max-w-screen-xl">
        <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>

        <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="relative">
            <h4 class="text-3xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-9">
              How does it work?
            </h4>
            <p class="mt-3 text-xl leading-7 text-gray-500">
              Competing for money on iWagerGames is easy. Follow the steps below:
            </p>

            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-200 text-gray-900">
                      <!-- Heroicon name: globe-alt -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">Choose a game / Choose a platform</h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Choose from our group of select games and platforms. We are continuously working to add more games every day!
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-200 text-gray-900">
                      <!-- Heroicon name: scale -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">Find a match</h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Let our matchmaking system pair you with a competitor of similar history and skill.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-200 text-gray-900">
                      <!-- Heroicon name: lightning-bolt -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">Compete and win</h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Start your game and compete. Afterwards report the result here to recieve your reward when you win.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0">
            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img class="relative mx-auto rounded-lg" width="490" src="/esports-1.png" alt="">
          </div>
        </div>

      </div>
    </div>

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
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="/madden-21.png" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    Playstation 4 | Xbox One | PC
                  </a>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Madden 21
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Madden NFL 21 is an American football video game based on the National Football League, developed by EA Tiburon and published by Electronic Arts.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300 transition duration-150 ease-in-out">
                  Join the game room
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="/nba-2k21.png" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    Playstation 4 | Xbox One | PC
                  </a>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    NBA 2K21
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    NBA 2K21 is a basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300 transition duration-150 ease-in-out">
                  Join the game room
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="/call-of-duty-modern-warfare.jpg" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    Playstation 4 | Xbox One | PC
                  </a>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Call of Duty: Modern Warfare
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300 transition duration-150 ease-in-out">
                  Join the game room
                </button>
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
export default {}
</script>

<style>
  .platform-logos {
    filter: grayscale(100%);
  }
</style>
