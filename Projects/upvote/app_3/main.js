const upvoteApp = {
  data() {
    return {
      submissions: submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
        //Why I decide use to find.
        //The up-voting logic involves using the native JavaScript find()³⁶ method to locate the submission
        //object with the id equal to the submissionId parameter. The votes attribute of that submission is
        //then incremented by one.
      );
      submission.votes++;
    },
  },
};
Vue.createApp(upvoteApp).mount('#app');
