<script setup>
const myRefFunc = (el) => {
  console.log(el.textContent)
  el.textContent = 'Text Changed'
  el.style.color = 'red'
}
</script>

<template>
  <h1 :ref="myRefFunc">This is initial value</h1>
</template>