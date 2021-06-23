<template>
  <div id="app">
    <h2 class="title has-text-centered dividing-header">Upvote!</h2>
    <ul>
      <li v-for="submission in submissions" :key="submission.id" >
        <my-card :submission="submission"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '../components/card/Card.vue'

export default {
  components:{
    'my-card' : Card
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      submissions : [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: 16,
      avatar: '../../src/assets/avatars/daniel.jpg',
      submissionImage: '../../src/assets/submissions/image-yellow.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: 11,
      avatar: '../../src/assets/avatars/kristy.png',
      submissionImage: '../../src/assets/submissions/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We have your measurements and shipping address.',
      url: '#',
      votes: 17,
      avatar: '../../src/assets/avatars/veronika.jpg',
      submissionImage: '../../src/assets/submissions/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: 9,
      avatar: '../../src/assets/avatars/molly.png',
      submissionImage: '../../src/assets/submissions/image-aqua.png',
    }
  ]
    }
  },
  computed: {
    sortedSubmissions(){
      return this.submissions.sort((a,b) => {
        return b.votes - a.votes;
      })
    }
  },
  created(){
    this.submissions = this.sortedSubmissions(this.submissions);
  }
}
</script>

<style>

</style>
