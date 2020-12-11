<template>
  <div>
      <p>欢迎来到您的用户主页！</p>
      <p>用户：{{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.sessionStorage.getItem("name"),
    };
  },
}
</script>

<style>

</style>