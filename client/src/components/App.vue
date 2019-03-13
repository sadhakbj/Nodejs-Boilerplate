<template>
  <div>
    <navbar></navbar>
    <div v-if="loading">Loading...</div>
    <div v-if="!loading && !error" class="alert alert-info">Welcome to Bijaya</div>
    <div v-if="!loading && error" class="text-center alert alert-warning">Something went wrong.</div>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "./layout/Navbar.vue";
import { mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      loading: true,
      error: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["initialLoad"])
  },
  async mounted() {
    try {
      // await this.initialLoad();
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = true;
    }
  }
};
</script>

<style>
</style>
