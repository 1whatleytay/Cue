<template>
    <div class= "ml-24 text-center rounded-lg bg-red-400 w-12 h-12" @click="onPressed()">
        +
    </div>
</template>
<script>


export default {
    name: "SubBtn",
    

    props: ["question","optionA","optionB", "optionC","optionD"],
    methods : {
        onPressed() {
            console.log("twas pressed")
        }
    }
}
</script>
