<template>
    <div class="gallery">
        <div class="gallery-img">
            <a :href="link" target="_blank"><img :src=url width="600" max-height="400"></a>
        </div>
        <div class="desc">
            <p class="title-desc">Photographer</p> 
            <p>{{ photographer }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'url',
        'photographer',
        'link'
    ]
}
</script>

<style scoped>
    .gallery{
        margin: 5px;
        border: 1px solid #ccc;
        float: left;
        width: 180px;
        height: 300px;
        border-radius: 5px;
    }

    .gallery:hover{
        border: 1px solid #777;
    }

    .gallery-img{
        width: 180px;
        height: 200px;
        
    }

    .gallery img{
        width: 100%;
        height: 100%;
    }

    .desc{
        padding: 15px;
        height: 50px;
        
    }

    .title-desc{
        font-weight: bold;
    }
</style>