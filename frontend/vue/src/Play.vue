<template>
  <div>
    <div class="md-headline">{{contest._title}}</div>
    <md-divider></md-divider>

    <md-steppers md-vertical>
      <md-step v-for="(question, questionIndex) in contest._questions" :id="'question' + questionIndex">
        <md-subheader class="md-primary">{{question._question}}</md-subheader>
        <div>
          <md-radio v-for="(option, index) in question._options" v-model="radio[questionIndex]" :value="index"> {{ option }}</md-radio>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Play",
    data: function() {
      return {contest: null, radio:[]}
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
