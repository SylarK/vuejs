<template>
    <div class="section">
        <article class="media">
            <figure class="media-left">
                <img class="image is-64x64" :src="submission.submissionImage">
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a :href=submission.url class="has-text-info">{{ submission.title }}</a>
                            <span class="tag is-small">#4</span>
                        </strong>
                        <br>
                        {{ submission.description }}
                        <br>
                        <small class="is-size-7">
                            Submitted by:
                            <img class="image is-24x24" :src="submission.avatar" >
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span class="icon is-small" @click="upvote(submission.id)">
                    <i class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{ submission.votes }}</strong>
                </span>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props:[
        'submission'
    ],
    methods:{
        upvote(){
            const sub = this.submission.find((submission) => submission.id === submissionId)
            sub.votes++;
        }
        
    }
}
</script>

<style>

</style>