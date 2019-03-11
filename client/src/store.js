import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      email: "",
      username: ""
    }
  },
  mutations: {
    CURRENT_USER_FETCHED(state, user) {
      state.user.id = user.id;
      state.user.email = user.email;
      state.user.username = user.username;
    }
  },
  actions: {
    async initialLoad(context) {
      if (localStorage.expressAppJWT) {
        Vue.axios.defaults.headers.common.Authorization = `Bearer ${
          localStorage.expressAppJWT
        }`;
        const response = await Vue.axios.get("/api/auth/current-user");
        context.commit("CURRENT_USER_FETCHED", response.data.user);
      }
    }
  }
});
