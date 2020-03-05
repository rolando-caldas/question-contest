<template>
  <div>

    <md-steppers>
      <md-step id="first" md-label="Contest">
        <md-field>
          <label>Título</label>
          <md-input v-model="title" minlength="15" maxlength="30" required></md-input>
        </md-field>

        <md-field>
          <label>Autor</label>
          <md-input v-model="author" maxlength="30" required></md-input>
        </md-field>

        <md-field>
          <label>Descripción</label>
          <md-textarea v-model="description" md-autogrow md-counter="200"></md-textarea>
        </md-field>
      </md-step>
      <md-step id="second" md-label="Questions">
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
          <md-step v-for="(question, questionIndex) in questions" md-label="Question" :md-description="question.question" :md-done.sync="done[questionIndex]" :id="'question' + questionIndex">
            <md-field>
              <md-icon>help</md-icon>
              <label>Date</label>
              <md-input v-model="question.question"></md-input>
            </md-field>

            <md-field v-for="(option, index) in question.options">
              <md-input v-model="question.options[index]"></md-input>
            </md-field>

          </md-step>
        </md-steppers>
        <md-button class="md-icon-button md-raised md-primary" @click="addNew()">
          <md-icon>add</md-icon>
        </md-button>
      </md-step>
      <md-step id="third" md-label="Finish">
        <md-button class="md-icon-button md-raised md-primary" @click="send()" v-if="!creating">
          <md-icon>add</md-icon>
        </md-button>
        <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate" v-if="creating"></md-progress-spinner>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import axios from "axios";
  import * as uuid4 from 'uuid4';

  export default {
    name: "New",
    data: () => ({
      id: uuid4(),
      title: 'dfdf',
      description: null,
      author: null,
      questions: [{question: '', options: ['', '', '', ''], valid: ''}],
      done: [false],
      active: 'question0',
      creating: false
    }),
    methods: {
      addNew() {
        this.questions.push({question: '', options: ['', '', '', ''], valid: ''});

        for (const doneIndex in this.done) {
          this.done[doneIndex] = true;
        }

        this.done.push(false);
        this.active = 'question' + (this.done.length - 1);
      },
      send() {
        this.creating = true;
        axios.post('http://localhost:8082/contest'), {
          id: this.id,
          title: this.title,
          author: this.author,
          description: this.description,
          questions: this.questions
        }.then(response => (this.contests = response.data.data)).catch(error => (this.contests = error));
      }
    }
  }
</script>

<style scoped>

</style>
