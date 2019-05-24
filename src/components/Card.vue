<template>
    <div class = "w-1/2 rounded-lg h-auto text-4xl text-center mx-auto my-6 p-12 "
        v-bind:class = "{'bg-green-500':displayAnswer && !buildMode, 'bg-red-400':!displayAnswer && !buildMode, 'bg-blue-400':buildMode}" @click="onPress()" >
        <div v-if="buildMode">

            <input class = " w-1/2 input-center rounded-lg text-3xl -mx-20 text-center" v-model="question">
            <br>
            <input class = " w-1/4 mr-4" v-model="optionA">
            <input class = "w-1/4 ml-4" v-model="optionB">
            <br>
            <input class = "w-1/4 mr-4" v-model="optionC">
            <input class = "w-1/4 ml-4" v-model="optionD">

            <sub-btn  question="question" optionA="optionA" optionB="optionB" optionC="optionC" optionD="optionD" />
            
        </div>
        <div v-if="!buildMode">
            {{displayAnswer? Answer: Question}}
        </div>
        
    </div>
    

</template>

<script>
import SubBtn from "../components/SubBtn.vue"

export default {
    name: 'Card',
    components: {SubBtn},

    props: [ "Question","Answer","buildMode"],
    methods: {
        onPress() {
            if(!this.buildMode)
            {
               this.displayAnswer = !this.displayAnswer
            console.log(this.displayAnswer) 
            }
            
            
        }
    },
    data() {
        return {
            displayAnswer: false,
            question : " ",
            optionA : " ",
            optionB : " ",
            optionC : " ",
            optionD : " ",
        }
    }

}
</script>

