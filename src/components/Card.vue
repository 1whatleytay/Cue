<template>
    <div class="w-1/2 bg-gray-800 rounded-lg h-auto text-white text-4xl text-center mx-auto my-6 p-12"
        v-bind:class="{'bg-blue-400':buildMode,'bg-white':multChoice && !buildMode}">
        <div v-if="buildMode">
            <input class="w-1/2 input-center text-gray rounded-lg text-4xl border-none -mx-20 text-center p-2 my-8" v-model="question">
            <div class="py-4">
                <input class="text-4xl rounded border-none w-1/4 mr-4 p-2" v-model="optionA">
                <input class="text-4xl rounded border-none w-1/4 ml-4 p-2" v-model="optionB">
            </div>
            <div class="py-4">
                <input class="text-4xl rounded border-none w-1/4 mr-4 p-2" v-model="optionC">
                <input class="text-4xl rounded border-none w-1/4 ml-4 p-2" v-model="optionD">
            </div>
            <div class="py-4">
                <input class="text-4xl text-green w-1/2 rounded border-none p-2" v-model="answer">
            </div>
        </div>
        <div v-if="!buildMode">
            <div class="w-1/2 rounded-lg text-4xl mx-auto text-center mb-4"> {{Question}} </div>
            <div class="py-2">
                <button class="rounded inline bg-gray-600 w-1/4 mr-4 text-white text-2xl" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[0] === Answer,'bg-red-500':DisplayAnswerMC && answers[0] !== Answer}" @click="btnClickChoice(answers[0])">{{answers[0]}}</button>
                <button class="rounded inline bg-gray-600 w-1/4 ml-4 text-white text-2xl" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[1] === Answer,'bg-red-500':DisplayAnswerMC && answers[1] !== Answer}" @click="btnClickChoice(answers[1])">{{answers[1]}}</button>
            </div>
            <div class="py-2">
                <button class="rounded inline bg-gray-600 w-1/4 mr-4 text-white text-2xl" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[2] === Answer, 'bg-red-500':DisplayAnswerMC && answers[2] !== Answer}" @click="btnClickChoice(answers[2])">{{answers[2]}}</button>
                <button class="rounded inline bg-gray-600 w-1/4 ml-4 text-white text-2xl" v-bind:class = "{'bg-green-500':DisplayAnswerMC && answers[3] === Answer, 'bg-red-500':DisplayAnswerMC && answers[3] !== Answer}" @click="btnClickChoice(answers[3])">{{answers[3]}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import connection from '../config'

export default {
    name: 'Card',

    props: [ "Question","Answer","buildMode", "multChoice", "answers" ],

    data() {
        return {
            question : "",
            optionA : "",
            optionB : "",
            optionC : "",
            optionD : "",
            answer: "",
            DisplayAnswerMC : false,
        }
    },

    mounted() {
        this.question = this.Question
        this.answer = this.Answer

        this.optionA = this.answers[0]
        this.optionB = this.answers[1]
        this.optionC = this.answers[2]
        this.optionD = this.answers[3]
    },

    methods: {
        btnClickChoice(a){
            if(!this.DisplayAnswerMC)
            {
                if(a === this.Answer)
                {
                    this.$emit('answer', true)
                }
                else
                {
                    this.$emit('answer', false)
                }
            this.DisplayAnswerMC = true
            }
        }
    }
}
</script>

