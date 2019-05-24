<template>
  <div id="app">
    <div class="bg-blue-500 text-white text-center text-6xl py-4">QCards</div>
    <router-view/>
  </div>
</template>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css?family=Philosopher|Roboto&display=swap');
body {
  margin: 0px;
}

div {
  font-family: 'Philosopher', sans-serif;
}
</style>
