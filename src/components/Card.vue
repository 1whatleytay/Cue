<template>
    <div class = "w-1/2 rounded-lg h-auto text-4xl text-center mx-auto my-6 p-12 "
        v-bind:class = "{'bg-green-500':displayAnswer, 'bg-red-400':!displayAnswer}" @click = "onPress()" >
        {{displayAnswer? Answer: Question}}
    </div>
    

</template>

<script>
export default {
    props: [ "Question","Answer" ],
    methods: {
        onPress() {
            this.displayAnswer = !this.displayAnswer
            console.log(this.displayAnswer)
            
        }
    },
    data() {
        return {
            displayAnswer: false

        }
    }

}
</script>

