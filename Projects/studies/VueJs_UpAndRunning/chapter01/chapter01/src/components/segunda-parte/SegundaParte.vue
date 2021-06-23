<template>
    <div>
        <h2>Part II</h2>

        <small>Methods</small>
        <input type="text" v-model="status" placeholder="Type the status">
        <p>Current status: {{ statusFromId(status) }}</p>
        
        <br>

        <small>This</small>
        <p>Original Array: {{ arrayOfNumbers }}</p>
        <p>Positive numbers in the array: {{ getPositiveNumbers() }}</p>
        
        <br>

        <small>Computed Properties</small>
        <p>Sum of arrays: {{ numberTotal }}</p>

        <br>

        <small>Watchers</small>
        <p>Watchers are easy to use: just specify the name of the property to watch.</p>
        <p> {{ count }} </p> 
        <a href="#" @click="sumOneInCount"> +1 </a>
        <br>
        <p>
            Input Value: 
            <input type="text" v-model="inputValue" placeholder="Type something...">
        </p>

        <br>

        <small>Filters</small>
        <p>Product one cost: {{ productOneCost | formatCost('$')}}</p>
        <p>Product two cost: {{ productTwoCost | formatCost}}</p>
        <p>Product three cost: {{ productThreeCost | formatCost}}</p>

        <br>
        <small>Transitions CSS</small>
        <button @click="divVisible = !divVisible">Toggle visibility</button>
        <transition name="fade">
            <div v-if="divVisible">This content is sometimes hidden</div>
        </transition>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            status: 0,
            arrayOfNumbers: [-5,6,3,0,-10,-20,-3,4,4,6],
            count: 0,
            inputValue: '',
            productOneCost: 998,
            productTwoCost: 1520,
            productThreeCost: 3695,
            divVisible: true
        }
    },

    methods:{
        statusFromId(id){
            const status = ({
                0:'Asleep',
                1:'Eating',
                2:'Learning Vue'
            })[id];
            return status || 'Unknown status: ' + id;
        },
        getPositiveNumbers(){
            return this.arrayOfNumbers.filter((number) => number >= 0)
        },
        sumOneInCount(){
            this.count++;
        }

    },
    
    computed: {
        numberTotal(){
            return this.arrayOfNumbers.reduce((sum, val) => sum + val)
        }
    },

    watch: {
        count(){
            //this.count has been changed
            console.log('The value of count changed to ', this.count)
        },
        inputValue(val, oldVal){
            console.log(val, oldVal);
        }
    },

    filters: {
        formatCost(value, symbol = 'R$'){
            return symbol + (value / 100).toFixed(2);
        }
    }
}
</script>

<style scoped>
input{
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.144);
    border-radius: 5px;    
}

a{
    text-decoration: none;
     border: 1px solid rgba(0, 0, 0, 0.144);
     padding: 6px 15px;
     font-weight: bold;
}

button{
    margin: 0 0 20px 0;
    padding: 6px 15px;
    cursor: pointer;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>