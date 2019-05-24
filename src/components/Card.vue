<template>
    <div class = "bg-white w-1/2 rounded h-300 text-4xl text-center mx-auto" @click = "onPress()" >
        <br>
        <br>
        <br>
        {{displayAnswer? Answer: Question}}
        <br>
        <br>
        <br>

        
    </div>
    

</template>

<script>
export default {
    props: [ "Question","Answer" ],
    methods: {
        onPress() {
            console.log("press")
            this.displayAnswer = !this.displayAnswer
        }
    },
    data() {
        return {
            displayAnswer: false
        }
    }

}
</script>

