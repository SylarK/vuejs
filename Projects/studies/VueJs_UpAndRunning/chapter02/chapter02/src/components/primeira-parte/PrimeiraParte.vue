<template>
    <div>
        <h1>Part I</h1>

        <small>Templates Basic</small>
        <custom-button />
        <positive-numbers />
        <br>
        <input type="text" v-model="user">
        <p>Out of component: {{ user }}</p>
        <input-username v-model="user" />
    </div>    
</template>

<script>

const CustomButton = {
    template: '<button>Custom Button</button>'
};

const PositiveNumbers = {
    template: '<p>{{ positiveNumbers.length }} positive numbers</p>',
    data(){
        return{
            numbers: [-5,0,2,-1,1,0.5]
        };
    },
    computed:{
        positiveNumbers(){
            return this.numbers.filter((number) => number >= 0);
        }
    }
}

const inputUsername = {
    template: 'Typed: {{ user }}',
    props: {
        user
    }
}
export default {
    components:{
        'custom-button' : CustomButton,
        'positive-numbers' : PositiveNumbers,
        'input-username': inputUsername
    },
    data(){
        return{
            user: ''
        }
    }
    
}
</script>

<style scoped>

</style>