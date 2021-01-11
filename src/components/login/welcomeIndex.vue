<template>
  <div>
      <img src="../../assets/img/background.png" height="595 px" />
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/userLogin")
    },

    register() {
      this.$router.push("/register")
    }
  }
};
</script>

<style></style>
