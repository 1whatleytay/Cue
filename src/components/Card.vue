<template>
    <div class = "w-1/2 bg-gray-800 rounded-lg h-auto text-white text-4xl text-center mx-auto my-6 p-12 "
        v-bind:class="{'bg-blue-400':buildMode,'bg-white':multChoice && !buildMode, }">
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
        <div v-if="!buildMode && multChoice">
            <div class = " w-1/2 rounded-lg text-3xl  mx-auto text-center" >{{Question}} </div>
            <br>
            <button class="rounded inline bg-gray-600 w-1/4 mr-4 text-base" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[0] === Answer,'bg-red-500':DisplayAnswerMC && answers[0] !== Answer}" @click="btnClickChoice(answers[0])">{{answers[0]}}</button>
            <button class="rounded inline bg-gray-600 w-1/4 ml-4 text-base" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[1] === Answer,'bg-red-500':DisplayAnswerMC && answers[1] !== Answer}" @click="btnClickChoice(answers[1])">{{answers[1]}}</button>
            <br>
            <button class="rounded inline bg-gray-600 w-1/4 mr-4 text-base" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[2] === Answer, 'bg-red-500':DisplayAnswerMC && answers[2] !== Answer}" @click="btnClickChoice(answers[2])">{{answers[2]}}</button>
            <button class="rounded inline bg-gray-600 w-1/4 ml-4 text-base" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[3] === Answer, 'bg-red-500':DisplayAnswerMC && answers[3] !== Answer}" @click="btnClickChoice(answers[3])">{{answers[3]}}</button>
        </div>
        
    </div>
    

</template>

<script>
import SubBtn from "../components/SubBtn.vue"

export default {
    name: 'Card',
    components: {SubBtn},

    props: [ "Question","Answer","buildMode", "multChoice", "answers" ],

    data() {
        return {
            question : '',
            optionA : "",
            optionB : "",
            optionC : "",
            optionD : "",
            DisplayAnswerMC : false,
        }
    },

    mounted() {
        this.question = this.Question
    },

    methods: {
        btnClickChoice(a){
            
            if(!this.DisplayAnswerMC)
            {
                console.log("pressed")
                if(a === this.Answer)
                {
                    console.log("this is correct")
                }
            this.DisplayAnswerMC = true
            }
        }
    }
}
</script>

