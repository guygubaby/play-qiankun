<template>
  <div class="text-slate-800">
    <p>Home page</p>
    <p>It works</p>

    <p>Counter is : {{ counter }}</p>

    <button class="btn" @click="counter++">
      inc
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
</script>
