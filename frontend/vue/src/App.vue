<template>
  <div id="app">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">{{msg}}</span>
        </div>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>
        <app-menu v-on:clickLink="menuVisibleChange" />
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import AppMenu from "./AppMenu";

  export default {
    name: 'app',
    components: {
      AppMenu
    },
    data() {
      return {
        menuVisible: false,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      menuVisibleChange: function() {
        this.menuVisible = !this.menuVisible;
      }
    }
  }
</script>

<style lang="scss">
  .md-app-content {
    height: auto;
  }
</style>
