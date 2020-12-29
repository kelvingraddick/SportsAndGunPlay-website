export const state = () => ({
	token: undefined,
	user: undefined
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
	},
	setUser(state, user) {
    state.user = user;
	},
}