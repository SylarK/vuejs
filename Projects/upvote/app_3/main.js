const submissionComponent = {
  template: `
  <div style="display: flex; width: 100%">
    <figure class="media-left">
    <img class="image is-64x64"
      v-bind:src="submission.submissionImage">
    </figure>
  <div class="media-content">
  <div class="content">
    <p>
    <strong>
    <a v-bind:href="submission.url" class="has-text-info">
    {{ submission.title }}
  </a>
  <span class="tag is-small">#{{ submission.id }}</span>
  </strong>
  <br>
  {{ submission.description }}
  <br>
  <small class="is-size-7">
    Submitted by:
    <img class="image is-24x24"
    v-bind:src="submission.avatar">
  </small>
  </p>
  </div>
  </div>
  <div class="media-right">
    <span class="icon is-small" v-on:click="upvote(submission.id)">
    <i class="fa fa-chevron-up"></i>
    <strong class="has-text-info">{{ submission.votes }}</strong>
  </span>
  </div>
  </div>
  `,
};

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
