<template>
  <div>{{contest}}</div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Play",
    data: function() {
      return {contest: null}
    },
    created: function () {
      console.log(this.$route.params.id);
      console.log('http://localhost:8082/contest/' + this.$route.params.id);
      axios.get('http://localhost:8082/contest/' + this.$route.params.id).then(response => (this.contest = response.data.data)).catch(error => (this.contest = error));
    }
  }
</script>

<style scoped>

</style>
