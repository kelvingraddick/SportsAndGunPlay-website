var trySignIn = async function(store) {
  var token = localStorage.getItem('TOKEN');
  if (token) {
    store.commit('setToken', token);
    var response = await _signIn(token);
    if (response) {
      store.commit('setUser', response.user);
    }
  }
}

var signOut = async function(store, router) {
  localStorage.removeItem('TOKEN');
  store.commit('setToken', undefined);
  store.commit('setUser', undefined);
  router.push({ path: '/' });
}

var _signIn = async function(token) {
	return fetch('https://api.iwagergames.com/user/authorize', {
		method: 'POST',
		headers: { 'Authorization': 'Bearer ' + token }
	})
	.then((response) => { 
		if (response.status == 200) {
			return response.json()
			.then((responseJson) => {
				if (responseJson.isSuccess) {
					return responseJson;
				}
			})
		}
		return undefined;
	})
	.catch((error) => {
		console.error(error);
		return undefined;
	});
};

export default {
  trySignIn: trySignIn,
  signOut: signOut
}