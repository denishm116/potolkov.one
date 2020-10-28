<template>
  <section class="questions">
    <div class='container'>
      <h2 class="projects__title title">Часто задаваемые вопросы</h2>
      <v-expansion-panels
        :popout="true"
        :multiple="true"
        :hover="true">
        <v-expansion-panel
          v-for="(question,i) in questions"
          :key="i"
        >
          <v-expansion-panel-header>{{question.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{question.description}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        questions: [
          {
            title: 'Что сначала, делать потолки или клеить обои?',
            description: 'Сначала делают потолки, чтобы не запылить и не испачкать обои.'
          },
          {
            title: 'Имеют ли натяжные потолки запах?',
            description: 'Сами потолки запаха не имеют, но после монтажа может остаться запах газолина от тепловой пушки, который полностью исчезает после проветривания.'
          },
          {
            title: 'Какие у вас гарантии?',
            description: 'ы даем 10 лет гарантии на полотна и 2 года на светильники, комплектующие и все виды работ!'
          },
          {
            title: 'Что сначала, делать потолки или клеить обои?',
            description: 'Сначала делают потолки, чтобы не запылить и не испачкать обои.'
          },
          {
            title: 'На сколько см опустится натяжной потолок?',
            description: 'В среднем новый потолк опустится на 4 см от самой нижней точки старого потолка. Но, учитывая что он будет идеально ровный, визуально потолок будет выше.'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1370px;
    margin: 0 auto;
    width: 100%;
  }
</style>
