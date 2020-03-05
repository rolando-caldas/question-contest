<template>
  <div>

    <md-tabs>
      <md-tab id="tab-home" md-label="New" exact>
        Home Tab
      </md-tab>

      <md-tab id="tab-pages" md-label="Pages">
        New
        <md-field>
          <label>Título</label>
          <md-input v-model="title" minlength="15" maxlength="30" required></md-input>
        </md-field>

        <md-field>
          <label>Autor</label>
          <md-input v-model="author" maxlength="30"  required></md-input>
        </md-field>

        <md-field>
          <label>Descripción</label>
          <md-textarea v-model="description" md-autogrow md-counter="200"></md-textarea>
        </md-field>
      </md-tab>

    </md-tabs>


  </div>
</template>

<script>
  export default {
    name: "Edit",
    data: () => ({
      title: null,
      description: null,
      author: null,
    })
  }
</script>

<style scoped>

</style>
