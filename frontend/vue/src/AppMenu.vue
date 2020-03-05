<template>
  <md-list>
    <md-list-item :to="{name: 'home'}" v-on:click="$emit('clickLink')">
      <md-icon>home</md-icon>
      <span class="md-list-item-text">All Contests</span>
    </md-list-item>
    <md-list-item :to="{name: 'new'}" v-on:click="$emit('clickLink')">
      <md-icon>create_new_folder</md-icon>
      <span class="md-list-item-text">Create Contest</span>
    </md-list-item>
    <md-list-item>
      <md-icon>open_in_new</md-icon>
      <span class="md-list-item-text">React Version</span>
    </md-list-item>
    <md-list-item>
      <md-icon>open_in_new</md-icon>
      <span class="md-list-item-text">Angular Version</span>
    </md-list-item>
  </md-list>
</template>

<script>
  export default {
    name: "AppMenu",
    props: ['visible']
  }
</script>

<style scoped>

</style>
