<template>
  <div>
    <md-list v-for="contest in contests" v-bind:key="contest._id">
      <md-list-item :to="{name: 'play', params: {id:contest._id}}">
        <md-icon>play_circle_filled</md-icon>
        <div class="md-list-item-text">
          <span>{{contest._title}}</span>
          <span>{{contest._author}}</span>
          <span>{{contest._description}}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "contest",
    data: () => {
      return {contests: null}
    },
    created: function () {
      axios.get('http://localhost:8082/contest').then(response => (this.contests = response.data.data)).catch(error => (this.contests = error));
    }
  }
</script>

<style scoped>

</style>
