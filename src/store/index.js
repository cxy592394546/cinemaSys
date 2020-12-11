import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
	},
	mutotions: {
		set_Token (state,token) {
			state.token =token;
			localStorage.setItem("token",token.token);
		},
		del_Token (state) {
			state.token = '';
			localStorage.removeItem("token");
		}
	}
})

export default store;