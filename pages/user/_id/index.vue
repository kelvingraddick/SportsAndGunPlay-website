<template>
  <div class="mx-auto max-w-screen-xl my-10">
    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
        <img class="object-cover shadow-lg rounded-lg" :src="userImageUrl" alt="">
      </div>
      <div class="sm:col-span-2">
        <div class="space-y-4">
          <div class="text-lg leading-6 font-medium space-y-1">
            <h3>{{ user && user.username }}</h3>
            <p v-if="user && user.firstName" class="text-gray-500">{{ user.firstName + ' ' + user.lastName }}</p>
          </div>
          <div class="text-lg">
            <p class="text-gray-500">{{ user && user.emailAddress }}</p>
          </div>
          <button @click.stop="onSignOutButtonClick" class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white text-gray-700 bg-yellow-200 hover:bg-yellow-100 focus:outline-none focus:border-yellow-300 focus:shadow-outline-red active:bg-yellow-300">
            Sign out
          </button>
        </div>
      </div>
    </div>
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
        return (storedUser && storedUser._id) == this.user?._id;
      },
      userImageUrl: function() {
        var storedUser = this.$store.state.user;
        return (storedUser && storedUser.imageUrl) || '/placeholder-user.png';
      }
    },
		async asyncData({ params }) {
			return fetch('http://api.iwagergames.com/user/' + params.id, { method: 'GET' })
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
